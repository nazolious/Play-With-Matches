
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * max) + min;

}

function upDate(el1,el2,el3) {
el1.innerHTML = getRandomIntInclusive(1, 3);
el2.innerHTML = getRandomIntInclusive(1, 3);
el3.innerHTML = getRandomIntInclusive(1, 3);
};

var el1 = document.querySelector(".random1")
var el2 = document.querySelector(".random2")
var el3 = document.querySelector(".random3")

upDate(el1,el2,el3);

var array = [el1,el2,el3];
for (i=0; i < array.length; i++)
{
  for(j=i+1; j < array.length; j++) {

  }
}
//var elm = document.getElementByClass("class");//
var getMatches = function() {
var displayMessage = document.getElementById("message");
if(el1.innerHTML === el2.innerHTML){
el1.classList.add("highlight");
el2.classList.add("highlight");
displayMessage.innerHTML = el1.innerHTML + " " + "are matching";

}

if(el1.innerHTML === el3.innerHTML) {
  el1.classList.add("highlight");
  el3.classList.add("highlight");
  displayMessage.innerHTML = el3.innerHTML + " " + "are matching";

}
if(el2.innerHTML === el3.innerHTML) {
  el2.classList.add("highlight");
  el3.classList.add("highlight");
  displayMessage.innerHTML = el3.innerHTML + " " + "are matching";

}

};
getMatches();
