//array of buttons
let topics = ["dogs", "cats", "penguins"];

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
        // let ratingTag = (document.createElement(
        //   "span"
        // ).innerHTML = `Rating is ${rating}`);

        //Display non moving

        imgElem.setAttribute("src", urlAnimate);
        imgElem.setAttribute("data-animate", urlAnimate);
        imgElem.setAttribute("data-still", urlStill);
        imgElem.setAttribute("data-state", "animate");
        document.querySelector("#gif-view").append(imgElem);
      });
    });
};
