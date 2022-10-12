// START + DIFFICULTY SELECTION
const startWrapper = document.getElementById(`startWrapper`);
const difficultySelectForm = document.getElementById(`difficultySelect`);
const difficultySelect = document.getElementById(`difficulty`);

// GAME
const gameWrapper = document.getElementById(`gameWrapper`);
const guessesText = document.getElementById(`guesses`);
const wordHolderText = document.getElementById(`wordHolder`);
const guessSubmitButton = document.getElementById(`guessSubmitButton`)

// GUESSING FORM
const guessForm = document.getElementById(`guessForm`);
const guessInput = document.getElementById(`guessInput`);

// GAME RESET BUTTON
const resetGame = document.getElementById(`resetGame`);

// CANVAS
let canvas = document.getElementById(`hangmanCanvas`);

// // The following Try-Catch Block will catch the errors thrown
// try {
//   // Instantiate a game Object using the Hangman class.
  
//   const hangman = new Hangman(canvas);
//   let game;
//   // add a submit Event Listener for the to the difficultySelectionForm
//   //    get the difficulty input
//   //    call the game start() method, the callback function should do the following
//   //       1. hide the startWrapper
//   //       2. show the gameWrapper
//   //       3. call the game getWordHolderText and set it to the wordHolderText
//   //       4. call the game getGuessessText and set it to the guessesText
//   difficultySelectForm.addEventListener(`submit`, function (event) {
//     debugger
    
//     event.preventDefault();
//     difficulty = difficultySelect;
//     hangman.start(next);
//   });

//   // add a submit Event Listener to the guessForm
//   //    get the guess input
//   //    call the game guess() method
//   //    set the wordHolderText to the game.getHolderText
//   //    set the guessesText to the game.getGuessesText
//   //    clear the guess input field
//   // Given the Guess Function calls either the checkWin or the onWrongGuess methods
//   // the value of the isOver and didWin would change after calling the guess() function.
//   // Check if the game isOver:
//   //      1. disable the guessInput
//   //      2. disable the guessButton
//   //      3. show the resetGame button
//   // if the game is won or lost, show an alert.
//   guessForm.addEventListener(`submit`, function (e) { e.preventDefault();
//     letter = guessInput;
//     game.guess();
//     wordHolderText = game.getHolderText();
//     guessesText = game.getGuessesText();
//     guessInput.innerHTML = "";
//     if (isOver = true) {
//       guessForm.classList = `hidden`;
//       guessSubmitButton.classList = `hidden`;
//       resetGame.classList = ``;
//       if (didWin === 'yes') {
//         alert("You won!")
//       } else {
//         alert("You Lost!")
//       }
//     }});
    
//   // add a click Event Listener to the resetGame button 
//   //    show the startWrapper
//   //    hide the gameWrapper
//   resetGame.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     startWrapper.classList = ``;
//     gameWrapper.classList = `hidden`;
//   });
// } catch (error) {
//   console.error(error);
//   alert(error);
// }

// New set of code 

// The following Try-Catch Block will catch the errors thrown
try {
  // Instantiate a game Object using the Hangman class.
const hangman = new Hangman (canvas);
  // add a submit Event Listener for the to the difficultySelectionForm
  //    get the difficulty input
  //    call the game start() method, the callback function should do the following
  difficultySelectForm.addEventListener(`submit`, function (event){
    event.preventDefault();
    hangman.start(difficulty.value, function(){
      //       1. hide the startWrapper
      //       (reasoning)
      startWrapper.classList.add('hidden');
      //       2. show the gameWrapper
      gameWrapper.classList.remove('hidden');
      //       3. call the game getWordHolderText and set it to the wordHolderText
      wordHolderText.innerHTMl = hangman.getWordHolderText();
      //       4. call the game getGuessessText and set it to the guessesText
      guessesText.innerHTMl = hangman.getGuessesText();
  });
  });
  // add a submit Event Listener to the guessForm
  guessForm.addEventListener(`submit`, function (e) {
    e.preventDefault();
      //    get the guess input
      //    call the game guess() method
      hangman.guess(guessInput.value);
      //    set the wordHolderText to the game.getHolderText
      wordHolderText.innerHTML = hangman.getWordHolderText();
      //    set the guessesText to the game.getGuessesText
      guessesText.innerHTML = hangman.getGuessesText();
      //    clear the guess input field
      guessInput.value = "";
  // Given the Guess Function calls either the checkWin or the onWrongGuess methods
  // the value of the isOver and didWin would change after calling the guess() function.
  // Check if the game isOver:
if (hangman.isOver === true){
  //      1. disable the guessInput
  //      2. disable the guessButton
  guessForm.classList.add('hidden');
  //      3. show the resetGame button
  resetGame.classList.remove('hidden');
  // if the game is won or lost, show an alert.
if(hangman.didWin === true){
  alert("You guessed the word!")
}else{
  alert("You lost the game!")
}
}
  });
  // add a click Event Listener to the resetGame button
  resetGame.addEventListener(`click`, function (e) {
    location.reload();
    //    show the startWrapper
    startWrapper.classList.remove('hidden');
    //    hide the gameWrapper
    gameWrapper.classList.add('hidden');
  });
} catch (error) {
  console.error(error);
  alert(error);
}
