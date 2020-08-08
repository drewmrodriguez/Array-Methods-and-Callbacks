import { fifaData } from './fifa.js';

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log("===Task 5===")

function getFinals(data) {
    const finalsData = data.filter((item) => item.Stage === "Final");
    return finalsData;

}

function getYears(callback, data) {
    const years = [];
    callback(data).forEach((item) => {
        years.push(item.Year);
    });

    return years;
};

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



function getWinnersByYear(callbackWinners, callbackYears) {
    const winners = callbackWinners(getFinals);
    const years = callbackYears(getFinals);

    const finalWinners = winners.forEach((item, index) => {
        console.log(`In ${years[index]}, ${item} won the world cup!`);
    })
    
    return finalWinners;
}

getWinnersByYear(getWinners, getYears);