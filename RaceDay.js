let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 4;

if (runnerAge > 18 && earlyRegister === true);
	raceNumber += 1000; 
//control flow checks whether runner is an adult 

if (runnerAge > 18 && earlyRegister === true)
{ console.log(`Runner ${raceNumber}, you will race at 9:30am!`);
} else if (runnerAge > 18 && !earlyRegister) {
console.log(`Runner ${raceNumber}, you will race at 11:00am`); 
}
else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber}, you will race at 12:30pm`);
}
else (runnerAge === 18); {
  console.log('Please see the registration desk.');  
}
