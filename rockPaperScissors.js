//create a function that returns userInput if the input meets the specified requirements 
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput ==='rock' || userInput ==='paper' || userInput ==='scissors'){
  return userInput;
} 
else {
  console.log('Error!');
}
};
//console.log(getUserChoice('Paper'));
//console.log(getUserChoice('fork'));

//create a function that gets the computers choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
};

//This calls the function getComputerChoice
//console.log(getComputerChoice())

//create a function named determineWinner 
const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice) {
    return 'Its a tie!';
  }
  
  if (userChoice === 'rock') {
  if (computerChoice === 'paper'){
      return 'The computer won!';
    } 
    else{
      return 'The user won!';
    }
  }
  //if stataement for userChoice = 'paper'
  if (userChoice === 'paper') {
  if (computerChoice === 'rock') {
      return 'The user won!';
    } 
    else{
      return 'The computer won!';
    }
  }
  //if statement for userChoice = 'scissors'
    if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
        return'The computer won!';
      } 
      else{
        return 'The user won!';
      }
    }
  }
//call the function to test it 
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

//finally play the g
