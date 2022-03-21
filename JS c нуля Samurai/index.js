// Урок 01.

// setInterval(function(){
//     var messageInput = document.getElementById("message");
//     console.log(messageInput.value);
// }, 4000);

// Урок 02.

// var str1;
// str1 = "number1";

// console.log(str1);
// console.log("Number 2");
// console.log("Number 3");

// var wordCat;
// wordCat = "Cat";

// var translateOfWordCat;
// translateOfWordCat = "Кот";

// console.log(wordCat);
// console.log(translateOfWordCat);

// Урок 8

// var firstName_El = document.getElementById("firstName_Id");

// var LastName = document.getElementById("LastName_Id")

// var Address = document.getElementById("Address_Id")

// // console.log(firstName_El.value);
// // console.log(LastName.value);
// // console.log(Address.value);


// var Sity_list = document.getElementById("Sity list");

// // console.log(Sity_list.value);
// // console.log(Sity_list.value);


// var myHobby = document.getElementById("myHobby_ID");
// // console.log(myHobby.value);

// var myPhoto = document.getElementById("myPhoto_ID")
// console.log(myPhoto.value);
// console.log(myPhoto.innerHTML);


// var myPhotoPic = document.getElementById("myPhotoPic")

// // console.log(myPhoto_ID.innerHTML);
// // console.log(myPhoto_ID.innerHTML);

// // console.log(myHobby_ID.innerHTML);
// // console.log(myHobby_ID.innerHTML);

// // console.log(Sity_list.innerHTML);
// // console.log(Sity_list.innerHTML);

// // console.log(myPhotoPic.src);
// // console.log(myPhotoPic.alt);
// // console.log(myPhotoPic.src);

// firstName_El.value = "Смена имени";
// firstName_El.title = "А сюда нужно ввести Имя";

// LastName.setAttribute("value","kamasutra");


// // console.log(LastName.className);

// LastName.className = "error-input";
// myPhotoPic.src = "https://avatars.mds.yandex.net/get-zen_doc/1639101/pub_611768146eab3f04defe25d7_6117687f7e37175eb6759ed8/scale_1200";

// console.log(Sity_list.value);
// Sity_list.value = "3";
// console.log(Sity_list.value);
// myHobby.value = "Да, нет у меня хобби";

// debugger;


// // myPhoto.value = 

// function alertValue() {
//     console.log(myPhoto.value);
//     console.log(myPhoto.innerHTML)
// }

// alertValue();

// var znachenie = document.getElementById("Это_ID");
// var firstNameEl = document.getElementById("firstName_Id");
// var LastName = document.getElementById("LastName_Id");
// var AddressName = document.getElementById("Address_Id");
// var SityEl = document.getElementById("Sity list");
// var myPhoto = document.getElementById("myPhoto_ID");
// var myPhotoPic = document.getElementById("myPhotoPic");

// function alertZnachenie() {
//     console.log(znachenie.value)
//     console.log(znachenie.className)
// }
// function alertFirstName() {
//     console.log(firstNameEl.value)
//     console.log(firstNameEl.className)
// }
// function alertLastName() {
//     console.log(LastName.value)
//     console.log(LastName.className)
// }
// function alertAddressName() {
//     console.log(AddressName.value)
//     console.log(AddressName.className)
// }
// function alertSityEl() {
//     console.log(SityEl.value)
//     console.log(SityEl.className)
// }
// function alertMyPhoto() {
//     console.log(myPhoto.value)
//     console.log(myPhoto.className)
// }
// function alertMyPhotoPic() {
//     console.log(myPhotoPic.value)
//     console.log(myPhotoPic.className)
// }
// alertZnachenie();
// alertFirstName();
// alertLastName();
// alertAddressName();
// alertSityEl();
// alertMyPhoto();
// alertMyPhotoPic();

// function alertValueAndClass(elementParametr) {
//     // debugger;
//     console.log(elementParametr.value);
//     console.log(elementParametr.className);
// }
// alertValueAndClass(znachenie);
// alertValueAndClass(firstNameEl);
// alertValueAndClass(LastName);
// alertValueAndClass(AddressName);
// alertValueAndClass(SityEl);
// alertValueAndClass(myPhoto);
// alertValueAndClass(myPhotoPic);

function LogValue(Element) {
    var ID = document.getElementById(Element);
    console.log(ID.value);
}
function getValue(Element) {
    var ID = document.getElementById(Element);
    return ID.value;
}
var firstName = "firstName_Id";
var LastName = "LastName_Id";

LogValue(firstName);
LogValue(LastName);

// getValue(firstName);
// getValue(LastName);

var firstNameValue = getValue(firstName);
var LastNameValue = getValue(LastName);

window.alert(firstNameValue);
window.alert(LastNameValue);


 