import { fifaData } from './fifa.js';

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
console.log("===Task 3===")

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

console.log(getYears(getFinals, fifaData));