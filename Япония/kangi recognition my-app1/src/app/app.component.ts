import { Component } from '@angular/core';
import {KanjiRecognitionComponent} from "./lib/kanji-recognition.component";
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: "my-app1";
  suggestions: string[];
}
