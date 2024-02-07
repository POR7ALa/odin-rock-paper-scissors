




function getComputerChoice() {
    
    // randomNum = Math.random(3);
    randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum)
    
    if (randomNum === 0) {
        return 'rock'
    }
    else if (randomNum === 1) {
        return 'paper'
    }
    else if (randomNum === 2) {
        return 'scissors'
    }
}

let p = 0;
let c = 0;
let wonCheck = 0;
let tieCheck = 0;


const roundResult = document.querySelector('#results');

const pickRock = document.querySelector('#rock');
pickRock.addEventListener('click', () => {
    game('rock');
})

const pickPaper = document.querySelector('#paper');
pickPaper.addEventListener('click', () => {
    game('paper');
})

const pickScissors = document.querySelector('#scissors');
pickScissors.addEventListener('click', () => {
    game('scissors');
})



// console.log('Hello1');
 function game(choice) {

    
    let playerSelection = choice
    let computerSelection = getComputerChoice()

    // When the game is finished the text content is being overwritten because the game function continues to run


    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors') {
        
        p++;

        hasAnybodyWon(p, c);

        if (c != 0) {
        roundResult.textContent = (`Player: ${p} | Computer ${c}`);
        }
            
    }

    else if (playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'scissors') {
        
        roundResult.textContent = (`Tie Game! The score is still Player: ${p} | Computer ${c}`);
        tieCheck++;
        /* console.log(`There have been ${tieCheck} tie games`) */
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {

        c++;
        
        hasAnybodyWon(p, c);

        if (c != 0) {
            results.textContent = (`Player: ${p} | Computer ${c}`);
        }
    }

}

function hasAnybodyWon(p1, p2) { 
    
    wonCheck++;
    /* console.log(`hasAnybodyWon function was run | ${wonCheck} times`) */
    
    if (p == 5) {
        
        roundResult.textContent = (`You won: ${p1} to ${p2}`);
        /* console.log(`You won: ${p1} to ${p2}`); */
        // results is not being recognized in this function
        
        /* console.log(`p is ${p}`)
        console.log(`c is ${c}`) */
        p = 0;
        c = 0;
        playerSelection = null;
        computerSelection = null;
    }

    else if (c == 5) {
        
        roundResult.textContent = (`You lost: ${p1} to ${p2}`)
        /* console.log(`You lost: ${p1} to ${p2}`);
        
        console.log(`p is ${p}`)
        console.log(`c is ${c}`) */
        p = 0;
        c = 0;
        playerSelection = null;
        computerSelection = null;
    }

    
};
    
      
    




