Shift + Alt + F - отформатировать документ
shift + alt + A - закоментить кусок кода. /* Комментарий */
Ctrl + /        - закоментить строку

Math.random(); - случайное число 0 <= число <1  (0.4683660550207769)
Math.floor(); - округление до целых 
Math.floor(Math.random()*10);   - от 0 до 9
Math.floor(Math.random()*10)+1; - от 1 до 10. 

return - выход из функции, возвращение

if - если    // Условия, условные конструкции
else - иначе // Условия, условные конструкции

while - пока // до тех пор пока
for - для // выполняется определённое колицество раз

empty - пустой
массив - array

null = "null" - неявное приведение типа. JS автоматически приводит значение из значения в строку

alert("Всплывающее окно сверху с этим уведомлением"); alert - предупреждение

confirm("Всплывающее окно Да или Нет.");  confirm - подтвердить. true или false.

document.write("Жрём мороженное!");  document.write //позволяет вывести произвольную разметку 
//HTML и контент в произвольной точке страницы.

console.log("Выводит абсолютно любое сообщение на Консоль");

prompt("Запрашивает данные в всплывающем окне сверху экрана");

setTimeout(wakeUpUser, 5000);
			  function wakeUpUser() {
			  alert("Всплывающее окно сверху просит подтвержить действие через 5 сек.");
              // Считаем котиков
                var drawCats = function (howManyTimes) {
                    for (var i = 0; i < howManyTimes; i++) {
                    console.log(i + "=^.^=");
    };
};
drawCats(10);





// Типы данных и переменные    // Типы данных и переменные    // Типы данных и переменные    // Типы данных и переменные    
"Привет я строка";
5;
true; //булево значение

var nik // создана пременная
var nik = 10; // создана пременная и присв. значение
nik = 15; // значение перем. изменено

// возраст в секундах
seconds_in_a_minute = 60;
minute_in_a_hour = 60;
seconds_in_a_hour = seconds_in_a_minute * minute_in_a_hour;
seconds_in_a_day = seconds_in_a_hour * 24;
seconds_in_a_year = seconds_in_a_day * 365;
my_age = ;
seconds_in_a_my_age = seconds_in_a_year * my_age;

// инкремент и декремент ++ и -- 
high_five = 0;
high_five++;
0
high_five
1

high_five = 0;
++high_five;
1
high_five
1

// += и -= так же  *= и /=
var score = 100;
score += 30;
130
score -= 100;
30

var score = 100;
score *= 30;
3000
score /= 30;
100

// СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   
// СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   
// СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   // СТРОКИ   

var I_study = "Я учу "; //объединение строк
var JS = "Java Script";
I_study + JS;
"Я учу Java Script"

var string = "Супердлинная строка" // длинна строки .length
string.length
19
"Супердлинная строка".length
19
string[0]; // символ строки (отсчёт от 0)
"С"
string[1];
string[2];
string[3];
string[4];
"у"
"п"
"е"
"р"

var long_string = "Эта длинная строка такая длинная" // Срез строки .slise
long_string.slice(4, 18);
"длинная строка"
long_string.slice(0, 18);
"Эта длинная строка"
long_string.slice(17); // срез с 17 символа
"такая длинная"

// В верхн и нижн РЕГИСТР .toUpperCase(); и .toLowerCase();
// В верхн и нижн РЕГИСТР .toUpperCase(); и .toLowerCase();
long_string.toUpperCase(); 
"ЭТА ДЛИННАЯ СТРОКА ТАКАЯ ДЛИННАЯ"
long_string.toLowerCase();
"эта длинная строка такая длинная"

// true и false   // true и false   // true и false   // true и false   // true и false   // true и false   
// true и false   // true и false   // true и false   // true и false   // true и false   // true и false   
// true и false   // true и false   // true и false   // true и false   // true и false   // true и false   
// Булевы значения true и false. Логические операции   // Булевы значения true и false. Логические операции

// Сравнение чисел с помощью будевых значений

    == - сравнивает независимо от типа (практически равно, так же 0 == false, 1 == true, "5" == 5 )
    ===  сравнивает с проверкой типа (разные типы всегда будут false)

    && - И (амперсанд).
    || - ИЛИ (pipe пайпс - труба).
    !  - НЕ ( !==1 - не равно единице).

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;

var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool);
true

// Ограничение роста на отракционе
hiteRestriction = 150;
height = prompt("Какого ты роста?");

if (height >= hiteRestriction) {
    alert("Проходи кататься на этих сумашедших горках!!!")
}
else {
    alert("Тебе надо подрасти =,(((( ")
}

// Ребята угадывают загаданное число

var mySecretNumber;
mySecretNumber = prompt("Напиши загаданное число");
var numberChico = Math.floor(Math.random()*10)+1;
var numberHarpo = Math.floor(Math.random()*10)+1;
var namberGroucho = Math.floor(Math.random()*10)+1;

if (mySecretNumber == numberChico) {
    alert("Чико угадал число " + mySecretNumber);
} else if (mySecretNumber == numberHarpo) {
    alert("Харпо уuадал число "+mySecretNumber);
} else if (mySecretNumber == namberGroucho) {
    alert("Гручо угадал число "+mySecretNumber);
} else {
    alert ("Никто не угадал твоё число!)))");
}


// Правила входа в кинотеатр. Возраст 12+ или совместно с родителями   
// КОД НЕ РАБОТАЕТ. НУЖНО ФИКСИТЬ КОМАНДУ prompt. Сейчас prompt присваивает одно и тоже значение двум переменным. КОД НЕ РАБОТАЕТ.


var age = prompt("Какой у тебя возраст?");
var accompanied = prompt("Ты пришёл в сопровождении взрослых?");

document.write(age);
console.log(age);

if (age => 12) {
    alert("Приятного просмотра, проходите на ваши места.");
// }else if (accompanied == "да") {
//     alert("Приятного просмотра, проходите на ваши места.");
}else {
    alert("Малышь, тебе нужно подрасти или придти со взрослым");
}

// МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ
// МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ
// МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ   // МАССИВЫ

Array   Array   Array   Array   Array   Array   Array   Array   Array   Array   Array   


[] - массив
var name_massive = ["элемент", 354, ["ещё один массив в массиве", 001 , 100], 
"ещё элемент, и массив завершается"];
.length - длинна массива  // последнее значение массива не равно длинне массива!!! 
.push() - добавить элемент в конец массива
.pop() - удалить элемент в конце массива (последний) и вывести значение
.unshift() - добавить элемент в начало массива
.shift() - удалить элемент в начале массива (первый) и вывести значение
.concat() - объединить массивы
.indexOf() - поиск индекса элемента в массиве
.join("выбор пробела между значениями") - превращение массива в строку
Math.random(); - случайный выбор
Math.random(); - случайное число 0 <= число <1  (0.4683660550207769)
Math.floor(); - округление до целых 

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

/* элементы   элементы   элементы   элементы*//* элементы   элементы   элементы   элементы*/
/* элементы   элементы   элементы   элементы*//* элементы   элементы   элементы   элементы*/
dinosaurs[1]; - доступ к элементу [индекс]  
// велоцираптор

dinosaurs[3];
// трицератопс

dinosaurs[1] = "другой динозавр"; - замена содержимого
dinosaurs[1]
// другой динозавр

dinosaurs[110] = "новый элемент"; - добавить элемент в массив
dinosaurs;
(111) ["тиранрзавр", "другой динозавр", "стегозавр", "трицератопс", "брахиозавр", "птеранодор", "апатозавр", "диплодок", "компсогнат", empty × 101, "новый элемент"]
0: "тиранрзавр"
1: "другой динозавр"
2: "стегозавр"
3: "трицератопс"
4: "брахиозавр"
5: "птеранодор"
6: "апатозавр"
7: "диплодок"
8: "компсогнат"
110: "новый элемент"
length: 111
__proto__: Array(0)

var dinosaurs = [   /* - вложенный массив *//* - вложенный массив */
    "тиранрзавр",
    "велоцираптор",
    ["стегозавр",
    110,
    "брахиозавр"],
    "птеранодор",
    "апатозавр",
    "диплодок",
    "компсогнат"
];
dinosaurs[2]; /* - вывод значений массива */
(3) ["стегозавр", 110, "брахиозавр"]
dinosaurs[2][1];   /* - вывод конкретных значений массива */
110
.length /* - количество элементов в массиве */
dinosaurs.length;
7
.length - 1; - /* длинна массива. Последнее значение массива не равно длинне массива!!! */
dinosaurs.length - 1;  // поэтому вычитаем единицу
6
dinosaurs[dinosaurs.length - 1]; /* последний элемент массива */
"компсогнат"

переменная.push("Какой то элемент"); // добавить элемент в конец массива.
var animals = [];
animals.push("Кот");
animals.push("Пёс");
animals.push("Лама");
animals;
(3) ["Кот", "Пёс", "Лама"]
переменная.unshift("Какой то элемент"); /*  - добавить элемент в начало массива/ */
animals.unshift("Мартышка");
animals.unshift("Белый медведь");
animals;
(5) ["Белый медведь", "Мартышка", "Кот", "Пёс", "Лама"]
переменная.pop("Какой то элемент"); // удалить элемент в конеце массива.
animals.pop();
(4) ["Белый медведь", "Мартышка", "Кот", "Пёс"]

переменная.shift("Какой то элемент");   /*  - удалить элемент в начале массива */
animals.shift();
(3) ["Мартышка", "Кот", "Пёс"]

animals.shift();       - возвращает удаляемое значение Белый медведь
"Белый медведь"
lastAnimal = animals.shift();  - присваеваем удаляемое значение переменной
lastAnimal;
"Белый медведь"

// Объединение массивов   // Объединение массивов   // Объединение массивов   // Объединение массивов   

имя_первого_массива.concat(имя_второго_массива) - объединить массивы

var furryAnimals = ["Альпака", "Кольцхвостый лемур", "Йети"]; 
var scalyAnimals = ["Удав", "Годзилла"];
var feathered = ["Ара", "Додо"];

var furryAnimalsAndscalyAnimals = furryAnimals.concat(scalyAnimals);
furryAnimalsAndscalyAnimals;
(5) ["Альпака", "Кольцхвостый лемур", "Йети", "Удав", "Годзилла"]
var allAnimals = furryAnimals.concat(scalyAnimals, feathered);
allAnimals;
(7) ["Альпака", "Кольцхвостый лемур", "Йети", "Удав", "Годзилла", "Ара", "Додо"]

// Поиск индекса элемента в массиве

массив.indexOf("значение элемента");
var colors = ["красный", "зелёный", "синий"];
colors.indexOf("синий");
2

// Превращение массива в строку с выбором разделителя

allAnimals.join(", "); вибираем разделитель между элементами в строке
Альпака, Кольцхвостый лемур, Йети, Удав, Годзилла, Ара, Додо
allAnimals.join("*** ");
Альпака*** Кольцхвостый лемур*** Йети*** Удав*** Годзилла*** Ара*** Додо

// Поиск дороги домой
var landmarks = [] //использование массива. Дорога домой
landmarks.push("Мой дом");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");
landmarks;
(7) ["Мой дом", "Мигающий фонарь", "Протекающий гидрант", "Пожарная станция", "Приют для кошек", "Моя бывшая школа", "Дом подруги"]

//  Случайный выбор

Math.random(); - случайное число 0 <= число <1  (0.4683660550207769)
Math.floor(); - округление до целых 
Math.floor(Math.random()*10);   - от 0 до 9
Math.floor(Math.random()*10)+1; - от 1 до 10. 

landmarks[Math.floor(Math.random() * 7)]; //Случайный выбор из массива от 0 до 7
Пожарная станция

// шар судьбы

ballOfFate = [
    "Звучит не плохо",
    "Да, это определённо надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Действуй"
]
ballOfFate[Math.floor(Math.random() * ballOfFate.length)];
 Звучит не плохо
ballOfFate.push("Компьютер говорит НЕТ!");
 Может, не сегодня?

// Генератор случайных дразнилок

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
var myTeaser = ["У тебя", bodyPart[Math.floor(Math.random() *
bodyPart.length)], "словно", abjective[Math.floor(Math.random() * 
abjective.length)], words[Math.floor(Math.random() * words.length)],
"!!!"].join(" ");
У тебя сосок словно склизкий мартышка !!!

// ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   
// ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   
// ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   // ОБЪЕКТЫ   

{} - объект
var имя_объекта = {};       /* - создение объекта */
Object.keys();//узнать все ключи объекта,возвращает массив со всеми ключами


var имя_объекта = {                   // - создение объекта
    ключ : "значение",
    "ключ с пробелом" : "любое значение",
    переменная : 110
};
имя_объекта["ключ"] = значение;   // добавляем новые элементы объекта
имя_объекта.ключ = значение;      // добавляем новые элементы объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
имя_объекта["Имя объекта"].ключ.push(111); // добавляем новые элементы в массив
имя_объекта["Имя объекта"].ключ[индекс] = новое_значение;// замена, добавляем в массив
имя_объекта["Имя объекта"].новый_ключ = "Значение";// добавляем новые элементы в объект

имя_объекта.ключ;               // доступ к значению "", ТОЧЕЧНАЯ НОТАЦИЯ
имя_объекта["ключ с пробелом"]; //доступ к значению внутри объекта

var cat = {                 // - создение объекта 
    legs: 3,            
    name: "Гармония",    
    color: "Черепаховый" 
};
cat["age"] = 110;   // добавляем новые элементы объекта
cat.tail = 14;      // добавляем новые элементы объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
Object.keys(cat); //узнать все ключи объекта
"(5) ["legs", "name", "color", "age", "tail"]"
cat["name"];   //доступ к значению внутри объекта
"Гармония"
cat.age;       //доступ к значению внутри объекта без "", ТОЧЕЧНАЯ НОТАЦИЯ
"110"
muvies["Звёздные войны: эпизод VI - Возвращение джедая"].actors.push(111);
muvies["Звёздные войны: эпизод VI - Возвращение джедая"].new = "Значение";
console.log(muvies["Звёздные войны: эпизод VI - Возвращение джедая"]);

// МАССИВЫ ОБЪЕКТОВ   // МАССИВЫ ОБЪЕКТОВ  // МАССИВЫ ОБЪЕКТОВ
// МАССИВЫ ОБЪЕКТОВ   // МАССИВЫ ОБЪЕКТОВ  // МАССИВЫ ОБЪЕКТОВ
// МАССИВЫ ОБЪЕКТОВ   // МАССИВЫ ОБЪЕКТОВ  // МАССИВЫ ОБЪЕКТОВ
массив - array

var dinosaurs = [
    { name: "Тираннозавр Рекс", period: "Верхнемомеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
]
dinosaurs[1]; { name: "Стегозавр", period: "Верхнеюрский" }
dinosaurs[0]; { name: "Тираннозавр Рекс", period: "Верхнемомеловой" }

dinosaurs[0]["name"]; // [индекс] [ключ]
"Тираннозавр Рекс"
dinosaurs[0].name; // ТОЧЕЧНАЯ НОТАЦИЯ
"Тираннозавр Рекс"

// друзья элементы
var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дейв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];   // массив друзей

friends[2]          //доступ к значению внутри массива
"{name: "Кейт", age: 9, luckyNumbers: Array(3)}"
friends[2].name     //доступ к значению внутри объекта > массива.
"Кейт"
friends[2].luckyNumbers//доступ к массиву внутри объекта > массива.
(3) [1, 2, 3]
friends[2].luckyNumbers[1];//доступ к значению внутри массива > объект > массив.
2
kate.luckyNumbers.push(6);// добавлене значения в массив > объект > массив
kate.luckyNumbers.unshift(5);// добавлене значения в массив > объект > массив
friends[2].luckyNumbers
(5) [5, 1, 2, 3, 6]

// Учёт долгов
var owedMony = {};
owedMony["Джимми"] = 5;
owedMony.Анна = 7;
owedMony["Анна"]; // сколько задолжала анна > 7
owedMony.Джимми += 3; // дмимми взял в долг ещё 3. > 8
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
muvies ["В поисках немо"]; { releasDate: 2003, duration: 100, actors: Array(3), format: "DVD" }

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

// задание по извлечению данных из объекта. Вытащить число 123
var myCrazyObject = {
    name: "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", namber: 123 }, 3.3],
    "random animal": "Банановая акула"
};
myCrazyObject["some array"][2]["namber"] // решение
123

// Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   
// Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   
// Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   Условия и циклы   

if - если    // Условия, условные конструкции
else - иначе // Условия, условные конструкции
while - пока, до тех пор пока
for - для // выполняется определённое колицество раз


var name = "Aleksey";
console.log("Hello "+ name);
if (name.length > 6) {
    console.log("Ну и длинющее у Вас имя!");
}   
//          if может использоваться без else, самостоятельно. 
else {
    console.log("Имя у вас не из длинных");
}

// Цепочка из конструкций if else if else if else if else if else if else if else if else 
// Цепочка из конструкций if else if else if else if else if else if else if else if else 

var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;

if (lemonChicken) {
    console.log("Отлично! Я буду курицу!!!");
} else if (beefWithBlackBean) {
    console.log("Заказываю говядину!");
} else if (sweetAndSourPork) {
    console.log("Ладно, закажу свинину...");
} else {        // можно не использовать
    console.log("Что же, остаётся рис с яйцом");
}

// интерактивная версия  // интерактивная версия  // интерактивная версия // интерактивная версия
if (lemonChicken = confirm("У Вас есть курица?")) { 
    console.log("Отлично! Я буду курицу!!!");
} else if (beefWithBlackBean = confirm("Тогда может быть у Вас есть говядина?")) {
    console.log("Заказываю говядину!");
} else if (confirm(sweetAndSourPork = "Ну а свинина то есть?")) {
    console.log("Ладно, закажу свинину...");
} else {        // можно не использовать
    var riceWithEgg = true;
    sweetAndSourPork = false;
    console.log("Что же, остаётся рис с яйцом");
}

console.log(lemonChicken);
console.log(sweetAndSourPork);
console.log(sweetAndSourPork)
console.log(riceWithEgg);

// Цикл while while while while while while while while while while while while // Цикл
// Цикл while while while while while while while while while while while while // Цикл
// Цикл while while while while while while while while while while while while // Цикл

while (condition_условие) {
    console.log("Делаем это при условии True");
    i++; // счётчик 
}

// считаем овец
var sheepCounted = 0;
while (sheepCounted < 10) { // условие
    console.log("Посчитано овец: " + sheepCounted + "!"); // выполняемый код
    sheepCounted++;  // Приращение. Счётчик прибавляет к var по одному каждый цикл
}
console.log("Хрррррррррр-псссссссс....")

// Цикл for for for for for for for for for for for for for for for for for for for for 
// Цикл for for for for for for for for for for for for for for for for for for for for 
// Цикл for for for for for for for for for for for for for for for for for for for for 

break и continue - прерывание цикла.
break - "позволяет нам прервать цикл и перейти к коду, следующему после цикла."
continue - "прерывает текущую итерацию цикла и переходит к следующей"

for ( настройка; условие; приращение) {
    console.log("Делаем это...пока условие верно true")
}

var Hello = 30;
for (index = 0; index < Hello; index++) {
    console.log("Привет");
}
var Hello = 30;
for (i=0; i < Hello; i++) {
    console.log("Привет");
}

for (i = 1; i <= 5; i += 1) {
    console.log("i = " + i);
  }

// Цикл for , массивы

var animals = ["Лев", "Фламинго", "Белый медведь", "Удав"]; 
for (let i = 0; i < animals.length; i++) {   // извлечение значений массива
// i < animals.length а не <= потому что 
// последнее значение массива не равно длинне массива!!!

    console.log("В этом зоопарке есть "+ animals[i] + ".");
}
animals.length;
4
// Цикл for , строки
var words = "Алексей";
for (i = 0; i < words.length; i++) {
    console.log("В моём имени есть буква - " + words[i]);
}
В моём имени есть буква - А
В моём имени есть буква - л
В моём имени есть буква - е
В моём имени есть буква - к
В моём имени есть буква - с
В моём имени есть буква - е
В моём имени есть буква - й

for (x = 10; x < 10000; x = x*2) { // Степени двойки до 10 тысяч.
    console.log(x);
}
for (x = 3; x < 10000; x = x*3) {  // Степени тройки до 10 тысяч.
    console.log(x);
}

var x = 3;                      // Тоже самое в циклом While
while (x < 10000) {
    console.log(x = x*3);
}

// факториал (1 * 2 * 3 * 4 * 5) числа - a.
var a = 5;
var x = 1;
for (i=1; i <= a; i++){
    x=i*x;
    // console.log(i);
    // console.log(x);
}

var animals = [         // Преобразование массива с помощью цикла
    "Кот",
    "Рыба",
    "Лемур",
    "Комодский варан"
];
beautifulAnimal = " - прекрасное животное";
for (i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + beautifulAnimal;
}
console.log(animals);
0: "Кот - прекрасное животное"
1: "Рыба - прекрасное животное"
2: "Лемур - прекрасное животное"
3: "Комодский варан - прекрасное животное"

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";  // Генератор случайных строк
var say = "";
while (say.length < 200) {
    say += (alphabet [Math.floor(Math.random()*alphabet.length)]);
}
console.log(say);

var input = "javascript is awesome"; // Хакерский язык
var output = "";                     // Сравнение и замена символов в строке

for (i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        // console.log(input[i]);
        output += 4;
    } else if (input[i] === "e") {
        // console.log(input[i]);
        output += 3;
    } else if (input[i] === "i") {
        // console.log(input[i]);
        output += 1;
    } else if (input[i] === "o") {
        // console.log(input[i]);
        output += 0;
    } else {output += input[i];}
}

console.log(output);

var name = prompt("Как вас зовут?");
console.log("Привет, " + name);

var likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
    console.log("Ты классная кошка!");
} else {
    console.log("Что ж, не проблема. Всё равно ты молодец!");
}

// ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   
// ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   
// ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   ФУНКЦИИ function   

"return" - выход из функции, возвращение.

var имя_функции = function(аргумент_1, аргумент_2,аргумент_3){
    console.log("Hallo, world!" + передан аргумент_1); // - что нужно сделать при вызове функции
    console.log("Hallo, world!" + передан аргумент_2);
}
outFirstFunction(аргумент_1, аргумент_2); // - вызов функции

// Привет мир Лёши, привет мир Лили!))
var outFirstFunction = function(argument){ 
    console.log("Hallo, world!" + argument);
}
outFirstFunction(" Aleksey!)))");
outFirstFunction(" Lily!)))");

// считаем котиков =)))
var drawCats = function (howManyTimes) {
    for (i = 1; i <= howManyTimes; i++) {
        console.log(" =^.^=");
        }
}
drawCats(10);

// совмещаем 2 аргумента

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
}
printMultipleTimes(10, " =^.^=");
printMultipleTimes(7, " >_<");

// Генератор случайных дразнилок
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

var PincRandomWord = function (name_massive) { // выбрать случайное слово
    return name_massive[Math.floor(Math.random() * words.length)];
}

var randomString = (
    "У тебя "+ PincRandomWord(bodyPart)+ 
    " словно " + PincRandomWord(abjective) 
    + " " + PincRandomWord(words) +"!!!"
);

console.log(randomString);

// Генератор случайных дразнилок в функции

var GenerateDomInsult = function () {
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

var PincRandomWord = function (name_massive) { // выбрать случайное слово
    return name_massive[Math.floor(Math.random() * words.length)];
}

var randomString = "У тебя "+ PincRandomWord(bodyPart)+ 
    " словно " + PincRandomWord(abjective) 
    + " " + PincRandomWord(words) +"!!!";
    console.log(randomString);
}
GenerateDomInsult(); // запуск функции

// Медали и счёт очков с выход с использованием return 
var medalForScore = function (score) {// медаль за очки
    if (score < 3) {
        return "Бронзовая";
    }
    if (score < 7) {
        return "Серебрянная";
    }
        return "Золотая";
    }
};
console.log(medalForScore(8));

// Математические рассчёты
function add(par_1, par_2) { // прибавить
    return par_1+par_2
};
function multiply(par_1, par_2) { // умножить
return par_1*par_2
};
add(0,777) + multiply(36325,9824);

// Совпадают ли массивы
function areArraysSome(array_1,array_2) {
    return array_1.join("") === array_2.join("");
}
areArraysSome([1,3,4,5] , [1,2,3,4,5])

// DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery
// DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery
// DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery
// DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery   DOM JQuery


// DOM  // DOM  // DOM  // DOM  // DOM  // DOM  // DOM

DOM - Document Object Model - объектная модель документа.
heading - заголовок
get Element By Id // - получить элемент по ID.
document.getElementById("ID-имя" элемента );// - найти элемент по ID-имени.
.innerHTML;// - возвращает содержание элемента.

Поиск элемента с помощью getElementById
document.getElementById("main-heading");// - найдёт элемент по ID-имени "main-heading" - главный заголовок.
var headingElement = document.getElementById("main-heading");// - присвоил переменной значение элемента для удобства
headingElement.innerHTML; // вернёт содержание элемента
console.log(headingElement.innerHTML); // выведет значение в консоль
console.log(document.getElementById("main-heading").innerHTML); // выведет значение в консоль и таким способом(без переменной)

Меняем текст заголовка через DOM
var headingElement = document.getElementById("main-heading");// нашли элемент и присвоили его значение переменной
headingElement.innerHTML;                                   // нашли содержимое элемента
var newHeadingText = prompt("Введите новый заголовок ");    // нов переменная для нового значения заголовка
headingElement.innerHTML = newHeadingText;                  // меняем значение заголовка

// JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery
// JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery JQuery 
Работа с деревом DOM через JQuery

$ // - поиск HTML элементов. Принимает один аргумент - строка селектора.
# // - id элемента.
$("#main-heading")// - пример
.text("на что заменить, изменить");  // - изменить текст
.append("что добавить");// - добавление записи

Подключаем JQuery к HTML-странице
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

Меняем текст заголовка с помощью jQuery
.text("замещаемый текст или переменная");// - изменить текст
$("# id элемента").text("замещаемый текст или переменная"); // - изменить текст в элементе с id 
$("#main-heading").text(newHeadingText);// - пример

setTimeout(wakeUpUser, 5000); // меняем заголовок спустя 5 сек.
function wakeUpUser() {
    var newHeadingText = prompt("Введите новый заголовок: ");
    $("#main-heading").text(newHeadingText);
}

// - добавить запись
.append("что добавить"); // - добавление записи
$("место куда добавить элемент").append("что добавить"); // - добавить элемент
$("body").append("<p>Это новый параграф </p>");// - пример

// - пример. Перечисляем и добавляем 3 хобби на страницу спустя 5 сек.
setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
    for (var i = 0; i < 3; i++) {
        var hobby = prompt("Назови одно из своих хобби!");
        $("body").append("<p>" + hobby + "</p>");
    }
};

// затухание объекта, проявление объекта
fade out - исчезать
fade in появляться
.slideUp(3000); // - выбранный объект исчеснет Уплывая Вверх за 3 секунды.
.slideDown(5000);// - выбранный объект появится Опускаять Сверху за 3 секунды.
.fadeOut(3000); // - выбранный элемент исчеснет за 3 секунды.
.fadeIn(5000);  // - выбранный объект появится через 5 секунд.
.hide(5000);    // - скрыть элемент в левый верхний угол с затуханием
.show(5000);    // - вернуть объект из левого верхнего угла после затухания
.delay(3000);    // - отложить. Отложенное выполнение.
.fadeTo(2000,0.5);// - выбранный элемент исчеснет за 2 секунды, на половину.

$("элемент").fadeOut(количесво милли секунд);
$("h2").fadeOut(5000);// - пример
$("h2").slideUp(5000);// - пример

// цепной вызов анимации
// - изменить текст в элементе с id и затушить его через 5 секунд
$("# id элемента").text("замещаемый текст или переменная").slideUp(5000); // заменить текст и показать 
$("h2").fadeOut(5000).fadeIn(5000); // - затушить потом вернуть текст за 10 сек.


//  Интерактивное программирование   Интерактивное программирование   Интерактивное программирование   Интерактивное программирование
//  Интерактивное программирование   Интерактивное программирование   Интерактивное программирование   Интерактивное программирование
//  Интерактивное программирование   Интерактивное программирование   Интерактивное программирование   Интерактивное программирование


set timeout - установить время задержки
clear timeout - отменить задержку
set interval - задать интервал
offset - отступ слева

setTimeout(func,timeout); // установка таймера (функция,время)
clearTimeout(timeoutId); // отмена таймера (ID таймера)
setInterval(func,interval);// многократный запуск кода- интервал (функция,интервал/время)
clearInterval(intervalId);// остановка интервала
.offset({left: 1000}); // вставить слева 1000 пикселей
.offset({top: 1000}); // вставить сверху 1000 пикселей
.pageX - свойство объекта (значение координаты Х)
.pageY - свойство объекта (значение координаты У)
.click(func); // Функция выполняется, когда пользователь щелкает элемент
.mousemove() - обработчик события Передвижение мыши // следит за передвижением мыши

// таймер с напоминанием
function timeUp() { // создал функцию с напоминанием
    alert("Время вышло");
};
// setTimeout(timeUp,3000);// - вызвали функцию с отложенным запуском. Вернёт ID.
var timeoutId = setTimeout(timeUp,3000);// сохранил ID для отмены таймера
clearTimeout(timeoutId);// отменил таймер, функция не запустится.


// интервальная функция - счёт времени в секундах
var couter = 1;
var printMassage = function(){
    console.log("Ты смотришь в консоль уже "+couter+" сек");
    couter++;
};
var intervalId = setInterval(printMassage,1000);// сохранил ID для отмены интервала
// clearInterval(intervalId); // отмена интервала


// бегающая строка
var leftOffset = 0; // отступ слева
function moveHeading() { // подвинуть заголовок
    $("#heading").offset({left: leftOffset}); // найти элемент(строку) и прибавить слева пиксели
    leftOffset++;
    if (leftOffset>400) {   // как элемент достигнет края в 400 пикселей
    leftOffset=0;           // обнулиться/начать заново.
    }
};
setInterval(moveHeading,30) // вызывать функцию каждые 30 миллисекунд.


// реакция на Клики
function clickHandler(event) {
    console.log("Клик! "+event.pageX+" "+event.pageY);
};
$("h1").click(clickHandler);


// заголовок heading двигается за указателем мыши
$("html").mousemove(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});


// заголовок heading двигается за кликом мыши
$("html").click(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});
// и показывает их координаты в консоли
function clickHandler(event) {
    console.log("Клик! "+event.pageX+" "+event.pageY);
};
$("html").click(clickHandler);


// движение заголовка по квадрату
var direction = 'вправо';
var offset = 8;

function moveHeading() {
    if (direction === 'вправо') {
        $("#heading").offset({ left: offset });
        offset++;
        if (offset > 200) {
            offset = 416.6875;
            direction = 'вниз';
        }
    } if (direction === 'вниз') {
        $("#heading").offset({ top: offset });
        offset++;
        if (offset > 416.6875 + 200) {
            offset = 200;
            direction = 'влево';
        }
    } if (direction === 'влево') {
        $("#heading").offset({ left: offset });
        offset--;
        if (offset < 8) {
            offset = 416.6875 + 200;
            direction = 'вверх';
        }
    } if (direction === 'вверх') {
        $("#heading").offset({ top: offset });
        offset--;
        if (offset < 416.6875) {
            offset = 8;
            direction = 'вправо';
        }
    }
};
var timeoutId = setInterval(moveHeading, 100);

function stop() {
    clearTimeout(timeoutId);
}
$("#heading").click(stop);  // останавливает движение по клику на заголовок


// // не очень получилось начало
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
// //  не очень получилось конец.

// Рабочая версия с сайта + мои добавления
var intervalId = setInterval(moveHeading, intervalLength);
clearInterval(intervalId);

$("#heading").click(function () {
  clearInterval(intervalId);
  intervalLength /= 2;
  clicks++;
  if (clicks >= 10) {
    $("#heading").text("Накликал-таки!");
  } else {
    intervalId = setInterval(moveHeading, intervalLength)
    if (clicks === 1 || clicks === 5 || clicks === 6 || clicks === 7 || clicks === 8 || clicks === 9) {
        $("#heading").text("Кликнул "+ clicks +"раз.");
    } else {
        $("#heading").text("Кликнул "+ clicks +"раза.");
    }
  }
});
