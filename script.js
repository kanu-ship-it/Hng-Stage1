'use strict ';

const labelTime = document.querySelector('.currentTimeUTC');
const labelDay = document.querySelector('.currentDay');


let now = new Date();
let day = now.getUTCDay()


switch (day) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday'
    case 2:
    day = 'Tuesday';
    break;

  case 3:
    day = 'Wednesday';
    break;
    
  case 4:
      day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;

  case 6:
    day = 'Saturday';
    break;
}
const hour = `${now.getUTCHours()}`.padStart(2, 0);
const min = `${now.getUTCMinutes()}`.padStart(2, 0);

labelDay.textContent = day;
labelTime.textContent = `${hour}:${min}` 

// console.log(now);
//   const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day:'long',
//   month: 'numeric',
//   year: 'numeric',
//   weekday: 'long',
  
// };
 


   
   
//    const day =` ${now.getUTCDay('numeric')}`.padStart(2, 0);// padStart is use to add 0 at the front of a number
//    const month = `${now.getUTCMonth() + 1 }`.padStart(2, 0);//add one becos it zero based
//    const year = now.getUTCFullYear();
//    const hour = `${now.getUTCHours()}`.padStart(2, 0);
//    const min = `${now.getUTCMinutes()}`.padStart(2, 0);
//     labelTime.textContent = `${day}/${month}/${year} `
//   //  labelDay.textContent = `${hour}:${min}` 
//    setTimeout(() => {
    
//    labelDay.textContent = `${hour}:${min}` 
//    }, 1000);