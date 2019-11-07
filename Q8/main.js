
//set variables to reference the DOM objects we want
var input = document.getElementById('input');
var color = document.getElementById('color');
var button = document.getElementById('add-btn');
var ul = document.getElementById('ul');

var acceptableColors = ['red', 'yellow', 'blue'];
//define the on click behaviour of the button
button.onclick = function(){
	if(acceptableColors.indexOf(color.value)>=0){ //check if the inputted color is one of our accepted colors
	
		var newLi = document.createElement('li'); //create a new list item HTML object
		newLi.className = color.value; //set the class to the inputted color
		newLi.textContent = input.value; //set the content to the input text
		ul.append(newLi); //append the new list item to our unordered list element
	}
}