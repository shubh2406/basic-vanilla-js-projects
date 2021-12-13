// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //console.log(e.currentTarget);
    // property) Event.currentTarget: EventTarget
    // Returns the object whose event listener's callback is currently being invoked.

    const classes = e.target.classList;
    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    // Here .contains is used to check whether the classes contains a specified class or not  

    if(count < 0){
        value.style.color = "red";
    }else if(count > 0){
        value.style.color = "green";
    }else{
        value.style.color = "black";
    }

    value.textContent = count;
  });
});
