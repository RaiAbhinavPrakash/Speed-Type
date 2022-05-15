const randomQuote = [
    "You know you are in love when you can not fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "Action speaks louder than words.",
    "The greatest pleasure in life is DOING the things people say you CAN NOT.",
    "Confidence seems to involve courage to accept imperfections.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "A friend is someone who knows all about you and still loves you.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "The round pegs in the square holes. The ones who see things differently. They're not fond of rules.",
    "hey push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do."
];
const quoteDisplay = document.querySelector('.quoteDisplay');
const btn = document.querySelector('.btn');
const typing = document.querySelector('#typing');
let startTime, endTime;

const startGame = () => {
    let randomNumber = Math.floor(Math.random() * randomQuote.length);
    quoteDisplay.textContent = randomQuote[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.textContent = "Done";
}


const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime)/1000;
    console.log(totalTime);

    let totalStr = typing.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.floor((wordCount / totalTime)*60);

    let finalMsg = ` You typed total at ${speed} words per minute `;
    finalMsg += compareWords(quoteDisplay.textContent, totalStr);
    quoteDisplay.textContent = finalMsg;
}


const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    let accuracy = (cnt/words1.length)*100;
    // return (`${cnt} correct out of ${words1.length} words and the total number of error(s) are ${errorWords}.`);
    return `with ${accuracy}% accuracy`;
}


const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}


btn.addEventListener('click', function () {
    if (this.textContent == "Start") {
        typing.textContent.disabled = false;
        startGame();
    }
    else if(this.textContent == "Done")
    {
        typing.textContent.disabled = true;
        btn.textContent = "Start";
        endGame();
    }
})