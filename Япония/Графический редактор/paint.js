// Создание Canvas
let canvas = document.createElement("canvas");
let parent = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let savePicturePixels;

//Инициализация Canvas
let penSize = 5;
let currentColor = "black";
let currentBg = "cyan";
initCanvas(800, 600);

// window.onload = function (){
//     let img = document.querySelector("img");
//     ctx.drawImage(img, 0, 0);
//     savePicture();
// };


// Инструменты рисования (значение инструмента не должно быть 0, иначе проверка в if не будет пройдена)
let Senders = Object.freeze({"Pen": 1, "FillRectangle": 2});
// Инструмент не выбран
// let currentSender = null;
let currentSender = Senders.Pen;

let startPaint = false;
let firstPoint;
let secondPoint;

// Добавляем обработчики событий для рисования
canvas.addEventListener("mousedown", function (event) {
    mousedown(canvas, event);
});
// Привязка к window
window.addEventListener("mousemove", function (event) {
    mousemove(canvas, event);
});
// Привязка к window, так как если пользователь заведёт мышь за границу холста и отпустит, рисование должно остановиться
window.addEventListener("mouseup", function (event) {
    mouseup(canvas, event);
});

// Обработчики для сенсорного ввода
canvas.addEventListener("touchstart", function (event) {
    if (event.target.nodeName === 'CANVAS') {
        event.preventDefault();
    }
    mousedown(canvas, event);
}, {passive: false});
// Привязка к window
window.addEventListener("touchmove", function (event) {
    if (event.target.nodeName === 'CANVAS') {
        event.preventDefault();
    }
    mousemove(canvas, event);
}, {passive: false});
// Привязка к window, так как если пользователь заведёт мышь за границу холста и отпустит, рисование должно остановиться
window.addEventListener("touchend", function (event) {
    if (event.target.nodeName === 'CANVAS') {
        event.preventDefault();
    }
    mouseup(canvas, event);
}, {passive: false});

function mousedown(canvas, event) {
    // Если инструмент выбран
    if (currentSender) {
        firstPoint = getMousePos(canvas, event);
        startPaint = true;

        ctx.lineWidth = penSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = currentColor;
        ctx.fillStyle = currentColor;

        ctx.moveTo(firstPoint.x, firstPoint.y)
        ctx.beginPath();

    }
}

function mousemove(canvas, event) {
    if (currentSender && startPaint) {
        secondPoint = getMousePos(canvas, event);
        redraw();
    }
}

function mouseup(canvas, event) {
    if (startPaint) {
        ctx.closePath();
        savePicture();
        startPaint = false;
    }
}

// Функция перерисовки
function redraw() {
    switch (currentSender) {
        case Senders.Pen:
            ctx.lineTo(secondPoint.x, secondPoint.y)
            ctx.stroke();
            // firstPoint = secondPoint;
            break;
        case Senders.FillRectangle:
            loadPicture();
            let xStart = Math.min(firstPoint.x, secondPoint.x);
            let yStart = Math.min(firstPoint.y, secondPoint.y);
            let xEnd = Math.max(firstPoint.x, secondPoint.x);
            let yEnd = Math.max(firstPoint.y, secondPoint.y);
            ctx.fillRect(firstPoint.x, firstPoint.y, secondPoint.x - firstPoint.x, secondPoint.y - firstPoint.y);
            ctx.stroke();
            break;
    }
}

// Получение позиции мыши относительно окна браузера (если прибавить прокрутку будет относительно документа)
// getBoundingClientRect() left top расстояние до левого верхнего угла canvas относительно окна браузера
// clientX clientY координата клика мыши относительно окна браузера
// возвращаем координаты относительно canvas (0;0) левый верхний угол
function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    if (evt.type.startsWith("touch"))
        return {
            x: evt.changedTouches[0].clientX - rect.left,
            y: evt.changedTouches[0].clientY - rect.top
        }
    else
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
}

function savePicture() {
    savePicturePixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function loadPicture() {
    ctx.putImageData(savePicturePixels, 0, 0);
}

// Функция инициализации Canvas
function initCanvas(width, height) {
    canvas.id = "canvas-area";
    canvas.width = width;// parseInt(document.getElementById("sizeX").value);
    canvas.height = height; // parseInt(document.getElementById("sizeY").value);
    ctx.fillStyle = currentBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    savePicture();
    parent.appendChild(canvas);
}

function clear() {
    ctx.fillStyle = currentBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    savePicture();
}

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
