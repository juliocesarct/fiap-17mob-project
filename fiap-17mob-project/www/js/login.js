var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        isLogged()
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function loginUser(e){

    if (e.preventDefault) e.preventDefault()

    var email = document.getElementById('emailLogin').value
    var password = document.getElementById('senhaLogin').value

    //firebase method
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(success){
        console.log(success)
        window.location.href = "index.html"
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ...
    });
    
    return false

}

var form = document.getElementById('loginusuario');
if (form.attachEvent) {
    form.attachEvent("submit", loginUser);
} else {
    form.addEventListener("submit", loginUser);
}

function isLogged(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = "index.html"
        }
    });
}