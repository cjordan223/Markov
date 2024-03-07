// js/markov-generator.js

function buildMarkovChain(text) {
    const words = text.split(/\s+/);
    const chain = {};

    for (let i = 0; i < words.length - 1; i++) {
        const word = words[i];
        const nextWord = words[i + 1];

        if (!chain[word]) {
            chain[word] = [];
        }

        chain[word].push(nextWord);
    }

    return chain;
}

function generateText(chain, startWord, numWords = 50) {
    let currentWord = startWord;
    let result = [currentWord];

    for (let i = 1; i < numWords; i++) {
        const possibleNextWords = chain[currentWord];
        if (!possibleNextWords || possibleNextWords.length === 0) break;

        currentWord = possibleNextWords[Math.floor(Math.random() * possibleNextWords.length)];
        result.push(currentWord);
    }

    return result.join(' ');
}

document.getElementById('generateBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\s+/);
    const startWord = words[Math.floor(Math.random() * words.length)];
    const chain = buildMarkovChain(inputText);
    const newText = generateText(chain, startWord);

    document.getElementById('output').innerText = newText;
});
