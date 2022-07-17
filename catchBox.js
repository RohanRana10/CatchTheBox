var box = document.getElementById('box');

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

box.addEventListener('mouseover',function(){
    var topCount = Math.floor(Math.random() * 81);
    var leftCount = Math.floor(Math.random() * 81);
    var color = generateRandomColor();

    box.style.top = topCount + "vh";
    box.style.left = leftCount + "vw";
    box.style.backgroundColor = color;
});