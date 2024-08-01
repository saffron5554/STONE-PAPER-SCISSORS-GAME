let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = [ "rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Play again!";
    msg.style.backgroundColor = "#023e8a";
};

const showWinner = (userWin, userChoice, compChoice) => {
 if(userWin){
    userScore++;
    userScores.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
 }
 else{
    compScore++;
    compScores.innerText = compScore;
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
 } 
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    //generate computer choice
    if(userChoice == compChoice){
        //draw game
        drawGame();
    }  
    else{
        let userWin = true ;
        if( userChoice === "rock"){
            if(compChoice === "scissors"){
                userWin = true;
            }
            else{ userWin = false;
            } 
        } 
        else if(userChoice === "paper"){
                if(compChoice === "rock"){
                    userWin = true;
                }else{ userWin = false;
                } 
            }
        else{
            if(compChoice === "paper"){
            userWin = true;
        }else
        {
             userWin = false;
        } 

        }showWinner(userWin , userChoice, compChoice);
    }
    };

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});








