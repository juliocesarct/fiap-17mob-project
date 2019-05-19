
function createUser(e){

    if (e.preventDefault) e.preventDefault()

    var name = document.getElementById('nameCadastro').value
    var email = document.getElementById('emailCadastro').value
    var password = document.getElementById('senhaCadastro').value

    var db = firebase.firestore();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(success){
        // Add a new document in collection "users"
        db.collection("users").add({
            name: name,
            email: email,
            photo: ""
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        window.location.href = "index.html"
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        alert(errorMessage)
    });

    return false

}

var form = document.getElementById('createuser');
if (form.attachEvent) {
    form.attachEvent("submit", createUser);
} else {
    form.addEventListener("submit", createUser);
}
