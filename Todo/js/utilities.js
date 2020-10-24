// get list element
export function qs(selector){
  return document.querySelector(selector)

}

// Retrieve todo's from data store
export function getFromLS(key){}
// Save todo's to data store
export function saveToLS(Key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

//set a listener
export function setClick(selector, callback){
  qs(selector).addEventListener('touchend', (event) =>{
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
  if (input.value != '')
        addNewTodo(input.value);
    input.value = '';
}