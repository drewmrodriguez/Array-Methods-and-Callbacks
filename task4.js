import { fifaData } from './fifa.js';

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
console.log("===Task 4===")

function getFinal() {
    let objLength = Object.keys(fifaData).length;
    const winners = [];
    for (let i = 0; i < objLength; i++) {
        let homeTeamName = Object.values(fifaData)[i]["Home Team Name"];
        let homeTeamGoals = Object.values(fifaData)[i]["Home Team Goals"];
        let awayTeamName = Object.values(fifaData)[i]["Away Team Name"];
        let awayTeamGoals = Object.values(fifaData)[i]["Home Team Goals"];
        if (homeTeamGoals > awayTeamGoals) {
            winners.push(homeTeamName);
        } else {
            winners.push(awayTeamName);
        }
    }
    return winners;
}
function getWinners(callback) {
    return callback()
}
let winningCountries = getWinners(getFinal);
console.log(winningCountries);
