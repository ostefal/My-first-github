// Считаем котиков
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=");
    };
};
drawCats(10);

// Типы данных и переменные
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

// СТРОКИ

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

long_string.toUpperCase(); // В верхн и нижн РЕГИСТР .toUpperCase(); и .toLowerCase();
"ЭТА ДЛИННАЯ СТРОКА ТАКАЯ ДЛИННАЯ"
long_string.toLowerCase();
"эта длинная строка такая длинная"

    // Булевы значения true и false. Логические операции

    && - И(амперсанд).
    || - ИЛИ(pipe пайпс - труба).
    !  - НЕ().

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;

var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool);
true

    // Сравнение чисел с помощью будевых значений

