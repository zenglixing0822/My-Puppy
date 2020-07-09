window.onload = function () {
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.png') {
      myImage.setAttribute('src', 'images/pic3.JPG');
    } else {
      myImage.setAttribute('src', 'images/pic1.png');
    }
}
};