

let words = [
    ["CAT", "DOG", "BOX", "CUP", "JAM", "KEY", "LEG", "MAN", "PEN", "HAT"],
    ["TREE", "RAIN", "FISH", "BOOK", "MOON", "CITY", "ROCK", "GOLD", "WIND", "FIRE"],
    ["BREAD", "APPLE", "CHAIR", "TABLE", "CARPET", "PENCIL", "GUITAR", "BANANA", "COFFEE", "JACKET"],
    ["WIZARD", "ELEPHANT", "PENGUIN", "CHIMNEY", "BANQUET", "MYSTERY", "LIBRARY", "ICEBERG", "ELEVEN", "OCTOBER"]
];

let wordlength;
let word;
let inputs = document.getElementById('inputs')
let hintsNo;


function setHints(){
    setHintsNumber();
    for(let i = 0; i<hintsNo; i++){
        const randomNumber = Math.floor(Math.random() *( wordlength-1));
        console.log('hint position = ' + randomNumber +'letter')
        document.getElementById(randomNumber+'letter').value=word[randomNumber]
    }

}

function gaveUp(){
    for(let y = 0; y<wordlength; y++){
        document.getElementById(y+'letter').value = word[y];
    }
}

function setHintsNumber(){
    if (wordlength == 3 || wordlength == 4) {
        hintsNo = 1;
      } else if (wordlength == 5 || wordlength == 6) {
        hintsNo = 2;
      } else {
        hintsNo = 'ohlala';
      }
      
}

function refresh(){
    location.reload();
}

function bringWord() {
    const randomNumber = Math.floor(Math.random() * 10);
    word = words[wordlength - 3][randomNumber]
    console.log(word)
}

function resetFields() {
    for (let i = 0; i < wordlength; i++) {
        let inputt = document.getElementById(i + 'letter');
        inputt.value = null;
    }
}

function checkWords() {

    let letter, errors = 0;

    for (let i = 0; i < wordlength; i++) {

        document.getElementById(i + 'letter').style.backgroundColor = '#F4F7F5'
        letter = document.getElementById(i + 'letter').value.toUpperCase();

        if (word.includes(letter) && word[i] != letter) {
            errors++
            document.getElementById(i + 'letter').style.backgroundColor = '#eeadad'
        }

        else if (!word.includes(letter)) {
            errors++
            document.getElementById(i + 'letter').value = null
        }

        else{
            document.getElementById(i + 'letter').style.backgroundColor = '#92d89c'
        }
    }

    if (errors == 0) {
        alert('You won')
        setTimeout(() => {
            // Reload the current page
            location.reload();
        }, 500);
    }
}

function newGame() {
    let heading = document.querySelector('#heading');
    heading.style.display = 'none'

    let newGame = document.querySelector('#newGame')
    newGame.style.display = 'none'

    askWordLength();
    
    inputs.style.display = 'flex'
    document.querySelector('#secondButtons').style.display = 'flex'

    setupGamePage();

    bringWord();

    setHints();
}

function askWordLength() {
    let input
    wordlength=prompt('Enter length of word 3, 4, 5 or 6')
    if(wordlength>6||wordlength<3){
        input='invalid'
    }
     while(input=='invalid'){
        wordlength=prompt('Invalid input \n Enter length of word 3, 4, 5 or 6')
        if(wordlength>=3 && wordlength<=6){
            input='valid'
        }
    }
}

function setupGamePage() {
    for (let i = 0; i < wordlength; i++) {
        let input = document.createElement('input')
        input.type = 'text'
        input.className = 'inputBox'
        input.maxLength = '1'
        input.id = i + 'letter'
        inputs.append(input)
    }
}