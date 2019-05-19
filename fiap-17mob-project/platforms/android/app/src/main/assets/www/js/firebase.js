
function initializeFb(){

    var firebaseConfig = {
        apiKey: "AIzaSyC3KwVgPybxR7reZfmZwl70DCJmkPagtYg",
        authDomain: "fiap-project-17mob.firebaseapp.com",
        databaseURL: "https://fiap-project-17mob.firebaseio.com",
        projectId: "fiap-project-17mob",
        storageBucket: "fiap-project-17mob.appspot.com",
        messagingSenderId: "496978727144",
        appId: "1:496978727144:web:18066a4c3f9370bb"
    };

    var app = firebase.initializeApp(firebaseConfig);
    
    return firebaseConfig;
}

window.onload = function(){
    initializeFb()
}
