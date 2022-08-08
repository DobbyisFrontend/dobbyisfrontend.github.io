var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dobby.jpg') {
      myImage.setAttribute ('src','images/dobby3.jpg');
    } else {
      myImage.setAttribute ('src','images/dobby.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Как тебя зовут, пидрила?');
  localStorage.setItem('Имя', myName);
  myHeading.textContent = 'Охуеть ты страшный, ' + myName;
}
if(!localStorage.getItem('Имя')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('Имя');
  myHeading.textContent = 'Охуеть ты страшный, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}