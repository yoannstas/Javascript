/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    (function() {
        document.getElementById("pass-one").setAttribute("maxLength", "10");
        document.getElementById("pass-one").oninput = () => {
            let password = document.getElementById("pass-one").value.length;
            for (let i = 1; i <=10; i++) {
                document.getElementById("counter").innerHTML = password + "/10";
            }
        }
    })();

})();
