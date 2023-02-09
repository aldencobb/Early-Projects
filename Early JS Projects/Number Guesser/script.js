let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

let compareGuesses = (playerGuess, computerGuess, target) => {
    if ((Math.abs(target - playerGuess)) < (Math.abs(target - computerGuess))) {
        return true;
    } else if ((Math.abs(target - playerGuess)) > (Math.abs(target - computerGuess))) {
        return false;
    } else {
        return 'Error!';
    }
}
