//create a function that gets the number of hours you've slept each day of the week
const getSleepHours = day => {
//create switch statement for days of the week 
switch(day) {
  case 'Monday':
    return 8
    break;
  case 'Tuesday':
    return 8
    break;
  case 'Wednesday':
    return 7
    break;
  case 'Thursday':
    return 8
    break; 
  case 'Friday':
    return 7
    break;
  case 'Saturday':
    return 8
    break;
  case 'Sunday':
    return 6
    break;
  default:
    return 'Error!'
}
  
};
//create a new function named getActualSleepHours, return the sum using an implicit total
const getActualSleepHours = () =>  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
//create a new function named getIdealSleepHours
const getIdealSleepHours = () => {
  idealHours = 7.5 
  return (idealHours * 7)
}
//create a function named calculateSleepDebt with no parameters 
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  	if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You actually got more sleep than needed!');
    } else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest.');
    }
};
calculateSleepDebt(); 
