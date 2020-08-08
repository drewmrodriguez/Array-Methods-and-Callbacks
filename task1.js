import { fifaData } from './fifa.js';

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log("===Task 1===")

fifaData.forEach((item) => {
    if(item.Year === 2014 && item.Stage === 'Final'){
        console.log(item["Home Team Name"]);
        console.log(item["Away Team Name"]);
        console.log(item["Home Team Goals"]);
        console.log(item["Away Team Goals"]);
        if(item["Home Team Goals"] > item["Away Team Goals"] ){
            console.log(`${item["Home Team Name"]} was the winner of the 2014 world cup final.`)
        }else{
            console.log(`${item[" Team Name"]} was the winner of the 2014 world cup final.`)
    
        }
    }

})