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

var input = "javascript is awesome";
var output = "";

for (i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        // console.log(input[i]);
        console.log(output += 4);
    } else if (input[i] === "e") {
        // console.log(input[i]);
        console.log(output += 3);
    } else if (input[i] === "i") {
        // console.log(input[i]);
        console.log(output += 1);
    } else if (input[i] === "o") {
        // console.log(input[i]);
        console.log(output += 0);
    } else {console.log(output += input[i]);}
}

// for (i = 0; i < input.length; i++) {

//     output += input[i];
// }

console.log(input.length);
console.log(output);
