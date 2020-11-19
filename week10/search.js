/* when user types in input box(addEventListener keyup) get what they typed
make a call to the search api with the query string
when the results come back 
foreach result generate html and add to out HTML list 
*/
const baseUrl = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY";

function convertToJson(response){
    if(response.ok){
        return response.json();
    } else{
        throw new Error(response.statusText);
    }
}
async function getSearchResults(query){
    const results = await fetch(baseUrl + `&query=${query}`).then(convertToJson);
    return results
}

function renderSearchResults(results){
    const resultsListElement = document.getElementById('searchReults');
   resultsListElement.innerHTML = results.map((item)=> `<li>${item.description}<li>`).join('');
}

export async function search(e){
   const query = e.target.value;
    console.log(query);
    if(query.length > 2){
        const results = await getSearchResults(query);
        console.log(results);
        renderSearchResults(results.foods);
    }
}





