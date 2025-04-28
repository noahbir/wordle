let gridCount = 1;
let currentWord = "";
let solution = "GIPSY";
let row = 1;
let status = true;

document.addEventListener('keydown', function(event) {
    if (/^[a-z]$/i.test(event.key)) {
        letterPress(event.key.toUpperCase());
    } else if(event.key == "Enter") {
        checkWord();
    }
})






function letterPress(id) {
    if(status) {
        currentWord += id;
        addLetter(id);
        gridCount++;
        console.log(currentWord);
        if(row*5 == gridCount-1) {
            status = false;
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
            let button = document.getElementById(gridBox.innerText);
            button.style.background = "green";
        }
    } else if((gridCount-1) % 5 == 0){
        console.log('test');
        updateCorrectLetter();
        status = true;
        row++;
    } 
}

function updateCorrectLetter() {
    for(let i = 1; i <= 5; i++) {
        let gridBox = document.getElementById(gridCount-i);
        let letter = gridBox.innerText;
        let button = document.getElementById(letter);
        if(solution.includes(letter)) {
            let indexOfGridBox = (gridCount-i) - ((row-1)*5);
            let backgroundColor = button.style.background;
            console.log(backgroundColor);
            if((solution.indexOf(letter)+1) == indexOfGridBox) {
                gridBox.style.backgroundColor = 'green';
                button.style.background = "green";
                for(let i = 1; i <= 5; i++) {
                    let tempGridBox = document.getElementById(gridCount-i);
                    if(letter == tempGridBox.innerText && gridBox != tempGridBox) {
                        tempGridBox.style.backgroundColor = 'grey';
                    }
                }
            } else if(!(backgroundColor == "green")){
                gridBox.style.backgroundColor = 'yellow';
                button.style.background = "yellow";
            } else {
                gridBox.style.backgroundColor = 'grey';
            }
        } else {
            gridBox.style.backgroundColor = 'grey';
            button.style.background = "grey";
        }
    }
}






