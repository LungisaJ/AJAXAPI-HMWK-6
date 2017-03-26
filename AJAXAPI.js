
path - /v1/gifs/search
url - api.giphy.com
pub key - dc6zaTOxFJmzC

q = animals
limit = 10
http://giphy.com/search/funny-animals

images - http://media1.giphy.com/media/uSYQsJQWEv6O4/200.gif


var buttonsContainer = document.getElementById("buttons");
var myAnimals = ["dogs", "cats", "rabbit", "hamster", "skunk", "goldfish", "bird", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "guinea pigs", "chickens", "cappybara", "teacup pig", "serval", "frog"];

var buttons = document.getElementById("buttons");

buttons.addEventListener("click", function() {

var ourRequest = new animalList();
ourRequest.open('GET', 'myAnimals');
ourRequest.onload = function() {
	var myAnimals = JSON.parse(ourRequest.response);
	console.log(myAnimals[0]);
	renderHTML(myAnimals);

};
ourRequest.send();

});

function renderHTML(animals) {
	buttonsContainer.insertAdjecentHTML('beforeend', 'yes please');
	
}





/*var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=animals";

function setup() {
	noCanvas();
	var url = api + apiKey + query;
	loadJSON(url, gotData);
}

function gotData(data) {
	printIn(data.data[0].images.original.url);
}
