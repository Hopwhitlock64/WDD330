const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

function convertToJson(response){
    console.log(response);
    if(response.ok){
        return response.json();
    } else{
        throw new Error("Pokemon not found");
    }
}

function doStuff(data){
    console.log("first", data);
}
function getPokemon(){
    const pokemonName = document.getElementById("whichOne").value;
    const response = fetch(url + pokemonName)
    .then(convertToJson)
    .then(doStuff).catch((error) => {console.log(error);
});
}


document
.getElementById("submitButton")
.addEventListener("touchend", getPokemon);
console.log("second");

function getFoods(){
    fetch("data.json").then(convertToJson).then((data) => {console.log(data);
    });
}
getFoods();