const url = "https://pokeapi.co/api/v2/type/3";

function convertToJson(response){
    if(response.ok){
        return response.json();
    } else{
        throw new Error(response.statusText);
    }
}

// function getPokemon(url){
//     fetch(url)
//     .then(convertToJson)
//     .then((data) => {pokemon = data;
//         displayPokemon();
//     });
// }
async function getPokemonAsync(url){
    let pokemon = await fetch(url).then(convertToJson);
    console.log(pokemon.pokemon);
    displayPokemon(pokemon.pokemon);
}

function displayPokemon(list){
    const listElement = document.getElementById('pokelist');
    const newArray = list.map((item) => {
        return `<li data-url = "${item.pokemon.url}">${item.pokemon.name}</li>`;
    });
    listElement.innerHTML = newArray.join(" ");
    // console.log(newArray);
}

function displayDetails(details){
    const list = document.querySelector(".listbox");
    const details = document.getElementById("listElement");
    getPokemonAsync(e.target.getAttribute("data-url"));
    list.style.transform = "translateX(-100vw)";
    details.style.transform = "translateX(-100vw)";
}
async function pokemonClicked(event){
    console.log(event.target.dataset.url);
    const details = await fetch(event.target.dataset.url).then(convertToJson);
    displayDetails(details);

    document.querySelector(".name").innerHTML = pdetails.name;
    document.querySelector(".number").innerHTML = pokemon.pokemon.id;
    document.querySelector(".species").innerHTML = pokemon.pokemon.species;
    document.querySelector(".stats").innerHTML = pokemon.pokemon.stats;
    document.querySelector(".pokeimg").src = data.sprites.front_default;
}

document.getElementById('pokelist').addEventListener('click', pokemonClicked);
getPokemonAsync(url);
}