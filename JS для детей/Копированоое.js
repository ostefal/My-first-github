var sillyString = "эЙ, каК деЛа?" // шутливая строка
var lowerString = sillyString.toLowerCase() // строка в нижн регистре
var firstCharacher = sillyString[0] // первая буква
var upperFirstCharacher = firstCharacher.toUpperCase() //большая первая буква
upperFirstCharacher + lowerString.slice(1)

var sillyString = "эЙ, каК деЛа?" // шутливая строка
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase()

//********************************************************************************************************

var dinosaurs = [
    "тиранрзавр",
    "велоцираптор",
    "стегозавр",
    "трицератопс",
    "брахиозавр",
    "птеранодор",
    "апатозавр",
    "диплодок",
    "компсогнат"
];

var maniacs = ["Якко", "Вакко", "Дот"];

//****************************************************************************************************

var animals = [];
animals.push("Кот")
animals.push("Пёс")
animals.push("Лама")
animals.unshift("Мартышка")
animals.unshift("Белый медведь")

animals;

var lastAnimal = animals.pop(); // удаляем последный элемент массива
lastAnimal

var furryAnimals = ["Альпака", "Кольцхвостый лемур", "Йети"]; //  объединить массивы
var scalyAnimals = ["Удав", "Годзилла"];
var feathered = ["Ара", "Додо"];

var furryAnimalsAndscalyAnimals = furryAnimals.concat(scalyAnimals);
var allAnimals = furryAnimals.concat(scalyAnimals, feathered);

var colors = ["красный", "зелёный", "синий"] //поиск индекса элемента в массиве
colors.indexOf("синий")

var animals = [];
animals.push("Кот")
animals.push("Пёс")
animals.push("Лама")
animals.unshift("Мартышка")
animals.unshift("Белый медведь")

animals.join(", ") // массив в строку
"Белый медведь, Мартышка, Кот, Пёс, Лама"

animals.length();
"Белый медведь,Мартышка,Кот,Пёс,Лама"

animals.length(" и ");
"Белый медведь и Мартышка и Кот и Пёс и Лама"

var landmarks = [] //использование массива. Дорога домой
landmarks.push("Мой дом");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");

Math.random(); //Случайный выбор, рандом, округление
Math.random() * 10;
Math.floor(3.056484);
landmarks[Math.floor(Math.random() * 7)]; //Случайный выбор из массива

ballOfFate = [ // шар судьбы
    "Звучит не плохо",
    "Да, это определённо надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Действуй"
]
ballOfFate[Math.floor(Math.random() * ballOfFate.length)];

var bodyPart = [
    "глаз",
    "нос",
    "череп",
    "стул",
    "сосок",
    "палец"
]
var abjective = [
    "гадкий",
    "вонючий",
    "грязный",
    "склизкий",
    "пухлый",
    "противный"
]
var words = [
    "выдра",
    "муха",
    "дубина",
    "мартышка",
    "крыса"
]
var myTeaser = "У тебя " + bodyPart[Math.floor(Math.random() * bodyPart.length)] + " словно " + abjective[Math.floor(Math.random() * abjective.length)] +
    " " + words[Math.floor(Math.random() * words.length)] + "!!!";

var myTeaser = ["У тебя", bodyPart[Math.floor(Math.random() * bodyPart.length)], "словно", abjective[Math.floor(Math.random() * abjective.length)],
    words[Math.floor(Math.random() * words.length)], "!!!"
].join(" ");

var number = [1, 2, 3]; // массив в строку
number.join(">");
"1>2>3"

// *********************************************************************************************создание объекта
var cat = {
    "legs": 3,
    "name": "Гармония",
    "color": "Черепаховый"
};

var cat = { // создание объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
    legs: 3,
    name: "Гармония",
    color: "Черепаховый"
};

cat["name"]; //доступ к значению внутри объекта
"Гармония"

cat.name; //доступ к значению внутри объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
"Гармония"

Object.keys(cat); //узнать все ключи объекта, возвращает массив со всеми ключами
(3) ["legs", "name", "color"]

var cat = {}; // добавляем новые элементы объекта
cat["lengs"] = 3;
cat["name"] = "Гармония";
cat["color"] = "Черепаховый";
cat { legs: 3, name: "Гармония", color: "Черепаховый" }

var cat = {}; // добавляем новые элементы объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
cat.legs = 3;
cat.name = "Гармония";
cat.color = "Черепаховый";
cat { legs: 3, name: "Гармония", color: "Черепаховый" }

var dinosaurs = [ // массивы объектов
    { name: "Тираннозавр Рекс", period: "Верхнемомеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
];
dinosaurs[1]; { name: "Стегозавр", period: "Верхнеюрский" }
dinosaurs[0]; { name: "Тираннозавр Рекс", period: "Верхнемомеловой" }

dinosaurs[0]["name"]; // [индекс] [ключ]
"Тираннозавр Рекс"

dinosaurs[0].name; // ТОЧЕЧНАЯ НОТАЦИЯ
"Тираннозавр Рекс"

// массив друзей
var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дейв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];

friends[2] { name: "Кейт", age: 9, luckyNumbers: Array(3) }
age: 9
luckyNumbers: (3)[1, 2, 3]
name: "Кейт"

friends[2].luckyNumbers[1]; // объект, элемент массива
2
friends[0].luckyNumbers[3]; // объект, элемент массива
16
friends[0].age; // объект, элемент массива
11
friends[0].name; // объект, элемент массива
"Анна"

// Учёт долгов

var owedMony = {};
owedMony["Джимми"] = 5;
owedMony["Анна"] = 7;

owedMony["Анна"]; // сколько задолжала анна
7
owedMony["Джимми"] += 3; // дмимми взял в долг ещё 3
8
owedMony // сколько задолжали
{ Джимми: 8, Анна: 7 }

// Хранение фильмов
var muvies = {
    "В поисках немо": {
        releasDate: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
        format: "DVD"
    },
    "Звёздные войны: эпизод VI - Возвращение джедая": {
        releasDate: 1983,
        duration: 134,
        actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
        format: "DVD"
    },
    "Гарри Поттер и Кубок огня": {
        releasDate: 2005,
        duration: 157,
        actors: ["Дэниел Редклиф", "Эмма Уотсон", "Руперт Гринт"],
        format: "Blu-rey"
    }
};

muvies["В поисках немо"] { releasDate: 2003, duration: 100, actors: Array(3), format: "DVD" }

var cars = { // создаём новый объект
    releasDate: 2006,
    duration: 117,
    actors: ["Оулэн Уилсон", "Бони Хант", "Пол Ньюман"],
    format: "Blu-rey"
}

muvies["Тачки"] = cars; // добавляем его в массив
{ releasDate: 2006, duration: 117, actors: Array(3), format: "Blu-rey" }

muvies // проверяем
{ В поисках немо: {…}, Звёздные войны: эпизод VI - Возвращение джедая: {…}, Гарри Поттер и Кубок огня: {…}, Тачки: {…} }

Object.keys(muvies); // смотрим ключи
(4) ["В поисках немо", "Звёздные войны: эпизод VI - Возвращение джедая", "Гарри Поттер и Кубок огня", "Тачки"]

// счёт игроков

var scores = { // создаём объект
    Lily: 0,
    Alex: 0,
    Luna: 0
};

scores.Lily // проверил
0

scores.Lily += 1; // прибавил 1
1

scores // проверил
{ Lily: 1, Alex: 0, Luna: 0 }

scores["Lily"] += 2 // прибавил 2
3

scores { Lily: 3, Alex: 0, Luna: 3 } // проверил

// задание по извлечению данных из объекта. Вытащить число 123

var myCrazyObject = {
    name: "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", namber: 123 }, 3.3],
    "random animal": "Банановая акула"
};

myCrazyObject["some array"][2]["namber"] // решение
123

    **
    **
    ** ** ** ** ** ** ** * ** **