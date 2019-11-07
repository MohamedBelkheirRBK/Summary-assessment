

//function to add new list item
$('#add-btn').on('click', function(){

	//create new jquery object with li
	var newLi = $('<li></li>');


	var selectedColors = ''; //variable to to pick which text to choose from inside colors object based on checkbox selection
	var colors = {
		yellow: "yellow",
		blue: "blue",
		red: "red",
		yellowblue: "green",
		yellowred: "orange",
		bluered: "purple",
		yellowbluered: "black"
	};

	//based on checkboxes, we add the .yellow, .blue and .red classes, which when mixed, return the proper colors in CSS classes

	if($('#yellow').prop('checked')){
		newLi.addClass('yellow');
		selectedColors+='yellow';
	}
	if($('#blue').prop('checked')){
		newLi.addClass('blue');
		selectedColors+='blue';
	}

	if($('#red').prop('checked')){
		newLi.addClass('red');
		selectedColors+='red';
	}
	
	
	newLi.text(colors[selectedColors]);
	$('#ul').append(newLi);

})


//function to add remove button functionality

$('#rm-btn').on('click', function(){


	var selectedClasses = []; //an array keep all the colors we picked


	//for each checked box, add a class
	if($('#yellow').prop('checked')){

		selectedClasses.push('yellow');
	}
	if($('#blue').prop('checked')){

		selectedClasses.push('blue');
	}

	if($('#red').prop('checked')){

		selectedClasses.push('red');
	}
	
	//filter the list items by their class attribute, if it matches our string concated from our array, remove it
	$('li').filter(function(index){
		return $(this).attr('class') === selectedClasses.join(' ')
	}).remove();

})