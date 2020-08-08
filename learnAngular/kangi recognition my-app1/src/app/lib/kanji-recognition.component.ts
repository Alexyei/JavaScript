import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscription, fromEvent} from 'rxjs';
import {throttleTime, switchMap} from 'rxjs/operators';

// Декоратор класса KanjiRecognitionComponent,
// данный декоратор принимает объект в качестве параметра
// Любые декораторы вызываются один раз при объявлении класса
// Декоторые позволяют динамически добьавлять функциональность и являются альтернативой наследования
// @Decorator вызов декоратора напрямую, @Decorator() возврщается функцией (хабр)
@Component({
  selector: 'lib-kanji-recognition',
  templateUrl: './kanji-recognition.component.html',
  styleUrls: ['./kanji-recognition.component.css']
})

// Реализация классом KanjiRecognitionComponent интерфейса AfterViewInit
// Данный интерфейс требует реализовать только один метод: ngAfterViewInit(): void;
// интерфейсы компилируются в обычные объекты или вообще убираются
export class KanjiRecognitionComponent implements AfterViewInit {
  // @ViewChild('canvas'), @Input(), @Output() декораторы свойств
  @ViewChild('canvas') canvas: ElementRef;
  // @Input() получение значения параметров из html;
  @Input() width = 400;
  @Input() height = 350;
  @Input() lineWidth = 5;
  @Input() maxResults = 10;
  @Input() color = '#000';

  // параметр маассив из одного элемента типа string
  @Output() done = new EventEmitter<[string]>();

  // синтаксический сахар
  // @Output() httpError: EventEmitter<any> = new EventEmitter();
  @Output() httpError = new EventEmitter<any>();
  @Output() apiError = new EventEmitter<any>();

  // Объявление полей класса, если стоит = то поле инициализируется значением, после двоеточия указан тип поля
  ctx: CanvasRenderingContext2D;
  isDown = false;
  nativeElement;
  moveSub: Subscription;
  hostRect;
  timerStart: number;
  data = [];

  // element это параметр типа ElementRef
  // private http: HttpClient это параметр типа HttpClient (Angular),
  // для хранения значения которого создаётся private поле с тем же именем в данном классе
  constructor(element: ElementRef, private http: HttpClient) {
    this.nativeElement = element.nativeElement;

    fromEvent(this.nativeElement, 'mousedown').subscribe(
      ({clientX: x, clientY: y}) => {
        if (!this.timerStart) {
          this.timerStart = Date.now();
        }
        this.updateRect();
        const stroke = [[], [], []];
        this.ctx.beginPath();
        x = x - this.hostRect.x;
        y = y - this.hostRect.y;
        this.ctx.moveTo(x, y);
        stroke[0].push(x);
        stroke[1].push(y);
        stroke[2].push(Date.now() - this.timerStart);
        this.moveSub = fromEvent(this.nativeElement, 'mousemove')
          .pipe(
            // задержка 20 мс перед повторным вызовом mouse move
            throttleTime(20),
            switchMap(({clientX, clientY}) => {
              clientX = clientX - this.hostRect.x;
              clientY = clientY - this.hostRect.y;
              stroke[0].push(clientX);
              stroke[1].push(clientY);
              stroke[2].push(Date.now() - this.timerStart);
              this.ctx.lineTo(clientX, clientY);
              this.ctx.stroke();
              return fromEvent(this.nativeElement, 'mouseup');
            })
          )
          .subscribe(_ => {
            this.moveSub.unsubscribe();
            this.data.push(stroke);
            this.sendData();
          });
      }
    );
  }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = this.color;
    this.ctx.lineCap = 'round';
    this.updateRect();
  }

  updateRect(): void {
    this.hostRect = this.canvas.nativeElement.getBoundingClientRect();
  }

  draw(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(10, 10);
    this.ctx.lineTo(50, 25);
    this.ctx.lineTo(25, 40);
    this.ctx.stroke();
  }

  sendData(): void {
    const data = {
      app_version: 0.4,
      api_level: '537.36',
      device:
        '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      input_type: 0,
      options: 'enable_pre_space',
      requests: [
        {
          writing_guide: {
            writing_area_width: this.width,
            writing_area_height: this.height
          },
          pre_context: '',
          max_num_results: this.maxResults,
          max_completions: 0,
          language: 'ja',
          ink: this.data
        }
      ]
    };

    this.post('https://inputtools.google.com/request?itc=ja-t-i0-handwrit&app=translate', null, res => {
      console.log('Vanilla Post');
      console.log(res);
    });
    this.http
      .post<any>(
        'https://inputtools.google.com/request?itc=ja-t-i0-handwrit&app=translate',
        data
      )
      .subscribe(
        (result: [string, [any]]) => {
          if (result[0] === 'SUCCESS') {
            this.done.emit(result[1][0][1]);
          } else {
            console.error('something went wrong');
            this.done.emit(null);
            this.apiError.emit(result);
          }
        },
        error => this.httpError.emit(error)
      );
  }

  private post(url, data, callback): void {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      let readyState = xhr.readyState;

      if (readyState == 4) {
        callback(xhr);
      }
    };

    let queryString = '';
    if (typeof data === 'object') {
      for (let propertyName in data) {
        queryString += (queryString.length === 0 ? '' : '&') + propertyName + '=' + encodeURIComponent(data[propertyName]);
      }
    }

    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.send(queryString);
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.data = [];
  }
}
