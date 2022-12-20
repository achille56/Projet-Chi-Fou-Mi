// score et nom du gagnant.
let scorePlayer = document.getElementById("scorePlayer");
let scoreIA = document.getElementById("scoreIA");
let winner = document.getElementById("winner");

// choix du joueur
let stonePlayer = document.getElementById("Pierre");
let sheetPlayer = document.getElementById("Feuille");
let scissorsPlayer = document.getElementById("Ciseaux");

// choix de IA
let stoneIa = document.getElementById("Pierre2");
let sheetIa = document.getElementById("Feuille2");
let scissorsIa = document.getElementById("Ciseaux2");

let newGame = document.getElementById("reset");

let choiceP;
let randIa;
scorePlayer.innerHTML = 0;
scoreIA.innerHTML = 0;

// choix aleatoire de l'IA.
function random() {
    randIa = Math.floor(Math.random() * 3);
    console.log(randIa);
    switch (randIa) {
        case 0 :
            stoneIa.style.color = "orange";
            break;
        case 1 :
            sheetIa.style.color = "orange";
            break;
        case 2 :
            scissorsIa.style.color = "orange";
            break;
    }
}

// définis le gagant de la partie.
function winner1() {
    if (scorePlayer.value === 5) {
        alert("Le joueur gagne");
    }
    else if(scoreIA.value === 5) {
        alert("l'IA gagne");
    }
    else {
        alert("Manche suivante");
    }
}

// remet les couleurs d'origines apres un interval de 3 sec.
function cleanColor() {
    setTimeout(function () {
        stonePlayer.style.color = "cyan";
        stoneIa.style.color = "cyan";
        sheetPlayer.style.color = "cyan";
        sheetIa.style.color = "cyan";
        scissorsPlayer.style.color = "cyan";
        scissorsIa.style.color = "cyan";
    }, 3000);
}

// comparer les résultats.
function compare() {
    switch (choiceP) {
        case 0 :
            if (choiceP === randIa) {
                alert("égalité");
               cleanColor();
            }
            else if (randIa === 1) {
                alert("player a perdu");
                scoreIA.innerHTML ++;
                cleanColor();
            }
            else if (randIa === 2) {
                alert("player a gagné");
                scorePlayer.innerHTML ++;
                cleanColor();
            }
            break;
        case 1 :
            if (choiceP === randIa) {
                alert("égalité");
                cleanColor();
            }
            else if (randIa === 2) {
                alert("player a perdu");
                scoreIA.innerHTML ++;
                cleanColor();
            }
            else if (randIa === 0) {
                alert("player a gagné");
                scorePlayer.innerHTML ++;
                cleanColor();
            }
            break;
        case 2 :
            if (choiceP === randIa) {
                alert("égalité");
                cleanColor();
            }
            else if (randIa === 0) {
                alert("player a perdu");
                scoreIA.innerHTML ++;
                cleanColor();
            }
            else if (randIa === 1) {
                alert("player a gagné");
                scorePlayer.innerHTML ++;
                cleanColor();
            }
            break;
    }
}

stonePlayer.addEventListener("click", function () {
    choiceP = 0;
    stonePlayer.style.color = "orange";
    random();
    compare();
})

sheetPlayer.addEventListener("click", function () {
    choiceP = 1;
    sheetPlayer.style.color = "orange";
    random();
    compare();
})

scissorsPlayer.addEventListener("click", function () {
    choiceP = 2;
    scissorsPlayer.style.color = "orange";
    random();
    compare();
})

newGame.addEventListener("click", function () {
    scorePlayer.innerHTML = "";
    scoreIA.innerHTML = "";
})













