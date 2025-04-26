let gridCount = 1;
let currentWord = "";
let solution = "QWERT";
let row = 1;
let status = true;

function letterPress(id) {
    if(status) {
        currentWord += id;
        addLetter(id);
        gridCount++;
        console.log(currentWord);
        if(row*5 == gridCount-1) {
            status = false;
            row++;
        }
    }
}
 
function addLetter(id) {
    let gridBox = document.getElementById(gridCount);
    gridBox.innerText = id;
}

function removeLetter() {
    let gridBox = document.getElementById(gridCount-1);
    gridBox.innerText = "";
    gridCount--;
    currentWord = currentWord.substring(0, currentWord.length - 1);
}

function checkWord() {
    if(((gridCount-1) % 5 == 0) && currentWord == solution) {
        for(let i = 1; i <= 5; i++) {
            let gridBox = document.getElementById(gridCount-i);
            gridBox.style.backgroundColor = 'green';
        }
        status = true;
    } else if((gridCount-1) % 5 == 0){
        updateCorrectLetter();
        status = true;
    } 
}

function updateCorrectLetter() {
    for(let i = 1; i <= 5; i++) {
        let gridBox = document.getElementById(gridCount-i);
        let letter = gridBox.innerText;
        


        if(solution.contains(letter)) {
            if(solution.indexOf(letter) == gridCount)
        } else {
            gridBox.style.backgroundColor = 'grey';
        }
    }
}






