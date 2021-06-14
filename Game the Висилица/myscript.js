
var words = [
    "подпись",
    "вырез",
    "гранит",
    "кругозор",
    "блузка",
    "фараон",
    "клапан",
    "ёж",
    "вымя",
    "турист",
    "колготки",
    "стоп-кран",
    "питание",
    "свёрток",
    "дочерь",
    "шампунь",
    "броня",
    "зайчатина",
    "гимназист",
    "стелька",
    "подделка",
    "виза",
    "затычка",
    "решение",
    "алкоголь",
    "шуруп",
    "воровка",
    "колодец",
    "кабан",
    "команда",
    "бордель",
    "ловушка",
    "буква",
    "опера",
    "сектор",
    "математика",
    "пароварка",
    "невезение",
    "глубина",
    "штука",
    "справочник",
    "вождь",
    "хобот",
    "ширинка",
    "усталость",
    "служитель",
    "жар",
    "спальная",
    "видео",
    "рот",
    "просьба",
    "фишка",
    "рукопись",
    "ракетчик",
    "каблук",
    "шрифт",
    "палец",
    "ножка",
    "халва",
    "черника",
    "незнайка",
    "компания",
    "работница",
    "мышь",
    "исследование",
    "кружка",
    "мороженое",
    "сиденье",
    "пулемёт",
    "печь",
    "солист",
    "свёкла",
    "стая",
    "зелье",
    "дума",
    "посылка",
    "коготь",
    "семафор",
    "брат",
    "различие",
    "плоскостопие",
    "двигатель",
    "сфера",
    "тюльпан",
    "затвор",
    "внедорожник",
    "самурай",
    "стан",
    "алгоритм",
    "параграф",
    "глаз",
    "медалист",
    "пульт",
    "поводок",
    "подлежащее",
    "ор",
    "бунт",
    "удочка",
    "лес",
    "диспетчер",
    "монитор",
    "вдова",
    "пиратство",
    "астролог",
    "сосед",
    "пуп",
    "изобретатель",
    "чума",
    "танец",
    "затишье",
    "пластелин",
    "йог",
    "маска",
    "блоха",
    "судьба",
    "сияние",
    "рукавица",
    "филе",
    "заплыв",
    "сёмга",
    "гиппопотам",
    "мастер",
    "походка",
    "ландыш",
    "яблоня",
    "кляча",
    "лиса",
    "свёртываемость",
    "раствор",
    "соты",
    "солод",
    "спорт",
    "шифер",
    "прощение",
    "стопка",
    "побег",
    "простота",
    "запах",
    "беседа",
    "варенье",
    "пароль",
    "актёр",
    "вырубка",
    "гвоздь",
    "шкаф",
    "скальпель",
    "гонг",
    "профессор",
    "казан",
    "скорбь",
    "извоз",
    "добавка",
    "тропа",
    "шеф",
    "космонавт",
    "грифель",
    "лауреат",
    "ромб",
    "борец",
    "звон",
    "канистра",
    "олимпиада",
    "оплата",
    "спирт",
    "баян",
    "перекрёсток",
    "влажность",
    "лотерея",
    "насморк",
    "оправдание",
    "мушкетёр",
    "мороз",
    "утюг",
    "санитария",
    "опрятность",
    "неряшливость",
    "фляга",
    "приключение",
    "пирс",
    "канарейка",
    "шалун",
    "невежество",
    "пион",
    "убыль",
    "выделка",
    "путник",
    "робототехника",
    "неразбериха",
    "рифмоплёт",
    "шовинизм",
    "ходатайство",
    "шагомер",
    "прохвост",
    "акушер",
    "палеозой",
    "уведомление",
    "оторва",
    "кровоподтёк",
    "хамство",
    "хутор",
    "фальсификация",
    "параболоид",
    "передвижение",
    "киловатт",
    "оксид",
    "морозоустойчивость",
    "хулиганьё",
    "навес",
    "старшинство",
    "напильник",
    "возмездие",
    "сруб",
    "откровенность",
    "аминокислота",
    "спелеология",
    "круиз",
    "узкость",
    "матерщинник",
    "трансплантация",
    "творение",
    "протеже",
    "грильяж",
    "полтинник",
    "астматик",
    "скандалист",
    "преимущество",
    "митрополит",
    "чужестранец",
    "резиденция",
    "хлопотун",
    "категория",
    "тяжесть",
    "ударник",
    "акушерство",
    "светотехника",
    "растяпа",
    "скептицизм",
    "изверг",
    "физиономия",
    "витрина",
    "самоуничижение",
    "эколог",
    "управляющий",
    "кадило",
    "хорист",
    "пиршество",
    "резонатор",
    "буйство",
    "прялка",
    "филология",
    "купорос",
    "ночлег",
    "микроскоп",
    "эхолот",
    "щипчики",
    "стружка",
    "священнослужитель",
    "сплин",
    "опус",
    "самопроизвольность",
    "тлен",
    "чужеземец",
    "царизм",
    "телеобъектив",
    "орнитолог",
    "погремушка",
    "морфий",
    "энциклопедист",
    "крепостной",
    "водопровод",
    "цитология",
    "куль",
    "бездна",
    "сыроделие",
    "леший",
    "трансавангард",
    "евангелист",
    "улучшение",
    "нервотрепка",
    "капустник",
    "выгораживание",
    "бюрократия",
    "самозванец",
    "надзиратель",
    "эшафот",
    "усадьба",
    "возбудитель",
    "канун",
    "судоходство",
    "вихрь",
    "античность",
    "рецидивист",
    "туберкулёз",
    "созвучие",
    "признание",
    "зразы",
    "карабин",
    "авансцена",
    "разгром",
    "инцест",
    "гениальность",
    "разделение",
    "виртуоз",
    "подшивка",
    "сакля",
    "брезент",
    "реостат",
    "описание",
    "частица",
    "деструктивность",
    "спринтер",
    "прочтение",
    "рисовод",
    "дисциплина",
    "мякиш",
    "взяточник",
    "предсердие",
    "множитель",
    "гарантия",
    "контекст",
    "расширитель",
    "самоконтроль",
    "таинство",
    "фальшивомонетчик",
    "канон",
    "объединение",
    "фондю",
    "горловина",
    "неведение",
    "размычка",
    "скважина",
    "политолог",
    "скряга",
    "атрибут",
    "безумие",
    "балаган",
    "искусствовед",
    "самовнушение",
    "ястребёнок",
    "соцветие",
    "аперитив",
    "взаимодействие",
    "костяк",
    "успешность",
    "танкетка",
    "проектировщик",
    "небывальщина",
    "шматок",
    "основатель",
    "свинство",
    "пасека",
    "умствование",
    "перистальтика",
    "оснащённость",
    "лучина",
    "смертоубийство",
    "славистика",
    "куртуазность",
    "манифестация",
    "борона",
    "разговенье",
    "боепитание",
    "бесправие",
    "неврастеник",
    "полузабытьё",
    "выя",
    "одноголосие",
    "утильсырьё",
    "надобность",
    "меморандум",
    "эпистемиология",
    "мичман",
    "выкройка",
    "опоссум",
    "брусчатка",
    "корреляция",
    "ядохимикат",
    "турнюр",
    "тестикул",
    "счет-фактура",
    "глицерин",
    "побуждение",
    "изваяние",
    "стетоскоп",
    "галлон",
    "судовождение",
    "лоббист",
    "сателлит",
    "блямба",
    "отдаление",
    "фейхоа",
    "социал-демократия",
    "втирание",
    "празднословие",
    "бумагомаратель",
    "архаика",
    "чинопроизводство",
    "ванилин",
    "изморозь",
    "лигатура",
    "замухрышка",
    "шелководство",
    "брандмейстер",
    "гидропоника",
    "винокур",
    "фельдграу",
    "басмала",
    "пеммикан",
    "форсунка",
    "биплан",
    "благовест",
    "ворожея",
    "визготня",
    "чванство",
    "казуист",
    "сухопутье",
    "лощина",
    "отражатель",
    "кобзарь",
    "антисемитизм",
    "синеклиза",
    "рвачество",
    "можжевельник",
    "крекинг",
    "бюргер",
    "завитушка",
    "штопальщик",
    "бахча",
    "протока",
    "кипарис",
    "разноречие",
    "гастрономия",
    "сальдо",
    "сбитень",
    "валторна",
    "саботажник",
    "актиноид",
    "идолопоклонничество",
    "надкостница",
    "зуботычина",
    "позёрство",
    "изобличитель",
    "беллетрист",
    "околоток",
    "лампас",
    "прилипала",
    "вербовщик",
    "электромагнетизм",
    "пудла",
    "холуйство",
    "зубоврачевание",
    "клепсидра",
    "ихтиозавр",
    "брезентовка",
    "шелкопряд",
    "неваляшка",
    "судоверфь",
    "квантор",
    "вставка",
    "околица",
    "лютеранин",
    "помор",
    "розенкрейцер",
    "выправка",
    "обусловленность",
    "нарицание",
    "софист",
    "махорка",
    "урбанист",
    "олеандр",
    "кабала",
    "навет",
    "разнотолки",
    "желвак",
    "магнолия",
    "костоправ",
    "адгезия",
    "антология",
    "алебастр",
    "эквилибрист",
    "цугцванг",
    "канитель",
    "австралобарбар",
    "гальванизация",
    "конъюнктурщик",
    "забавник",
    "брандспойт",
    "плюралист",
    "родословие",
    "хронофаг",
    "абелизавр",
    "клейковина",
    "парапсихология",
    "цеховщина",
    "болеро",
    "околесица",
    "планиметрия",
    "остракизм",
    "шерстопрядение",
    "баррикада",
    "карбонад",
    "гнус",
    "аутодафе",
    "приспособленец",
    "гувернёр",
    "тяжелодум",
    "клерикализм",
    "враль",
    "субъективист",
    "настурция",
    "палица",
    "катарсис",
    "правдоискатель",
    "флибустьер",
    "тетеревятник",
    "постфикс",
    "гуманизм",
    "омбудсмен",
    "хохмач",
    "сегрегация",
    "ларец",
    "каллиграф",
    "эстетика",
    "глубокомыслие",
    "безрассудство"
];
                                            // console.log(words);

var word = words[Math.floor(Math.random() * words.length)]; // загаданное слово
console.log(word);


// массив загадоного слова без значений
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}                                          // console.log(answerArray);

// число букв слова = длинне слова
var remainingLetters = word.length;

alert ("Привет! Давай поиграем в игру Виселица?                                          Я загадал слово "+ answerArray.join(" ")  +"!)) Теперь твоя очередь! Отгадывай по одной букве!!!" ) ;

// Игровой цикл
var AttemptCounter = 0; // Счётчик попыток

while (remainingLetters > 0 && AttemptCounter < answerArray.length) { // играем пока не отгадаем все буквы или не кончатся попытки
    alert(answerArray.join(" ")); // выводим состояние игры

    var guessS = prompt("Угадайте букву или нажмите Отмена для выхода из игры");

    var guess = guessS.toLowerCase(); // тЕрПИмостЬ к рЕгиСтру

    if (guess === null) {
        break; // если игрок ничего не ввёл то выходим из игрового цикла
    } /* else */ if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву");
    } else {

        AttemptCounter ++ ; // Счётчик попыток 

        // обновляем состояние игры
        for (var j = 0; j < word.length; j++) {

            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

if (answerArray.join("") === word) {
    alert("Отлично! Ты молодец! Угадал слово " + word);
} else {
    alert("Ты мог бы угадать слово " + word + ". Поиграй ещё, тебе обязательно повезёт!))");
}
// Отображаем ответ и поздравляем игрока

