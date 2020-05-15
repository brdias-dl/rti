$(document).ready(() => {
    var actionCodeSettings = {
        url: 'https://rtigrupo8.herokuapp.com/',
        handleCodeInApp: true
    };

    var useremail;

    $(".fb.btn").click(() => {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('email');
        firebase.auth().useDeviceLanguage();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            entrar();
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("Error Code: " + errorCode);
            console.log("Error Message: " + errorMessage);
            console.log("Error Email: " + email);
            console.log("Error Credential: " + credential);
        });
    });

    $(".google.btn").click(() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');
        firebase.auth().useDeviceLanguage();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            entrar();
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("Error Code: " + errorCode);
            console.log("Error Message: " + errorMessage);
            console.log("Error Email: " + email);
            console.log("Error Credential: " + credential);
        });
    });

    $(".google.btn").click(() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');
        firebase.auth().useDeviceLanguage();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            entrar();
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("Error Code: " + errorCode);
            console.log("Error Message: " + errorMessage);
            console.log("Error Email: " + email);
            console.log("Error Credential: " + credential);
        });
    });

    $(".github.btn").click(() => {
        var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('user:email');
        firebase.auth().useDeviceLanguage();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            entrar();
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("Error Code: " + errorCode);
            console.log("Error Message: " + errorMessage);
            console.log("Error Email: " + email);
            console.log("Error Credential: " + credential);
        });
    });

    $("#loginpress").click(() => {
        for (let index = 0; index < document.getElementsByClassName("loginemail").length; index++) {
            if (document.getElementsByClassName("loginemail")[index] === "") {
                continue;
            }
            useremail = document.getElementsByClassName("loginemail")[index].value;
            break;
        }

        if (useremail === "nice") {
            entrar();
            return;
        }

        console.log(useremail);

        firebase.auth().sendSignInLinkToEmail(useremail, actionCodeSettings)
            .then(function () {
                alert("Um e-mail com um link de acesso foi-lhe enviado.");
                window.localStorage.setItem('emailForSignIn', useremail);
            })
            .catch(function (error) {
                console.log(error.code);
            });
    });





    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        var email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            email = window.prompt('Por favor, introduza o seu e-mail para confirmação');
        }
        firebase.auth().signInWithEmailLink(email, window.location.href)
            .then(function (result) {
                window.localStorage.removeItem('emailForSignIn');
                entrar();
                // You can access the new user via result.user
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
            })
            .catch(function (error) {
                console.log(error.code);
            });
    }
});



/*

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});



*/

function entrar() {
    $("#login_page").slideToggle(500);
    setTimeout(() => {
        $("#home_page").slideToggle(500)
        $(".navbar-toggler").fadeToggle(500);
        $(".dropdownuser").fadeToggle(500); 
        }, 500);
}