const vibrateBtn=document.getElementById("vibrate");
const msg = document.getElementById("message");


  function sayHello() {
      msg.innerText = "Hello! 🌸";
    }
vibrateBtn.onclick = sayHello;