// this is an anonymous function that is called everytime the page loads
window.onload = function () {
    function check_mail() {
        var mail = document.getElementById('email').value

        // regular expression of standard email format
        var emailREGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // if the email matches the regex format, then redirect to the page
        // else (if email not in correct format or left blank), pop-up alert is displayed on the screen
        if (mail.match(emailREGX)) {
            location.href = "thank_you.html";
        }
        else {
            alert("Please Enter valid email address")
            location.reload();
        }
        return false;
    }
    // this statement will call the check_mail function everytime the submit button is clicked
    document.getElementById('Submit').onclick = check_mail;
};