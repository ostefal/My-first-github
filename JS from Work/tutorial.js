«интерпретировать», «вычислять» и «выполнять» - одно и теже.

Имя переменной должно начинаться с буквы, подчеркивания или знака доллара.
//     w   _   $
Потом могут следовать буквы, цифры, подчеркивания и знаки доллара — в любом количестве

Функции:
alert();
document.write();
console.log();

if (команды JS) {

    break
case
catch
class
const
    continue
    debugger
default
    delete
do
else - иначе;
    enum
export
extends
    false - ложь;
finally
for         - для;
        function
if          - если;
    implements
    import
in
instanceof
        interface
    let
    new
        package
    private
    protected
    public
    return
    static
    super
        switch
    this
    throw
    true - истина;
    try
typeof
var            - variable - переменная;
    void
while          - пока;
    with
yield

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


