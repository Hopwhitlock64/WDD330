// alarm sound
var alarmSound = new Audio();
alarmSound.src = document.getElementById('sound');

//main functions
function setAlarm(button){
  var date = document.getElementById('alarmDate').value;
var time = document.getElementById('alarmTime').value;
console.log(time);

var alarm = new Date(date+'T'+time);
var alarmTime = new Date(alarm.getFullYear(), alarm.getMonth(), alarm.getDate(), alarm.getHours(), alarm.getMinutes(), alarm.getSeconds(), alarm.getMilliseconds());
var differenceinTime = alarmTime.getTime() - Date.now();
console.log('current date'+ Date.now());
console.log('alarm time'+ alarmTime.getTime());
console.log(differenceinTime);
if(alarmTime.getTime() < 0){
  alert('Time had alread passed!');
  return;
}
var times;
if(times = localStorage.getItem('arrayTimes')){
  console.log(times);
} else{
  times = [];
}
times.push(alarmTime);
JSON.stringify(localStorage.setItem('arrayTimes', times));


setTimeout(initAlarm, differenceinTime);

button.innerHTML = 'Cancel Alarm';
button.setAttribute('onclick', 'cancelAlarm(this);');

}
function cancelAlarm(button){
  button.innerHTML = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);');
}

function initAlarm(){
  alarmSound.play();
  document.getElementById('alarmOptions').style.display = '';
  console.log("time");

}
function stopAlarm(){
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmOptions').style.display = 'none';
}

function snooze(){
  stopAlarm();
  setTimeout(initAlarm, 36000); 
}
