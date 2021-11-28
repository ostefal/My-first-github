
var getRandomNamber = function (size) {         // создал функция для рандомного выбора числа относительно размера карты (size) 
    return  Math.floor(Math.random()) * size
}
var width = 1000;
var hidght = 1000;

var target = {                                  // создал объект для определения цели. Значение беру из функции выше
    x: getRandomNamber(width),
    y: getRandomNamber(hidght)
}

var clicks = 0;

var getDistance = function (event,target) {
    
}