/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    (function() {
        document.getElementById('run').addEventListener('click', () => {
            let numbers = [];
            for (let i = 1; i <= 10; i++) {
                let tableNr = Math.floor(Math.random() * 100 + 1);
                document.getElementById("n-" + i).innerText = tableNr;
                numbers.push(tableNr);
            }
            document.getElementById('min').innerText = numbers.reduce((a, b) => a > b ? a : b);
            document.getElementById('max').innerText = numbers.reduce((a, b) => a < b ? a : b);
            document.getElementById('sum').innerText = numbers.reduce((a, b) => a + b, 0);
            document.getElementById('average').innerText = numbers.reduce((a, b) => a + b) / numbers.length;
        })
})();
