### Markov Text Generator

This is a simple Markov text generator implemented in JavaScript. It takes input text, builds a Markov chain from it, and generates new text based on the patterns found in the input.

#### Usage

1. **Input Text:** Enter the input text in the provided text area. The text should contain the corpus from which the Markov chain will be built.

2. **Generate Text:** Click the "Generate" button to generate new text based on the input. The generator will randomly select a starting word from the input and use the Markov chain to generate a sequence of words.

3. **Output Text:** The generated text will be displayed in the output area below the input form.

#### JavaScript File

- **File:** `js/markov-generator.js`
 
#### Functionality

- **buildMarkovChain:** This function takes the input text and builds a Markov chain from it. It splits the text into words and creates a mapping of each word to the words that follow it in the text.

- **generateText:** This function generates new text based on the Markov chain. It starts with a randomly selected word from the input and then selects subsequent words based on the probabilities defined by the Markov chain.

- **Event Listener:** The script adds an event listener to the "Generate" button. When clicked, it retrieves the input text, builds the Markov chain, generates new text, and updates the output area with the generated text.


