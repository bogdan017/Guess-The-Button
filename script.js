rndButton = Math.floor(Math.random() * 3);
function showWinner(x) {
    let msg = "";
    if (x == rndButton) {
        msg = "Win";
    } else {
        msg  = "Lose";
    }
    document.getElementById('result').innerHTML = msg;
}

function genButtons(){
    let number = document.getElementById("usrInput").value;
    if(number >= 2) {
        let k = 0;
        for (let i = 0; i < number; ++i) {
            let newBtn = document.createElement('button');
            k++;
            newBtn.className = "btn btn-primary";
            newBtn.innerHTML = "Button " + k;
            newBtn.addEventListener("click", function() {
                showWinnerN(i);
            });
            let selectPanel = document.getElementById("c");
            selectPanel.appendChild(newBtn);
        }
    } else {
        alert("Trebuie sa generati minim 2 butoane pentru a juca!");
    }
    randNum = Math.floor(Math.random() * number);
}

var clickCounter=0;
window.onload = function(){
document.getElementById("btn").onclick = function() {
    clickCounter++;
    if (clickCounter == 1) {
        genButtons();
    } else {
        void(0);
    }
 };
}

function showWinnerN(num) {
    let msg = "";
    if (num == randNum) {
        msg = "Win";
    } else {
        msg  = "Lose";
    }
    document.getElementById('resultN').innerHTML = msg;
}
