var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day \n');

// Add another variable named years alive, and assign it your age.
// Then print out a second message to the page,
// That is add another document.write statement.

// The message should say I've been alive for more than x seconds.
// Now replace x with the number of seconds that have elapsed in all the years you've been alive.
var myAge = 28;
var yearsAlive = secondsPerDay * daysPerWeek * weeksPerYear * myAge;
document.write("I've been alive for more than " + yearsAlive + ' seconds');
