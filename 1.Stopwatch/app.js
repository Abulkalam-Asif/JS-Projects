let myInterval = null;
let startFuncRunning = false;

function timerFunc() {
  let mins = document.getElementById("mins");
  let secs = document.getElementById("secs");
  let minsToNum = Number(mins.innerText);
  let secsToNum = Number(secs.innerText);
  if(secsToNum <= 58) {
    secs.innerText = `${addZero(secsToNum)}${String(secsToNum + 1)}`;
  } else {
    mins.innerText = `${addZero(minsToNum)}${String(minsToNum + 1)}`;
    secs.innerText = "00";
  }
};

function startFunc() {
  if(startFuncRunning == false) {
    myInterval = setInterval(timerFunc, 1000);
    startFuncRunning = true;
  }
}
function stopFunc() {
  if(myInterval) {
    clearInterval(myInterval);
  }
  myInterval = null;
  startFuncRunning = false;
}
function resetFunc() {
  stopFunc();
  document.getElementById("mins").innerText = "00";
  document.getElementById("secs").innerText = "00";
}

function addZero(num) {
  if(num > 8) {
    return "";
  } else {
    return "0";
  }
}