var count = 0;
var isFinished = false;

const alan = document.getElementById('alanId');
const kazandi = document.getElementById('kazandiId');
const kaybetti = document.getElementById('kaybettiId');

const kart1 = document.getElementById('kart1');
const kart2 = document.getElementById('kart2');
const kart3 = document.getElementById('kart3');

var catIndex = Math.floor(Math.random() * 3)

function game1() {

    if (catIndex == 0) {
        kart1.setAttribute('class', 'card-kedi');
        isFinished = true;
    } else {
        kart1.setAttribute('class', 'card-kopek');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }

    if 
    (isFinished && count < 2) {
        alan.style.display = "none";
        kazandi.style.display = "block";
   
    }
     else if 
    (isFinished && count >= 2) {
        alan.style.display = "none";
        kaybetti.style.display = "block";
        
    } 
}

function game2() {
    if (catIndex == 1) {
        kart2.setAttribute('class', 'card-kedi');
        isFinished = true;
    } else {
        kart2.setAttribute('class', 'card-kopek');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }
    if (isFinished && count < 2) {
        alan.style.display = "none";
        kazandi.style.display = "block";
       
    } else if (isFinished && count >= 2) {
        console.log('Kaybetti');
        alan.style.display = "none";
        kaybetti.style.display = "block";
    
    } 
}

function game3() {
    if (catIndex == 2) {
        kart3.setAttribute('class', 'card-kedi');
        isFinished = true;
    } else {
        kart3.setAttribute('class', 'card-kopek');
        count++;
    }
 
    if (count == 2) {
        isFinished = true;
    }

    if (isFinished && count < 2) {
        alan.style.display = "none";
        kazandi.style.display = "block";
       
    } else if (isFinished && count >= 2) {
        alan.style.display = "none";
        kaybetti.style.display = "block";
      
    } 
}