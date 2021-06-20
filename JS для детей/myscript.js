// Пробел
// document.write(height);
// var body = document.querySelector('body');
// body.appendChild(document.createElement('div'));

// Ввод значений через всплывающее окно
// переменная = prompt("Какого ты роста?");

// IF ELSE IF ELSE IF ELSE 
// if (x > 11) {
//     x += y;
//   } else if (x == 4) { 
//     x -= y; 
//   } else { 
//     x = y;
//   }

// ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ ПРОГРАММЫ

// Проверка роста на отракционе // Проверка роста на отракционе // Проверка роста на отракционе // Проверка роста на отракционе // Проверка роста на отракционе // Проверка роста на отракционе 
// hiteRestriction = 150;
// height = prompt("Какого ты роста?");

// if (height >= hiteRestriction) {
//     alert("Проходи кататься на этих сумашедших горках!!!")
// }
// else {
//     alert("Тебе надо подрасти =,(((( ")
// }

// Ребята угадывают загаданное число// Ребята угадывают загаданное число// Ребята угадывают загаданное число// Ребята угадывают загаданное число// Ребята угадывают загаданное число
// var mySecretNumber;
// mySecretNumber = prompt("Напиши загаданное число");
// var numberChico = Math.floor(Math.random()*10)+1;
// var numberHarpo = Math.floor(Math.random()*10)+1;
// var namberGroucho = Math.floor(Math.random()*10)+1;

// if (mySecretNumber == numberChico) {
//     alert("Чико угадал число " + mySecretNumber);
// } else if (mySecretNumber == numberHarpo) {
//     alert("Харпо уuадал число "+mySecretNumber);
// } else if (mySecretNumber == namberGroucho) {
//     alert("Гручо угадал число "+mySecretNumber);
// } else {
//     alert ("Никто не угадал твоё число!)))");
// }

// // Правила входа в кинотеатр. Возраст 12+ или совместно с родителями   КОД НЕ РАБОТАЕТ. НУЖНО ФИКСИТЬ КОМАНДУ prompt. Сейчас prompt присваивает одно и тоже значение двум переменным. КОД НЕ РАБОТАЕТ.

// var age = prompt("Какой у тебя возраст?");
// var accompanied = prompt("Ты пришёл в сопровождении взрослых?");

// document.write(age);
// console.log(age);

// if (age => 12) {
//     alert("Приятного просмотра, проходите на ваши места.");
// // }else if (accompanied == "да") {
// //     alert("Приятного просмотра, проходите на ваши места.");
// }else {
//     alert("Малышь, тебе нужно подрасти или придти со взрослым");
// }

// МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ

// var dinosaurs = [   /* - вложенный массив *//* - вложенный массив */
//     "тиранрзавр",
//     "велоцираптор",
//     ["стегозавр",
//     110,
//     "брахиозавр"],
//     "птеранодор",
//     "апатозавр",
//     "диплодок",
//     "компсогнат"
// ];

// dinosaurs[110] = "новый элемент";

// console.log(dinosaurs[1]);
// // велоцираптор
// console.log(dinosaurs[3]);
// // трицератопс

// dinosaurs[1]="другой динозавр";

// console.log(dinosaurs[1]);
// // велоцираптор
// console.log(dinosaurs[3]);
// // трицератопс

// console.log(dinosaurs);
// console.log(dinosaurs[2][1]);
// console.log(dinosaurs.length - 1);
// dinosaurs[dinosaurs.length - 1];

// var animals = [];
// animals.push("Кот");
// animals.push("Пёс");
// animals.push("Лама");

// console.log(animals);

// animals.unshift("Мартышка");
// animals.unshift("Белый медведь");

// console.log(animals);
// lastAnimal = animals.shift();
// console.log(animals);
// console.log(lastAnimal);

// var furryAnimals = ["Альпака", "Кольцхвостый лемур", "Йети"]; 
// var scalyAnimals = ["Удав", "Годзилла"];
// var feathered = ["Ара", "Додо"];

// var furryAnimalsAndscalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAnimalsAndscalyAnimals);
// var allAnimals = furryAnimals.concat(scalyAnimals, feathered);
// console.log(allAnimals);

// var colors = ["красный", "зелёный", "синий"];

// console.log(allAnimals.length);



// var landmarks = [] //использование массива. Дорога домой
// landmarks.push("Мой дом");
// landmarks.push("Мигающий фонарь");
// landmarks.push("Протекающий гидрант");
// landmarks.push("Пожарная станция");
// landmarks.push("Приют для кошек");
// landmarks.push("Моя бывшая школа");
// landmarks.push("Дом подруги");

// console.log(landmarks);

// console.log(landmarks[Math.floor(Math.random() * 7)]);

// console.log(landmarks.length);

// ballOfFate = [ // шар судьбы
//     "Звучит не плохо",
//     "Да, это определённо надо сделать",
//     "Не думаю, что это хорошая идея",
//     "Может, не сегодня?",
//     "Действуй"
// ]

// // console.log(ballOfFate[Math.floor(Math.random() * ballOfFate.length)]);

// ballOfFate.push("Компьютер говорит НЕТ!");

// console.log(ballOfFate[Math.floor(Math.random() * ballOfFate.length)]);

// var bodyPart = [
//     "глаз",
//     "нос",
//     "череп",
//     "стул",
//     "сосок",
//     "палец"
// ]
// var abjective = [
//     "гадкий",
//     "вонючий",
//     "грязный",
//     "склизкий",
//     "пухлый",
//     "противный"
// ]
// var words = [
//     "выдра",
//     "муха",
//     "дубина",
//     "мартышка",
//     "крыса"
// ]
// var myTeaser = "У тебя " + bodyPart[Math.floor(Math.random() * bodyPart.length)]
// + " словно " + abjective[Math.floor(Math.random() * abjective.length)] +
//     " " + words[Math.floor(Math.random() * words.length)] + "!!!";

// var myTeaser = [
// "У тебя", bodyPart[
//     Math.floor(Math.random() * bodyPart.length)
// ],
// "словно", abjective[
//     Math.floor(Math.random() * abjective.length)
// ],
// words[
//     Math.floor(Math.random() * words.length)
// ], "!!!"
// ].join(" ");

// console.log(myTeaser);

// var cat = { // создание объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
//     legs: 3,
//     "name 123": "Гармония",
//     color: "Черепаховый"
// };
// cat["name"]; //доступ к значению внутри объекта

// // console.log(cat["name"]);
// console.log(cat["name 123"]);

// var cat = { 
//     legs: 3,
//     name: "Гармония",    // создание объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
//     color: "Черепаховый"
// };
// cat["age"] = 110;   // добавляем новые элементы объекта
// cat.tail = 14;       // добавляем новые элементы объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ

// Object.keys(cat); //узнать все ключи объекта
// cat["name"];     //доступ к значению внутри объекта
// cat.age; 

// console.log(Object.keys(cat));
// console.log(cat["name"]);
// console.log(cat.age);

// друзья элементы
// var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
// var dave = { name: "Дейв", age: 5, luckyNumbers: [3, 9, 40] };
// var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

// var friends = [anna, dave, kate];   // массив друзей

// console.log(friends[2]);
// console.log(friends[2].name);
// console.log(friends[2].luckyNumbers[1]);

// kate.luckyNumbers.push(6);
// kate.luckyNumbers.unshift(5);
// console.log(friends[2].luckyNumbers);

// Учёт долгов

// var owedMony = {};
// owedMony["Джимми"] = 5;
// owedMony["Анна"] = 7;

// owedMony.Анна; // сколько задолжала анна
// console.log(owedMony.Анна);
// owedMony.Джимми += 3; // дмимми взял в долг ещё 3

// console.log(owedMony);

// Хранение фильмов
// var muvies = {
//     "В поисках немо": {
//         releasDate: 2003,
//         duration: 100,
//         actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
//         format: "DVD"
//     },
//     "Звёздные войны: эпизод VI - Возвращение джедая": {
//         releasDate: 1983,
//         duration: 134,
//         actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
//         format: "DVD"
//     },
//     "Гарри Поттер и Кубок огня": {
//         releasDate: 2005,
//         duration: 157,
//         actors: ["Дэниел Редклиф", "Эмма Уотсон", "Руперт Гринт"],
//         format: "Blu-rey"
//     }
// };

// console.log(muvies["В поисках немо"]);

// var cars = { // создаём новый объект
//     releasDate: 2006,
//     duration: 117,
//     actors: ["Оулэн Уилсон", "Бони Хант", "Пол Ньюман"],
//     format: "Blu-rey"
// }

// muvies["Тачки"] = cars; // добавляем его в массив

// console.log(muvies);
// muvies // проверяем

// Object.keys(muvies); // смотрим ключи

// console.log(muvies["В поисках немо"].duration);
// muvies["Звёздные войны: эпизод VI - Возвращение джедая"].actors.push(111);
// muvies["Звёздные войны: эпизод VI - Возвращение джедая"].new = "Значение";
// muvies["Звёздные войны: эпизод VI - Возвращение джедая"].actors[1] = 345;
// console.log(muvies["Звёздные войны: эпизод VI - Возвращение джедая"].actors);

// var namer = "Alex";
// console.log("Hello "+ namer);
// if (namer.length > 6) {
//     console.log("Ну и длинющее у Вас имя!");
// }

// else {
//     console.log("Имя у вас не из длинных");
// }

// var lemonChicken = false;
// var beefWithBlackBean = false;
// var sweetAndSourPork = false;

// if (lemonChicken) {
//     console.log("Отлично! Я буду курицу!!!")
// } else if (beefWithBlackBean) {
//     console.log("Заказываю говядину!")    
// } else if (sweetAndSourPork) {
//     console.log("Ладно, закажу свинину...") 
// } else {
//     console.log("Что же, остаётся рис с яйцом") 
// }

// интерактивная версия  // интерактивная версия  // интерактивная версия
// if (lemonChicken = confirm("У Вас есть курица?")) { // интерактивная версия
//     console.log("Отлично! Я буду курицу!!!");
// } else if (beefWithBlackBean = confirm("Тогда может быть у Вас есть говядина?")) {
//     console.log("Заказываю говядину!");
// } else if (confirm(sweetAndSourPork = "Ну а свинина то есть?")) {
//     console.log("Ладно, закажу свинину...");
// } else {        // можно не использовать
//     var riceWithEgg = true;
//     sweetAndSourPork = false;
//     console.log("Что же, остаётся рис с яйцом");
// }
// console.log(lemonChicken);
// console.log(sweetAndSourPork);
// console.log(sweetAndSourPork)
// console.log(riceWithEgg);

// var sheepCounted = 1;
// while (sheepCounted <= 10) {
//     console.log("Овца № " + sheepCounted + "!");
//     sheepCounted++;
// }
// console.log("Хрррррррррр-псссссссс....")

// var Hello = 30;
// for (index = 0; index < Hello; index++) {
//     console.log("Привет");
// }

// var animals = ["Лев", "Фламинго", "Белый медведь", "Удав"];

// var words = "Алексей";
// for (i = 0; i < words.length; i++) {
//     console.log("В моём имени есть буква - " + words[i]);
// }

// for (x = 3; x < 10000; x = x*3) {
//     console.log(x);
// }

// var x = 3;
// while (x<10000) {
//     console.log(x = x*3);
// }

// var animals = [
//     "Кот",
//     "Рыба",
//     "Лемур",
//     "Комодский варан"
// ];

// beautifulAnimals = " - прекрасное животное";

// for (i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + beautifulAnimals;
// }
// console.log(animals);

// var alphabet = " !  , абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var say = "";

// while (say.length < 200) {
//     say += (alphabet [Math.floor(Math.random()*alphabet.length)]);
// }
// console.log(say);

// var input = "javascript is awesome";
// var output = "";

// for (i = 0; i < input.length; i++) {
//     if (input[i] === "a") {
//         // console.log(input[i]);
//         console.log(output += 4);
//     } else if (input[i] === "e") {
//         // console.log(input[i]);
//         console.log(output += 3);
//     } else if (input[i] === "i") {
//         // console.log(input[i]);
//         console.log(output += 1);
//     } else if (input[i] === "o") {
//         // console.log(input[i]);
//         console.log(output += 0);
//     } else {console.log(output += input[i]);}
// }

// for (i = 0; i < input.length; i++) {

//     output += input[i];
// }

// console.log(input.length);
// console.log(output);

// function testFactorial(a) {
//     var x;
//     x=1;
//     for (i=1; i <= a; i++){
//         x = x*i;}// Тут нужно написать решение
//         return x;
// }


// // факториал (1 * 2 * 3 * 4 * 5) числа - a.
//     var a = 5;

//     var x = 1;
//     for (i=1; i <= a; i++){
//         x=i*x;
//         // console.log(i);
//         console.log(x);
//     }

// for (x = 1; x < 10000; x = x*2) { // Степени двойки до 10 тысяч.
//     console.log(x);
// }

// var outFirstFunction = function(argument){
//     console.log("Hallo, world!" + argument);
// }
// outFirstFunction(" Aleksey!)))");
// outFirstFunction(" Lily!)))");

// var drawCats = function (howManyTimes) {
//     for (i = 1; i <= howManyTimes; i++) {
//         console.log(" =^.^=");
//         }
// }
// drawCats(10);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// }
// printMultipleTimes(17, " =^.^=");
// printMultipleTimes(7, " >_<");

// var bodyPart = [
//     "глаз",
//     "нос",
//     "череп",
//     "стул",
//     "сосок",
//     "палец"
// ]
// var abjective = [
//     "гадкий",
//     "вонючий",
//     "грязный",
//     "склизкий",
//     "пухлый",
//     "противный"
// ]
// var words = [
//     "выдра",
//     "муха",
//     "дубина",
//     "мартышка",
//     "крыса"
// ]

// var PincRandomWord = function (name_massive) { // выбрать случайное слово
//     return name_massive[Math.floor(Math.random() * words.length)];
// }

// var randomString = (
//     "У тебя "+ PincRandomWord(bodyPart)+ 
//     " словно " + PincRandomWord(abjective) 
//     + " " + PincRandomWord(words) +"!!!"
// );

// console.log(randomString);

// var GenerateDomInsult = function () {
//     var bodyPart = [
//     "глаз",
//     "нос",
//     "череп",
//     "стул",
//     "сосок",
//     "палец"
// ]
// var abjective = [
//     "гадкий",
//     "вонючий",
//     "грязный",
//     "склизкий",
//     "пухлый",
//     "противный"
// ]
// var words = [
//     "выдра",
//     "муха",
//     "дубина",
//     "мартышка",
//     "крыса"
// ]

// var PincRandomWord = function (name_massive) { // выбрать случайное слово
//     return name_massive[Math.floor(Math.random() * words.length)];
// }

// var randomString = "У тебя "+ PincRandomWord(bodyPart)+ 
//     " словно " + PincRandomWord(abjective) 
//     + " " + PincRandomWord(words) +"!!!";
//     console.log(randomString);
// }
// GenerateDomInsult();

// var medalForScore = function (score) {
//     if (score < 3) {
//         return "Бронзовая";
//     }
//     if (score < 7) {
//         return "Серебрянная";
//     }
//         return "Золотая";
// };

// console.log(medalForScore(8));

// function add(par_1, par_2) {
//         return par_1+par_2
// };
// function multiply(par_1, par_2) {
//     return par_1*par_2
// };

// add(0,777) + multiply(36325,9824);

// Совпадают ли массивы
// function areArraysSome(array_1,array_2) {
//     return array_1.join("") === array_2.join("");
// }
// areArraysSome([1,2,3,4,5] , [1,2,3,4,5])

// DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery
// DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery
// DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery


// heading - заголовок


// var headingElement = document.getElementById("main-heading");
// var dom_2 = document.getElementById("heading-2");

// headingElement.innerHTML;
// dom_2.innerHTML;

// console.log(headingElement.innerHTML);

// var newHeadingText = prompt("Введите новый заголовок: ");
// headingElement.innerHTML = newHeadingText;




// setTimeout(wakeUpUser, 5000);
// function wakeUpUser() {
//     var newHeadingText = prompt("Введите новый заголовок: ");
//     $("#main-heading").text(newHeadingText);
// }

// $("body").append("<p>Это новый параграф </p>");
// $("#main-heading").append("<p>Это новый параграф </p>");

// setTimeout(wakeUpUser, 5000); // перечисляем и добавляем 3 хобби на страницу спустя 5 сек.
// function wakeUpUser() {
//     for (var i = 0; i < 3; i++) {
//         var hobby = prompt("Назови одно из своих хобби!");
//         $("body").append("<p>" + hobby + "</p>");
//     }
// }

// for (var i = 0; i < 3; i++) {
//     $("h2").hide(5000);
//     $("h2").show(5000);
// }


// перечисляю своих друзей и делаю их лучшими!
// var friends = [
//     "Lily",
//     "Andru",
//     "Anatoliy",
//     "Helen",
//     "Luba",
//     "Alexandre",
//     "Luna"
// ]

// setTimeout(wakeUpUser, 3000); // 
// function wakeUpUser() {
//     $("h1").text("Мои друзья");
//     $("h2").hide(3000);
//     for (i = 0; i < friends.length; i++) {
//         $("body").append("<p>" + friends[i] + "</p>").hide(1).fadeIn(3000);
//     }
//     $("p").append(" лучший!!!");
// }



// мигающий заголовок с замедлением
// for (i = 1; i <= 5; i++) { // мигающий заголовок с замедлением
//     $("h1").hide(1).fadeIn(i*1000);
// }



// // Отложенная анимация
// $("h2").fadeOut(3000).delay(5000).fadeIn(3000);



// // Метод fadeTo(,);
// $("h1").fadeTo(3000,0.5);


//  Интерактивное программирование   Интерактивное программирование   Интерактивное программирование   Интерактивное программирование
//  Интерактивное программирование   Интерактивное программирование   Интерактивное программирование   Интерактивное программирование

// function timeUp() {
//     alert("Время вышло");
// }
// setTimeout(timeUp,3000);
// var timeoutId = setTimeout(timeUp,10000);// сохранил ID для отмены таймера
// clearTimeout(timeoutId);// отменил таймер, сработет сразу


// var doHomeWorkAlarm = function () {
//     alert("Эй, пора делать домашку!");
// };
// var timeoutID = setTimeout(doHomeWorkAlarm,6000);
// clearTimeout(timeoutID);


// var couter = 5;
// var printMassage = function(){
//     console.log("Ты смотришь в консоль уже "+couter+" сек");
//     couter+=5;
// };
// var intervalId = setInterval(printMassage,5000);
// // clearInterval(intervalId);



// // бегающая строка
// var leftOffset = 0; // отступ слева
// function moveHeading() { // подвинуть заголовок
//     $("#heading").offset({left: leftOffset}); // найти элемент(строку) и прибавить слева пиксели
//     leftOffset++;
//     if (leftOffset>400) {   // как элемент достигнет края в 400 пикселей
//     leftOffset=0;           // обнулиться/начать заново.
//     }
// };
// setInterval(moveHeading,100) // вызывать функцию каждые 30 миллисекунд.



// реакция на Клики
// function clickHandler(event) {
//     console.log("Клик! "+event.pageX+" "+event.pageY);
// };
// $("html").click(clickHandler);



// // заголовок heading двигается за указателем мыши
// $("html").mousemove(function (event) {
//     $("#heading").offset({
//         left: event.pageX,
//         top: event.pageY
//     });
// });


// // заголовок heading двигается за кликом мыши
// $("html").click(function (event) {
//     $("#heading").offset({
//         left: event.pageX,
//         top: event.pageY
//     });
// });
// // и показывает их координаты в консоли
// function clickHandler(event) {
//     console.log("Клик! "+event.pageX+" "+event.pageY);
// };
// $("html").click(clickHandler);



// //не очень получилось начало
// // движение заголовка по квадрату
// var direction = 'вправо';
// var offset = 8;

// var moveHeading = function () {

//     if (direction === 'вправо') {
//         $("#heading").offset({ left: offset });
//         offset++;
//         if (offset > 200) {
//             offset = 443.6875;
//             direction = 'вниз';
//         }
//     } if (direction === 'вниз') {
//         $("#heading").offset({ top: offset });
//         offset++;
//         if (offset > 443.6875 + 200) {
//             offset = 200;
//             direction = 'влево';
//         }
//     } if (direction === 'влево') {
//         $("#heading").offset({ left: offset });
//         offset--;
//         if (offset < 8) {
//             offset = 443.6875 + 200;
//             direction = 'вверх';
//         }
//     } if (direction === 'вверх') {
//         $("#heading").offset({ top: offset });
//         offset--;
//         if (offset < 443.6875) {
//             offset = 8;
//             direction = 'вправо';
//         }
//     }
// };
// // var timeoutId = setInterval(moveHeading, 100);

// // function stop() {
// //     clearTimeout(timeoutId);
// // }
// // $("#heading").click(stop);  // останавливает движение по клику на заголовок


// // движение заголовка по квадрату - Игровая версия
// var clickPlusSpeed = 100; // начальная скорость
// var click = 0;

// function game() {

//     var intervalId = setInterval(moveHeading,clickPlusSpeed);//сохранил ID
//     clickPlusSpeed /=2; // увеличил скорость в два раза

//     click ++;
//     if (click >= 10) {
//         $("#heading").text("Ты выйграл!!!");

//         clearInterval(intervalId);
//         return;
//     }
//     if (click === 1) {
//         $("#heading").text("Кликнул "+ click +"раз.");
//     } else {
//         $("#heading").text("Кликнул "+ click +"раза.");
//     }
// }


// // считаю клики
// // var click = 0;
// // function score() {
// //     click ++;
// //     if (click >= 10) {
// //         $("#heading").text("Ты выйграл!!!");
// //         clearInterval(intervalId);
// //         return;
// //     }
// //     if (click === 1) {
// //         $("#heading").text("Кликнул "+ click +"раз.");
// //     } else {
// //         $("#heading").text("Кликнул "+ click +"раза.");
// //     }
// // };


// if (click < 10) {
//     $("#main-heading").click(game)/* .click(score) */;
// }else{
//     clearInterval(intervalId);
// }
//  //не очень получилось конец.

// вариант с сайта
// var direction = 'вправо';
// var offset = 8;
// var intervalLength = 100;
// var clicks = 0;

// var moveHeading = function () {
//   if (direction === 'вправо') {
//     $("#heading").offset({ left: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 443.6875;
//       direction = 'вниз';
//     }
//   } else if (direction === 'вниз') {
//     $("#heading").offset({ top: offset });
//     offset++;
//     if (offset > 443.6875+200) {
//       offset = 200;
//       direction = 'влево';
//     }
//   } else if (direction === 'влево') {
//     $("#heading").offset({ left: offset });
//     offset--;
//     if (offset < 8) {
//       offset = 443.6875+200;
//       direction = 'вверх';
//     }
//   } else if (direction === 'вверх') {
//     $("#heading").offset({ top: offset });
//     offset--;
//     if (offset < 443.6875) {
//       offset = 8;
//       direction = 'вправо';
//     }
//   }
// };

// var intervalId = setInterval(moveHeading, intervalLength);
// clearInterval(intervalId);

// $("#heading").click(function () {
//   clearInterval(intervalId);
//   intervalLength /= 2;
//   clicks++;
//   if (clicks >= 10) {
//     $("#heading").text("Накликал-таки!");
//   } else {
//     intervalId = setInterval(moveHeading, intervalLength)
//     if (clicks === 1 || clicks === 5 || clicks === 6 || clicks === 7 || clicks === 8 || clicks === 9) {
//         $("#heading").text("Кликнул "+ clicks +"раз.");
//     } else {
//         $("#heading").text("Кликнул "+ clicks +"раза.");
//     }
//   }
// });

