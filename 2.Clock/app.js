let AmPm;
setInterval(() => {
  let time = new Date()
  let hourNow = time.getHours(), minNow = time.getMinutes(), secNow = time.getSeconds();

  if(hourNow >= 12) {
    AmPm = "PM";
  } else {
    AmPm = "AM";
  }
  
  if(hourNow == 0) {
    hourNow += 12;
  } else if(hourNow > 12) {
    hourNow -= 12;
  }

  document.getElementById("hourBox").innerText = `${(hourNow<10?"0":"")}${hourNow}`;
  document.getElementById("minBox").innerText = `${(minNow<10?"0":"")}${minNow}`;
  document.getElementById("secBox").innerText = `${(secNow<10?"0":"")}${secNow}`;
  document.getElementById("AmPmBox").innerText = AmPm;
  
}, 1000);