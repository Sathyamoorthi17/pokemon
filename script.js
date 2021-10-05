//background color for body

document.body.style.backgroundColor = "#EFEFBB";

//creating div element
var div = document.createElement('div');
div.setAttribute('id','bar');
document.body.append(div);

// creating h1 tag

var h1=document.createElement('h1');
h1.innerText='Pokemons'
h1.setAttribute('class','display-5 mt-2');

//styling & append h1 tag

h1.style.wordSpacing = '10px';
h1.style.color = '	#FFFF00';
h1.style.textShadow = '3px 2px 8px #cc2900';
h1.style.textAlign = 'center';
h1.style.backgroundColor = '#ffebe6';
div.append(h1);

//creating div1 element

var div1 = document.createElement('div');
div1.setAttribute('id','poke_container');
div1.setAttribute('class','poke_container');
document.body.append(div1);

// JS

const poke_container = document.getElementById('poke_container');
const pokemon_number = 60;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokemons = async () => {
    for(let i=1; i<=pokemon_number;i++){
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon){
    const pokemonEl = document.createElement('div');
    pokemonEl.setAttribute('id','pokemon');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const poke_types = pokemon.types.map(el=> el.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);

    const pokeInnerHTML = `<div class="img-continer">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
        pokemon.id}.png"/>
    </div>
    <div class="info">
    <span class="number">#${pokemon.id
    .toString()
    .padStart(2,'0')}</span>
    <h3 class="name">${name}</h3>
    <small class="Type">Type: <span>${type}</span></small>
    </div>`;

    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}
