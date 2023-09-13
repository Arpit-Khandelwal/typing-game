// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('quote').addEventListener('click',()=>{
    const randomQuote = Math.floor(quotes.length * Math.random());

    const quote = quotes[randomQuote]
    words = quote.split(' ')

    wordIndex = 0

    const spanWords = words.map(function(word){return `<span>${word}</span>`});

    quoteElement.innerHTML = spanWords.join('') //quote

    quoteElement.childNodes[0].classname = 'highlight'

    messageElement.innerText = '';

    typedValueElement.value = '';
    typedValueElement.focus();

    startTime = new Date().getTime();
});

typedValueElement.addEventListener('input',()=>{
    const currentWord = word[wordIndex]
    const typeedValue = typedValueElement.value

    if(typeedValue === currentWord && wordIndex === words.length-1)
    {
        const elapsedTime = new Date().getTime() - startTime
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;

        messageElement.innerText = message;
    }
    else if(typeedValue.endsWith(' ') && typeedValue.trim() === currentWord)
    {
        typedValueElement.value = '';

        wordIndex++;

        for (const wordElemt of quoteElement.childNodes) wordElemt.classname = '';

        quoteElement.childNodes[wordIndex].classname='highlight'
    }

    else if(currentWord.startsWith(typeedValue)) typeedValue.classname=''
    else typeedValue.classname='error'
});

