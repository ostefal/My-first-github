«интерпретировать», «вычислять» и «выполнять» - одно и теже.

Имя переменной должно начинаться с буквы, подчеркивания или знака доллара.
//     w   _   $
Потом могут следовать буквы, цифры, подчеркивания и знаки доллара — в любом количестве

if (команды JS) {

    break case catch class const continue debugger default delete do else - иначе;
    enum export extends false - ложь; finally for - для; function if - если;
    implements import in instanceof interface let new package private protected public return static super switch this throw true - истина;
    try typeof var - variable - переменная; void while - пока; with yield
}

"Dear " + "Reader" + "," Эти строки «сцепляются» в новую строку «Dear Reader,»
(такая операция называется конкатенацией).

// Многократное выполнение операций
while, for, for in, forEach

while (условие продолжения) {
    программный блок;
}


// Цыкл.    Шарики мороженого.
var scoops = 5;
while (scoops > 0) {
    document.write("Another scoop!<br>");
    scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");

// Логические выражения.    Шарики мороженого.
if (scoops >= 5) {
    alert("Eat faster, the ice cream is going to melt!");
} else if (scoops == 3) {
    alert("Ice cream is running low!");
} else if (scoops == 2) {
    alert("Going once!");
} else {
    alert("Still lots of ice cream left, come and get it.");
}

// Развлечения с магнитами
var name = "Joe";
var i = 0;
while (i < 2) {
    document.write("Happy Birthday to you.<br>");
    i = i + 1;
}
document.write("Happy Birthday dear " + name + ",<br>");
document.write("Happy Birthday to you.<br>");


Простейший механизм оповещения пользователей при помощи функции alert.
Функция document.write позволяет вывести произвольную разметку HTML и контент в произвольной точке страницы.
Чтобы вывести сообщение на консоль, вызовите функцию console.log и передайте ей строку.
Непосредственная модификация документа. операции выполняются через объектную модель документа 

Почему “console” и “log” разделены точкой?
консоль как объект, выполняющий различные операции (консольные). Одна из таких задач — вывод данных на консоль.


// классическая песенка про «99 бутылок пива»

< !doctype html >
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>My First JavaScript</title>
        </head>
        <body>
            <script>

            </script>
        </body>
    </html>


{/* // <script> */}
var word = "bottles";
var count = 99;
while (count > 0) {
    document.write(count + " " + word + " of beer on the wall. <br>");
    document.write(count + " " + word + " of beer,<br>");
    document.write("Take one down, pass it around,<br>");
    count = count - 1;
    if (count > 0) {
        document.write(count + " " + word + " of beer on the wall.<br>");
    } else {
        document.write("No more " + word + " of beer on the wall.<br>");
    }
}
// </script>


// Игра - Морской Бой

