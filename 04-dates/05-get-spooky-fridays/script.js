/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



    year = parseInt(document.getElementById("year").value);


    document.getElementById("run").addEventListener("click", function fridays(year) {

        var count = 0;
        for (var month=0; month<12; month++) {
            const DAY = 13;
            var d = new Date(year,month,DAY);
        }
            if(d.getDay() === 5){
                count++;
            }
        alert(`${count} Fridays the 13th in the year ${year}`);
        }
    )
})();
