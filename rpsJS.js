


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

getComputerChoice()