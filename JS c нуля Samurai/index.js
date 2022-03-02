// Урок 01.

// setInterval(function(){
//     var messageInput = document.getElementById("message");
//     window.alert(messageInput.value);
// }, 4000);

// Урок 02.

// var str1;
// str1 = "number1";

// window.alert(str1);
// window.alert("Number 2");
// window.alert("Number 3");

// var wordCat;
// wordCat = "Cat";

// var translateOfWordCat;
// translateOfWordCat = "Кот";

// window.alert(wordCat);
// window.alert(translateOfWordCat);

// Урок 8

var firstName_El = document.getElementById("firstName_Id");

var LastName = document.getElementById("LastName_Id")

var Address = document.getElementById("Address_Id")

// window.alert(firstName_El.value);
// window.alert(LastName.value);
// window.alert(Address.value);


var Sity_list = document.getElementById("Sity list");

// console.log(Sity_list.value);
// window.alert(Sity_list.value);


var myHobby = document.getElementById("myHobby_ID");
// window.alert(myHobby.value);

var myPhoto = document.getElementById("myPhoto_ID")
window.alert(myPhoto.value);
window.alert(myPhoto.innerHTML);


var myPhotoPic = document.getElementById("myPhotoPic")

// window.alert(myPhoto_ID.innerHTML);
// console.log(myPhoto_ID.innerHTML);

// window.alert(myHobby_ID.innerHTML);
// console.log(myHobby_ID.innerHTML);

// window.alert(Sity_list.innerHTML);
// console.log(Sity_list.innerHTML);

// window.alert(myPhotoPic.src);
// console.log(myPhotoPic.alt);
// console.log(myPhotoPic.src);

firstName_El.value = "Смена имени";
firstName_El.title = "А сюда нужно ввести Имя";

LastName.setAttribute("value","kamasutra");


// window.alert(LastName.className);

LastName.className = "error-input";
myPhotoPic.src = "https://avatars.mds.yandex.net/get-zen_doc/1639101/pub_611768146eab3f04defe25d7_6117687f7e37175eb6759ed8/scale_1200";

console.log(Sity_list.value);
Sity_list.value = "3";
console.log(Sity_list.value);
myHobby.value = "Да, нет у меня хобби";

// myPhoto.value = 