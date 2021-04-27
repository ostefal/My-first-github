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

