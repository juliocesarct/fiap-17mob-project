var app = {


    initialize: function () {
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
        this.carregaLista(this.addItemList, this.buscaDetalhes)
    },

    carregaLista: function (callback) {
        document.getElementById('carregando').style.display = "block"
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/');
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            }
            else {
                document.getElementById('carregando').style.display = "none"
                var allPokes = JSON.parse(xhr.response)
                callback(allPokes)

            }
        };


        xhr.onerror = function () {
            alert("Request failed");
        };
    },

    addItemList: (allPokes) => {
        
        for (var i in allPokes.results) {
            let people = allPokes.results[i]
            var node = document.createElement('a');
            node.id = i;
            node.href = "#";
            node.className = "list-group-item list-group-item-action"
            node.innerText = people.name

            document.getElementById('listaSW').appendChild(node)
            //document.getElementById(i).addEventListener('click', () => {detalhe(people)})
        }
    },

};

app.initialize();