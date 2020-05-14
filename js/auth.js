$(document).ready(() => {
    var actionCodeSettings = {
        url: 'http://127.0.0.1:5501/index.html',
        handleCodeInApp: true
    };

    var useremail;
    

    

    $("#loginpress").click(() => {
        useremail = document.getElementById("loginemail").value;
        if(useremail === ""){
            $("#loginpage").slideToggle(500);
            setTimeout(() => $("#homepage").slideToggle(500), 500);
            return;
        }

        console.log(useremail);

        firebase.auth().sendSignInLinkToEmail(useremail, actionCodeSettings)
        .then(function() {
            alert("Um e-mail com um link de acesso foi-lhe enviado.");
            window.localStorage.setItem('emailForSignIn', useremail);
        })
        .catch(function(error) {
            console.log(error.code);
        });
    });



    

    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        var email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
        email = window.prompt('Please provide your email for confirmation');
        }
        firebase.auth().signInWithEmailLink(email, window.location.href)
        .then(function(result) {
            window.localStorage.removeItem('emailForSignIn');
            $("#loginpage").slideToggle(500);
                setTimeout(() => $("#homepage").slideToggle(500), 500);
            // You can access the new user via result.user
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
        })
        .catch(function(error) {
            console.log(error.code);
        });
    }
});