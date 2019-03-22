//array of buttons
const makeButtons = () => {
  let topics = ["dogs", "cats", "penguins"];
  //Empty buttons
  // document.querySelector("#buttons-view").empty();
  //Loop through array of items
  for (i = 0; i < topics.length; i++) {
    let btn = document.createElement("button");
    btn.className = "buttons";
    btn.textContent = topics[i];
    document.querySelector("#buttons").append(btn);
  }
};
makeButtons();

const searchGif = () => {
  //Prevent form from refreshing
  event.preventDefault();
  //Define animal to search through API
  let animal =
    document.querySelector("#animal").value.length >= 3
      ? document.querySelector("#animal").value
      : "Kittens";

  //Fetch
  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=dc6zaTOxFJmzC&limit=10`
  )
    .then(r => r.json())
    .then(r => {
      document.querySelector("#text").innerHTML = `<h4> ${animal} </h4>`;

      //iterates through elements
      r.data.forEach(gifObject => {
        //Create new image tag
        imgElem = document.createElement("img");
        //Define rating
        rating = gifObject.rating;
        //Animate or still variables
        let urlStill = gifObject.images.fixed_height_still.url;
        let urlAnimate = gifObject.images.fixed_height.url;

        //Display moving
        imgElem.setAttribute("src", urlAnimate);
        imgElem.setAttribute("className", "image");
        imgElem.setAttribute("data-animate", urlAnimate);
        imgElem.setAttribute("data-still", urlStill);
        imgElem.setAttribute("data-state", "animate");
        imgElem.addEventListener(
          "click",
          (pauseGif = () => {
            // let state = imgElem.setAttribute("date-state", "animate");
            // console.log("animate")
            let state = imgElem.dataset.state;
            console.log(state);
            if (state === "animate") {
              //set src to still image
              console.log("this is animated");
              imgElem.setAttribute("src", urlStill);
              imgElem.setAttribute("data-state", "still");
            } else if (state === "still") {
              //Set image back to animated
              console.log("this is still");
              imgElem.setAttribute("src", urlAnimate);
              imgElem.setAttribute("data-state", "animate");
            }
          })
        );
        document.querySelector("#gif-view").append(imgElem);
      });
    });
  //function for when image is clicked on to pause
};
