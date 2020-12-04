var arrayTimes = JSON.parse(localStorage.getItem('arrayTimes'));
console.log(localStorage.getItem('arrayTimes')); 
 
for(let item of arrayTimes){
    var listItem = document.createElement('LI');
    var cancelButton = document.createElement('BUTTON');
    cancelButton.innerHTML = 'cancel';
    listItem.innerHTML = item;
    listItem.appendChild(cancelButton);
    document.getElementById('schedules').appendChild(listItem);
}

function cancelAlarm(button){
    button.innerHTML = 'Set Alarm';
    button.setAttribute('onclick', 'setAlarm(this);');
  }

//   button.innerHTML = 'Cancel Alarm';
// button.setAttribute('onclick', 'cancelAlarm(this);');

//   button.innerHTML = 'Cancel Alarm';
// button.setAttribute('onclick', 'cancelAlarm(this);');

// arrayTimes.foreach((value)=> {
//     var listItem = document.createElement('LI');
//     document.getElementById('schedules').appendChild(listItem);
// })