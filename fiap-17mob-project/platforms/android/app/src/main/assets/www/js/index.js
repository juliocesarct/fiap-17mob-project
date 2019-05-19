class Pokemon{
    constructor(name, image){
      this.name = name;
      this.image = image;
    }
  }
  const $pokemons = $("#pokemons");
  const addPokemon = (pokemon) => {
    const img = $('<img>').attr('src', pokemon.image);
    const pokm = $('<div>').addClass('pokemon').append(img);
    $pokemons.append(pokm);
  };
  
  
  const baseURL = "https://pokeapi.co/api/v2/";
  $.ajax({
    url: baseURL + 'pokemon/1',
    dataType:'json',
  }).then(data => {
    console.log(data);
  }).catch( e  => console.log(e));