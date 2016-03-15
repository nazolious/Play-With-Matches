
var el0 = document.getElementById("block0")
var el1 = document.getElementById("block1")
var el2 = document.getElementById("block2")
var el3 = document.getElementById("block3")
var el4 = document.getElementById("block4")
var el5 = document.getElementById("block5")
var el6 = document.getElementById("block6")
var el7 = document.getElementById("block7")
var el8 = document.getElementById("block8")


function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * max) + min;
}


var button = document.getElementById('button');
button.addEventListener("click", function() {

  var block = document.getElementsByClassName('block')
  for(var i=0; i < block.length; i++){
    block[i].classList.remove("highlight")
    block[i].innerHTML = getRandomIntInclusive(1,9);
    // console.log("remove highlight for," + i);
  }
  // console.log("remove highlight");

var match = function() {
var matchText0 = document.getElementById("message0");
var matchText1 = document.getElementById("message1");
var matchText2 = document.getElementById("message2");
// var matchText3 = document.getElementById("message3");
// var matchText4 = document.getElementById("message4");
// var matchText5 = document.getElementById("message5");
// var matchText6 = document.getElementById("message6");
// var matchText7 = document.getElementById("message7");
// var matchText8 = document.getElementById("message8")

// console.log("checking for el0 && el1 match");
if(el0.innerHTML === el1.innerHTML){
  el0.classList.add("highlight");
  el1.classList.add("highlight");
  matchText0.innerHTML = el0.innerHTML +  " in row one  are matching ";
  // console.log("el1 & el0 match");
}

// console.log("checking for el1 && el2 match");
 if(el1.innerHTML === el2.innerHTML){
  el1.classList.add("highlight");
  el2.classList.add("highlight");
  matchText1.innerHTML = el1.innerHTML +  "in row one are matching";
  // console.log("el1 && el2 match");
}

// console.log("checking for el0 && el2 ");
if(el0.innerHTML === el2.innerHTML){
  el0.classList.add("highlight");
  el2.classList.add("highlight");
  matchText0.innerHTML = el0.innerHTML +  "in row one are matching";
  // console.log("el0 && el2 match");
}


 if(el0.innerHTML == el3.innerHTML) {
  el0.classList.add("highlight");
  el3.classList.add("highlight");
  matchText0.innerHTML = el0.innerHTML +  "in column one  are matching";
}


if (el0.innerHTML === el6.innerHTML) {
el0.classList.add("highlight");
el6.classList.add("highlight");
matchText0.innerHTML = el0.innerHTML +  "in column one  are matching";
}

if (el1.innerHTML === el2.innerHTML) {
el1.classList.add("highlight");
el2.classList.add("highlight");
matchText1.innerHTML = el1.innerHTML +  "in row one  are matching";
}

if (el1.innerHTML = el4.innerHTML) {
el1.classList.add("highlight");
el4.classList.add("highlight");
matchText1.innerHTML = el1.innerHTML +  "in column two  are matching";
}

if (el1.innerHTML === el7.innerHTML) {
el1.classList.add("highlight");
el7.classList.add("highlight");
matchText1.innerHTML = el1.innerHTML  +  "in column two  are matching";
}

if (el2.innerHTML === el5.innerHTML) {
el2.classList.add("highlight");
el5.classList.add("highlight");
matchText2.innerHTML = el2.innerHTML +  "in column three  are matching";

}

if (el2.innerHTML === el8.innerHTML) {
el2.classList.add("highlight");
el8.classList.add("highlight");
matchText2.innerHTML = el2.innerHTML +  "in column  are matching";

}
if (el3.innerHTML === el4.innerHTML) {
el3.classList.add("highlight");
el4.classList.add("highlight");
matchText3.innerHTML = el3.innerHTML +  "in row two  are matching";
}

if (el3.innerHTML === el5.innerHTML) {
el3.classList.add("highlight");
el5.classList.add("highlight");
matchText3.innerHTML = el3.innerHTML +  "in row two  are matching";
}

if (el3.innerHTML === el6.innerHTML) {
el3.classList.add("highlight");
el6.classList.add("highlight");
matchText3.innerHTML = el3.innerHTML +  "in column one  are matching";
}

if (el4.innerHTML === el5.innerHTML) {
el4.classList.add("highlight");
el5.classList.add("highlight");
matchText4.innerHTML = el4.innerHTML +  "in row two  are matching";
}

if (el4.innerHTML === el7.innerHTML) {
el4.classList.add("highlight");
el7.classList.add("highlight");
matchText4.innerHTML = el4.innerHTML +  "in column two  are matching";
}

if (el5.innerHTML === el8.innerHTML) {
el5.classList.add("highlight");
el8.classList.add("highlight");
matchText5.innerHTML = el5.innerHTML +  "in column three  are matching";
}

if (el6.innerHTML === el7.innerHTML) {
el6.classList.add("highlight");
el7.classList.add("highlight");
matchText6.innerHTML = el6.innerHTML +  "in row three   are matching";
}

if (el6.innerHTML === el8.innerHTML) {
el6.classList.add("highlight");
el8.classList.add("highlight");
matchText6.innerHTML = el6.innerHTML +  "in row three  are matching";
}

if (el7.innerHTML === el8.innerHTML) {
el7.classList.add("highlight");
el8.classList.add("highlight");
matchText7.innerHTML = el7.innerHTML +  "in row three  are matching";
}

 }
match();
 });
