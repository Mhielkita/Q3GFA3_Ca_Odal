

var RandomNum = Math.floor(Math.random() * 1000);
document.write("Randomly generated number: " + RandomNum);

var hund = Math.floor((RandomNum/100)%100)
var tens = Math.floor((RandomNum/10)%10)
var ones = Math.floor((RandomNum%10))

document.write("<br> Breakdown: " + hund*100 + ", " + tens*10 + ", " + ones)
document.write("<br> Date: " + new Date())