let topics = ["dogs"];

let isAnimated = true;

//Gather text input
document.querySelector("#submit").addEventListener("click", e => {
  //Prevent reload
  e.preventDefault();
  //check for duplicate or not valid submission

  //clear input
  document.querySelector("#button-input").value = "";
});

//Function to make buttons
let makeBtns = () => {
  document.querySelector("#buttons").innerHTML = "";
  topics.forEach((item, i) => {
    let btnEl = document.createElement("button");
    btnEl.textContent = item;
    btnEl.className = "topicBtn";
    btnEl.setAttribute();
  });
};
