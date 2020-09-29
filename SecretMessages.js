let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//use .pop() to remove the last string of the array secretMessage
secretLast = secretMessage.pop('JavaScript');
//check the lenght of the array 
//push the words 'to' and 'Program' as seperate strings to array secretMessage 
secretMessage.push('to','Program');
//change 'easily' to 'right' by accessing index 
secretMessage[7] = 'right';
//use the shift.() method to remove first string 
firstString = secretMessage.shift();
//use the unshift.() method to add string to the beginning of the array 
secretMessage.unshift('Programming');
//use the .splice() method to remove strings and replace them with a single string 
secretMessage.splice(6,5,'know,');
console.log(secretMessage.join(' '));
