
var getRandomNamber = function (siz) {         // создал функция для рандомного выбора числа относительно размера карты (size) 
    return Math.floor(Math.random() * siz)
};


var getDistance = function (event, target) {     // вычисляю расстояние от клика до клада 
    var diffX = event.offsetX - target.x;       // нахожу разницу между кликом и кладом по оси Х
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY)); // вывожу полученное значение
}

getDistanceHint = function (distance) {     // Подсказка. Сообщаю насколько близок к цели
    if (distance < 10) {
        return "Обожжёшься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замёрзнешь!";
    }
};

var width = 1000;       // задаю размеры карты
var hidght = 1000;
var clicks = 0;         // клики

var target = {                                  // создал объект для определения цели. Значение беру из функции выше
    x: getRandomNamber(width),
    y: getRandomNamber(hidght)
}

$("#map").click(function (event) {          // обработчик кликов по карте
    clicks++;

    var distance = getDistance(event, target);       // Результат. Расстояние от клика до клада 

    var distanceHint = getDistanceHint(distance);   // Результат. Преобразуем результат расстояния в подсказку

    $("#distance").text(distanceHint);              // Сообщаю игроку подсказку

    if (distance < 8) {
        alert("Клад найден! Сделано кликов:" + clicks);
    }
});