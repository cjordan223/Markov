function buildMarkovChain(text) {
    const words = text.split(/\s+/);
    const chain = {};

    for (let i = 0; i < words.length - 3; i++) {
        const key = words.slice(i, i + 3).join(' ');
        const nextWord = words[i + 3];

        if (!chain[key]) {
            chain[key] = [];
        }

        chain[key].push(nextWord);
    }

    return chain;
}

function generateText(chain, numWords = 50) {
    const keys = Object.keys(chain);
    let currentKey = keys[Math.floor(Math.random() * keys.length)];
    let result = currentKey.split(' ');

    for (let i = 3; i < numWords; i++) {
        const possibleNextWords = chain[currentKey];
        if (!possibleNextWords || possibleNextWords.length === 0) break;

        const nextWord = possibleNextWords[Math.floor(Math.random() * possibleNextWords.length)];
        result.push(nextWord);

        currentKey = result.slice(result.length - 3).join(' ');
    }

    return postProcessText(result.join(' '));
}

function postProcessText(text) {
    const sentences = text.split('. ').map(sentence => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });

    let processedText = sentences.join('. ');

    if (processedText.charAt(processedText.length - 1) !== '.') {
        processedText += '.';
    }

    return processedText;
}

document.getElementById('generateBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const chain = buildMarkovChain(inputText);
    const newText = generateText(chain);

    document.getElementById('output').innerText = newText;
});
