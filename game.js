let findWord, game, words = [];

function myFunction() {
    game = document.getElementById("b1").value;
    words.push(game);
    document.getElementById("b1").value = "";
}

function existWord() {
    findWord = document.getElementById("b2").value;
    for (let i = 0; i < words.length; ++i) {
        if(words[i] == findWord) {
            document.getElementById("print").innerHTML = "The searched word can be found in the dictionary";
            alert("The searched word can be found in the dictionary");
        } else {
            document.getElementById("print").innerHTML = "I'm sorry, I didn't find the word I was looking for in the dictionary"
             alert("I'm sorry, I didn't find the word I was looking for in the dictionary");
        }
    }
}