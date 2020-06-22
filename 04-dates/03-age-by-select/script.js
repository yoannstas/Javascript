/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let bday = document.getElementById("dob-day").value
    let bmonth = document.getElementById("dob-month").value
    let byear = document.getElementById("dob-year").value

        let now = new Date();
        let birthday = new Date(`${bmonth}-${bday}-${byear}`);
        let age = now.getFullYear() - birthday.getFullYear();
        let ageM = now.getMonth() - birthday.getMonth();
        if (ageM < 0 || (ageM === 0 && now.getDate() < birthday.getDate())) {
            age = age -1;
        }
        alert(`Your age is ${age}`);

})();
