var ac = {
    init : function () {
    // ac.init() : start the alarm clock
  
  
      // The alarm time - Hr, Min, Sec
      ac.thr = ac.createSel(23);
      document.getElementById("alarm-h").appendChild(ac.thr);
      ac.thm = ac.createSel(59);
      document.getElementById("alarm-m").appendChild(ac.thm);
      ac.ths = ac.createSel(59);
      document.getElementById("alarm-s").appendChild(ac.ths);
  
      // alarm - Set, reset
      ac.alarmSet = document.getElementById("alarmSet");
      ac.alarmSet.addEventListener("click", ac.set);
      ac.alarmReset = document.getElementById("alarmReset");
      ac.alarmReset.addEventListener("click", ac.reset);
  
      // The alarm sound
      ac.sound = document.getElementById("alarm-sound");
  
      // Start the clock
      ac.alarm = null;
      setInterval(ac.tick, 1000);
    },
  
    createSel : function (max) {
    // createSel() : support function - creates a selector for hr, min, sec
  
      var selector = document.createElement("select");
      for (var i=0; i<=max; i++) {
        var opt = document.createElement("option");
        i = ac.padzero(i);
        opt.value = i;
        opt.innerHTML = i;
        selector.appendChild(opt);
      }
      return selector
    },
  
    padzero : function (num) {
    // ac.padzero() : support function - pads hr, min, sec with 0 if <10
  
      if (num < 10) { num = "0" + num; }
      else { num = num.toString(); }
      return num;
    },
  
    tick : function () {
    // ac.tick() : update the current time
  
      // Current time
      var now = new Date();
      var hr = ac.padzero(now.getHours());
      var min = ac.padzero(now.getMinutes());
      var sec = ac.padzero(now.getSeconds());
  
      // Update current clock
      ac.chr.innerHTML = hr;
      ac.cmin.innerHTML = min;
      ac.csec.innerHTML = sec;
  
      // Check and sound alarm
      if (ac.alarm != null) {
        now = hr + min + sec;
        if (now == ac.alarm) {
          if (ac.sound.paused) {
            ac.sound.play();
          }
        }
      }
    },
  
    set : function () {
    // ac.set() : set the alarm
  
      ac.alarm = ac.thr.value + ac.thm.value + ac.ths.value;
      ac.thr.disabled = true;
      ac.thm.disabled = true;
      ac.ths.disabled = true;
      ac.alarmSet.disabled = true;
      ac.alarmReset.disabled = false;
    },
  
    reset : function () {
    // ac.reset() : reset the alarm
  
      if (!ac.sound.paused) {
        ac.sound.pause();
      }
      ac.alarm = null;
      ac.thr.disabled = false;
      ac.thm.disabled = false;
      ac.ths.disabled = false;
      ac.alarmSet.disabled = false;
      ac.alarmReset.disabled = true;
    }
  };
  
  // INIT - RUN ALARM CLOCK
  window.addEventListener("load", ac.init);