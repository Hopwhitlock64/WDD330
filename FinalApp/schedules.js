var arrayTimes = JSON.parse(localStorage.getItem('arrayTimes'));
console.log(localStorage.getItem('arrayTimes')); 
 var counter = 0;
for(let item of arrayTimes){
    var listItem = document.createElement('LI');
    var cancelButton = document.createElement('BUTTON');
    cancelButton.innerHTML = 'remove';
    var date = new Date(item.alarmTime);
    // converts time into 12hr format
var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am'; // includes am/pm
    hours = hours % 12; //converts to 12 hr format
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+ minutes : minutes; // formats minutes in 12 hr format
    listItem.innerHTML = "Title:    " + item.title + "<br>" + "Date:    " + date.getMonth() + " - " + date.getDate() + " - "  + date.getFullYear() 
    + "<br>" + "Time:    "+  hours + ':' + minutes + ' ' + ampm + "<br>" + "Notes:    " + item.notes;
    // listItem.innerHTML = "Title:    " + item.title + "<br>" + "Date:    " + date.getMonth() + " - " + date.getDate() + " - "  + date.getFullYear() +
    //  "<br> " + "Time:   " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() 
    //  + "<br> " + "Notes:  " + item.notes;
    listItem.appendChild(cancelButton);
    cancelButton.setAttribute("class", "removeBtn");
    cancelButton.setAttribute("id", counter + "removeAlarm");
    listItem.setAttribute("id", counter);
    document.getElementById('schedules').appendChild(listItem);
    document.getElementById(counter).addEventListener("click", cancelAlarm)
    counter++;
}

function cancelAlarm(event){
    // button.innerHTML = 'Set Alarm';
    // button.setAttribute('onclick', 'setAlarm(this);');
    var item = event.target.id.slice(0,-11);
    document.getElementById(item).remove();
    arrayTimes.splice(parseInt(item, 10), 1);
    localStorage.setItem('arrayTimes', arrayTimes);
  }

//   button.innerHTML = 'Cancel Alarm';
// button.setAttribute('onclick', 'cancelAlarm(this);');

//   button.innerHTML = 'Cancel Alarm';
// button.setAttribute('onclick', 'cancelAlarm(this);');

// arrayTimes.foreach((value)=> {
//     var listItem = document.createElement('LI');
//     document.getElementById('schedules').appendChild(listItem);
// })
// converts time into 12hr format
// var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var ampm = hours >= 12 ? 'pm' : 'am'; // includes am/pm
    // hours = hours % 12; //converts to 12 hr format
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? '0'+ minutes : minutes; // formats minutes in 12 hr format
    // listItem.innerHTML = "Title:    " + item.title + "<br>" + "Date:    " + date.getMonth() + " - " + date.getDate() + " - "  + date.getFullYear() 
    // + "<br>" + "Time:    "+  hours + ':' + minutes + ' ' + ampm + "<br>" + "Notes:    " + item.notes;