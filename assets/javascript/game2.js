let topics = ["dogs"];

let isAnimated = true;

//Gather text input
document.querySelector("#animalBtn").addEventListener("click", e => {
  //Prevent reload
  e.preventDefault();
  document.querySelector("#buttons").empty();
  //check for duplicate or not valid submission
  let animal = document.querySelector("#add-animal").value;
  topics.push(animal);
  makeBtns();
  //clear input
  document.querySelector("#add-animal").value = "";
});

//Function to make buttons
let makeBtns = () => {
  document.querySelector("#gif-view").innerHTML = "";
  topics.forEach((item, i) => {
    // let stillUrl =
    // let animatedUrl =
    let btnEl = document.createElement("button");
    btnEl.textContent = item;
    btnEl.className = "topicBtn";
    document.querySelector("#buttons").append(btnEl);
    // btnEl.setAttribute("src", still);
    // btnEl.setAttribute("data-still", still);
  });
};
