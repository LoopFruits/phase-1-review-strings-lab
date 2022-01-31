// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//we set excitedWelcomeMessage equal to the statement in welcomeMessage which turns out to be upper case because of the .toUpperCase


'Jimmy Jon'[0];
// => J 

'Jimmy Jon'.length;
// => 9

'Jimmy Jon'[9];
// => n


'Jimmy Jon'.slice();
// Jimmy Jon     if the parenthesis are em,py here we get a full copy of the original string

'Jimmy Jon'.slice(6);
// => Jon


const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
// allows us to take the first and second elements we stored, being welcome to flat book and grace hopper
