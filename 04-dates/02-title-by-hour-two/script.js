/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let date = new Date;
let hrs = date.getHours();
let mi = date.getMinutes();

let greeting;

    if (hrs < 17 || (hrs === 17 && mi <= 29))
        greeting = 'Hello';
    else if (hrs > 17 || (hrs === 17 && mi >= 30))
        greeting = 'Good evening';

    document.getElementById('target').innerHTML
        = '<p>' + greeting + '</p>';
})();
