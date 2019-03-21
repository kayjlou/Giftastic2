//array of buttons
let topics = ["dogs", "cats", "penguins"];

//Function to display gify url into the html

let animal = this.attr("data-name");

let queryURL = `https://api.giphy.com/v1/gifs/search?q="{animal}&api_key=dc6zaTOxFJmzC&limit=10`;

//Fetch
fetch(
  'https://api.giphy.com/v1/gifs/search?q="{animal}&api_key=dc6zaTOxFJmzC&limit=10'
)
.then(r => {
  r.json())
})
