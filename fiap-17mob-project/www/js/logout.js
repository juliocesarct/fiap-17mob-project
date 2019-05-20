var app = {

    initialize: function () {
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.getElementById('sair').addEventListener('click', () => {
            firebase.auth().signOut().then(function () {
                window.location = 'index.html'
                console.log('deslogado')
            }).catch(function (error) {
                // An error happened.
                console.log('erro ao deslogar')
            });

        })

    },
};

app.initialize();    