//array of buttons
let topics = ["dogs", "cats", "penguins"];

//Fetch
fetch(
  // let animal = this.attr("data-name")
  "https://api.giphy.com/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC&limit=10"
)
  .then(r => r.json())
  .then(r => {
    console.log(
      r.data.forEach(gifObject => {
        //Create new image tag
        imgElem = document.createElement("img");
        //Define rating
        rating = gifObject.rating;
        //Animate or still variables
        let urlStill = gifObject.images.fixed_height_still.url;
        let urlAnimate = gifObject.images.fixed_height.url;
        let ratingPtag = (document.createElement("p").innerHTML = "Rating is ");

        //Display non moving

        imgElem.setAttribute("src", urlAnimate);
        imgElem.setAttribute("data-animate", urlAnimate);
        imgElem.setAttribute("data-still", urlStill);
        imgElem.setAttribute("data-state", "animate");
        document.querySelector("#gif-view").append(imgElem, ratingPtag);
      })
    );
  });
