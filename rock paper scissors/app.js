let userscore=0;
let compscore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices=["r","p","s"];
    const randomNumber=Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function getword(letter){
    switch (letter){
        case "s":
            return"scissors";
        case "r":
            return "rock";
        case "p":
            return "paper";
    }
}
function win(userChoice,computerChoice){
    result_div.innerHTML=(`you chose ${getword(userChoice)} - computer chose ${getword(computerChoice)}. You wins!`);
    userscore++;
    userScore_span.innerHTML=userscore;
    compScore_span.innerHTML=compscore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=> {document.getElementById(userChoice).classList.remove('green-glow')},400);
}
function lose(userChoice,computerChoice){
    result_div.innerHTML=(`you chose ${getword(userChoice)} - computer chose ${getword(computerChoice)}. You loses!`);
    compscore++;
    userScore_span.innerHTML=userscore;
    compScore_span.innerHTML=compscore;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(()=> {document.getElementById(userChoice).classList.remove('red-glow')},400);
}
function draw(userChoice){
    result_div.innerHTML=(`you chose ${getword(userChoice)} -  computer chose ${getword(userChoice)}. No winner!`);
    userScore_span.innerHTML=userscore;
    compScore_span.innerHTML=compscore;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(()=> {document.getElementById(userChoice).classList.remove('gray-glow')},400);
}
function game(userChoice){
    const computerCoice=getComputerChoice();
    switch (userChoice+computerCoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerCoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerCoice);
            break;
        case "ss":
        case "rr":
        case "pp":  
             draw(userChoice);
    } 
}
function main(){
    rock_div.addEventListener('click', (e)=>{
        game("r");
    })
    paper_div.addEventListener('click', (e)=>{
        game("p");
    })
    scissors_div.addEventListener('click', (e)=>{
        game("s");
    })
}
main();
