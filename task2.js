import { fifaData } from './fifa.js';

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log("===Task 2===")

function getFinals(data) {
    const finalsData = data.filter((item) => item.Stage === "Final");
    return finalsData;

}

console.log(getFinals(fifaData));