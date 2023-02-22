
gameon = false; //sThis will check if the user has started the game or not
let wordlength, word; // Wordlength is the length of the word the user will enter through prompt

//Array of array of words
let words = [
    ["Cat", "Dog", "Box", "Cup", "Jam", "Key", "Leg", "Man", "Pen", "Hat"],
    ["Tree", "Rain", "Fish", "Book", "Moon", "City", "Rock", "Gold", "Wind", "Fire"],
    ["Bread", "Apple", "Chair", "Table", "Carpet", "Pencil", "Guitar", "Banana", "Coffee", "Jacket"],
    ["Wizard", "Elephant", "Penguin", "Chimney", "Banquet", "Mystery", "Library", "Iceberg", "Eleven", "October"]
];

// document.querySelector('#newGame').addEventListener('click', refresh()) //removed this cause the site kept refreshing in a loop

//this was supposed to enter values of input fields to a var userWord each time there is a change
// document.querySelector('.inputs').addEventListener(onchange, function(){
//    userWord = document.getElementById(this.id).ariaValueMax
// })

//this is where the user entered word and the actual word would be compared
function checkwords(){

    for(let oss = 0; oss<wordlength;oss++){

        console.log("checkwords is running")
        console.log(wordlength)
        let id = oss + 'letter'
        console.log(id)
        console.log(        document.getElementById(oss + 'letter').innerText     )
    }
//    console.log('checkWords is running')
    

}

// this functions executes after new setup has been set for the game after user clicks start game
function game(){

    //here we ask the user to enter the length of the word
    wordlength = parseInt(prompt('How many letterd words do you want? 3, 4, 5 or 6'))

    //we're subtracting 3 form the word so that we can use to determine which array of word from array of arry are we to select
    let letterNO = wordlength-3;

    //creating a random number from 0 to 9 so that we can choose a random word to give to play the game each time
    let letter = Math.floor(Math.random() * 10);
    word = words[letterNO][letter]
    console.log(word)

    //here we create as many input fields as the letter of words there are
    for (i = 0; i < wordlength; i++) {
        let dash = document.createElement('input')
        dash.id = i+'letter'
        dash.className='inputs'
        dash.maxLength='1'
        dash.style.textAlign='center'
        document.querySelector('#blankSpace').append(dash)
    }
}

//this function was supposed to reset the entire game w/o refershing the page
function refresh() {
    // document.querySelector('#heading').style.display = 'block'
    // document.getElementById('startGame').style.display = 'block'
    // document.querySelector('#secondButtons').style.display = 'none'
    // document.querySelector('#blankSpace').style.display = 'none'
    location.reload();
}

//this function sets up new page layout after the user has clicked "Start game"
function gameStarts(id) {
    document.querySelector('#heading').style.display = 'none'
    document.getElementById(id).style.display = 'none'
    document.querySelector('#secondButtons').style.display = 'flex'
    document.querySelector('#blankSpace').style.display = 'block'
    game();    
}
