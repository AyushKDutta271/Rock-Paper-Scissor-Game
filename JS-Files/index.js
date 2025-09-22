var humanScore =0;
var computerScore =0;

function getComputerChoice()
{
    let RandomNumber=Math.floor(Math.random()*3);
    // console.log("random number is: "+RandomNumber);
    switch(RandomNumber)
    {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
}

function getHumanChoice()
{
    let round =0;
    while(round<=5)
    {
    let computerChoice = getComputerChoice();
    // console.log("computer choice is :"+computerChoice); 
    let humanChoice = prompt("Rock, Paper Or Scissor").toLowerCase();
    // console.log("human choice is :"+humanChoice); 

    if(playRound(computerChoice, humanChoice)=="tie")
    {
        round=0;
    }
    round++;
    }

    if(computerScore>humanScore)
    {
        console.log("Computer is the Final Winner!" + `Scores: Computer Score=${computerScore} , Your Score =${humanScore} `);

    }
    else if(humanScore>computerScore)
    {
        console.log("Human is the Final Winner!");
    }
    else{
        getHumanChoice();
    }
}

function playRound(computerChoice,humanChoice)
{

    // console.log("current round is: "+round);
   if((computerChoice=="rock" && humanChoice=="scissor") || (computerChoice=="scissor" && humanChoice=="paper") || (computerChoice=="paper" && humanChoice=="rock") )
   {
    console.log("Computer Beats Human(You)");
    computerScore++;
   }
    
   else if((humanChoice==="rock" && computerChoice==="scissor") || (humanChoice==="scissor" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="rock"))
   {
     console.log("You Beats Computer!");
     humanScore++;
   }

   else{
    console.log("Both are helpless to beat each other! \nLet's try again!");
    humanScore=0;
    computerScore=0;
    return "tie";
   }

}

getHumanChoice();


