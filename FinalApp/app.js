// alarm sound
var alarmSound = new Audio();
alarmSound.src = 'mandalorian_theme.mp3';

function changeSound(){
  var select = document.getElementById('sound').value;
  alarmSound.src = select;
}

//main functions
function setAlarm(button){
  
  var date = document.getElementById('alarmDate').value;
var time = document.getElementById('alarmTime').value;
console.log(time);

var alarm = new Date(date+'T'+time);
var alarmTime = new Date(alarm.getFullYear(), alarm.getMonth(), alarm.getDate(), alarm.getHours(), alarm.getMinutes(), alarm.getSeconds(), alarm.getMilliseconds());
var details = {title:document.getElementById("title").value, notes:document.getElementById("notes").value, alarmTime:alarmTime};
var differenceinTime = alarmTime.getTime() - Date.now();
console.log('current date'+ Date.now());
console.log('alarm time'+ alarmTime.getTime());
console.log(differenceinTime);
if(alarmTime.getTime() < 0){
  alert('Time has already passed!');
  return;
}
var times = [];
if(localStorage.getItem('arrayTimes')!= null && localStorage.getItem('arrayTimes').length > 0){
  times = JSON.parse(localStorage.getItem('arrayTimes'));
  console.log(times);
} else{
  times = [];
}
times.push(details);
localStorage.setItem('arrayTimes', JSON.stringify(times));


setTimeout(initAlarm, differenceinTime);

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
