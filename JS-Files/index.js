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

let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scissor=document.getElementById('scissor');


rock.addEventListener('click',()=>getHumanChoice("rock"));
paper.addEventListener('click',()=>getHumanChoice("paper"));
scissor.addEventListener('click',()=>getHumanChoice("scissor"));

let round =0;
function getHumanChoice(choice)
{

    
    
    let computerChoice=getComputerChoice();
    console.log("computer choice is :"+computerChoice); 
    
    console.log("human choice is :"+choice); 
    document.querySelector(".results").innerHTML=`<h3>Current Round: ${round}</h3>`;
    if(playRound(computerChoice,choice)=="tie")
    {
        round=0;
    }
    else{
    round++;
    }
    
   if(round==5)
   {
    if(computerScore>humanScore)
    {
        let res=document.querySelector(".results");
        let conc=document.createElement("p");
        conc.textContent="FINAL WINNER IS COMPUTER";
        res.appendChild(conc);
        let result=document.querySelector(".results");
        let conc1=document.createElement("p");
        conc1.innerText=`Final Scores: computer score= ${computerScore}; human score =${humanScore}`;
        result.appendChild(conc1);
        console.log("Computer is the Final Winner!" + `Scores: Computer Score=${computerScore} , Your Score =${humanScore} `);

    }
    else if(humanScore>computerScore)
    {
        let res=document.querySelector(".results");
        let conc=document.createElement("p");
        conc.textContent="FINAL WINNER IS HUMAN";
        res.appendChild(conc);
        let result=document.querySelector(".results");
        let conc1=document.createElement("p");
        conc1.innerText=`Final Scores: computer score= ${computerScore}; human score =${humanScore}`;
        result.appendChild(conc1);

        console.log("Human is the Final Winner!");
    }
    else{
        getHumanChoice();
    }
}

}

function playRound(computerChoice,humanChoice)
{

   
   
   if((computerChoice=="rock" && humanChoice=="scissor") || (computerChoice=="scissor" && humanChoice=="paper") || (computerChoice=="paper" && humanChoice=="rock") )
   {
   let res= document.querySelector(".results");
   let pTag=document.createElement("p");
   pTag.innerText="Computer Beats Human (You)!";

   res.appendChild(pTag);
    computerScore++;
   }
    
   else if((humanChoice==="rock" && computerChoice==="scissor") || (humanChoice==="scissor" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="rock"))
   {
     let res= document.querySelector(".results");
   let pTag=document.createElement("p");
   pTag.innerText="Human (You) beats Computer!";

   res.appendChild(pTag);
     humanScore++;
   }

   else{
    console.log("Both are helpless to beat each other! \nLet's try again!");
   
     let res= document.querySelector(".results");
   let pTag=document.createElement("p");
   pTag.innerText="Both are helpless to beat each other! \nLet's try again!";

   res.appendChild(pTag);
    return "tie";
   }

}

let ins=document.getElementById('instruct');
ins.style.display="none";


setTimeout(()=>
{
    ins.style.display="block";
},6000);

let close=document.querySelector(".close");
close.addEventListener('click',()=>{
    ins.style.display="none";
})