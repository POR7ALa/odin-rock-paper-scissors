
function getComputerChoice() {
    
    // randomNum = Math.random(3);
    randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum)
    
    if (randomNum === 0) {
        return 'Rock'
    }
    else if (randomNum === 1) {
        return 'Paper'
    }
    else if (randomNum === 2) {
        return 'Scissors'
    }
}


// console.log('Hello1');


function game() {
    
    // console.log('Hello2');

    let p = 0;
    let c = 0;


    while (p <= 5 || c <= 5) {

        // console.log('Hello3');
        
        let playerSelection = prompt('Rock, Paper or Scissors?');
        playerSelection = playerSelection.toLowerCase();
        
        let computerSelection = getComputerChoice()
        computerSelection = computerSelection.toLowerCase();
    
        if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors') {
            
            p++;
            console.log(`Player: ${p} | Computer ${c}`);
            
            if (p === 5) {
                return (`You won: ${p} to ${c}`)
            }
        
            else if (c === 5) {
                return (`You lost: ${p} to ${c}`)
            }
                
        }

        else if (playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'scissors') {
            
            console.log(`Tie Game! The score is still Player: ${p} | Computer ${c}`);
        }


        else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {

            c++;
            console.log(`Player: ${p} | Computer ${c}`);
            
            if (p === 5) {
                return (`You won: ${p} to ${c}`)
            }
        
            else if (c === 5) {
                return (`You lost: ${p} to ${c}`)
            }
        }

        else {
            console.log(`You entered: ${playerSelection}. Please enter Rock, Paper or Scissors`)
        }
        
    }
    
    
}

game();