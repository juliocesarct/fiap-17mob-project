function logout(e){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Logout successful");
    $state.go("login.html");
    }, function(error) {
        // An error happened.
        console.log(error);
    });
}

var form = document.getElementById("sair");
if (form.attachEvent) {
    form.attachEvent("submit", logout);
} else {
    form.addEventListener("submit", logout);
}