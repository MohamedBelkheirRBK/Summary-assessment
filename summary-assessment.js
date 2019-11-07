// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  //we solve this by first splitting the string into an array of words, splitting at the empty space between them
  //then we use the map function on the returned array to make a copy that contains the length of each element

  function wordLengths(str) {
      return str.split(' ').map(function(element){
        return element.length;
      }) 
  }
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
  //Solved this by splitting the string into characters, and then using the reduce function, starting the acculumator with 0
  //each time the element in the split array is equal to the inputed character we increment the accumulator

  function countOccurrences(string, character) {
      return string.split('').reduce(function(acc, char){
        if(char === character)
          acc++;
        return acc;
      }, 0)
  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  //Again, split the array, and then using filter, we check for the elements that satisfy our > 3 condition

  function wordsLongerThanThree(str) {
      return str.split(' ').filter(function(element){
        return element.length>3;
      })
  }
  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  function repeatString(str, count) { 
    if(count<= 0)
      return '';
    return  str+ repeatString(str, count-1)
  } 
   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  // Write your code here .....


  function makePizza(crust, size, numberOfSlice){
    var ingredients = ['tomato', 'sauce', 'cheese'];
    var cooked = false; //boolean to check if the pizza was already cooked or not
    return {

      addIngredients: function(ingredient){
        ingredients.push(ingredient);
      },

      displayIngredients: function(){
        return ingredients.join(',');
      },

      bakePizza: function(){
        if(cooked)  //make sure pizza is not already cooked before
          return "Your pizza is already baked!"
        setTimeout(function(){
          cooked = true; //if it's not, set cooked status to true
           console.log(`Your ${crust} ${size} ${numberOfSlice} slice pizza is done`)
        },2000)
      },

      eatSlice: function(){
        if(!cooked) //can't allow any food poisoning here
          return "you can't eat a raw pizza!"
        if(numberOfSlice>0) //make sure we actually have pizza to eat
          return `You took a slice from the pizza, you have ${--numberOfSlice} left!`
        return 'Oh no, no more pizza!'
      }

    }

  }

  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  //how would I solve this without reading though
  // Write your code here .....
  

  //code explains itself here

  function ReadingList(){
    return {
      read: 0,
      unRead: 0,
      toRead: [],
      currentRead: '',
      readBooks: [],

      addBook: addBook,
      finishCurrentBook: finishCurrentBook
    }
  }


  function addBook(book){
    this.unRead++;
    this.toRead.push(book);
  }

  function finishCurrentBook(){
    if(this.currentRead!==''){ //if there is an actual book we're currently reading
      this.read++;             //increase the read counter
      this.readBooks.push(this.currentRead);  //and book the book we were reading to the read books array
    }
    if(this.unRead>0){ //check if we actually have books to read
      this.currentRead = this.toRead.shift(); //take the first book in the queue of toread books and place it in the currentRead function
      this.unRead--; //decrement the unread counter
    }

  }



  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....
  
  function makeSafe(storageSize){
    var sizes = {
      'small': 1,
      'medium': 2,
      'big': 3,
    };
    var storage = [];

    return function(item, size){

      if (storageSize-sizes[size]>=0){
        storage.push(item);
        storageSize-= sizes[size];
      }

      else {
        return "it won't fit!";
      }


      if(storageSize === 0)
        return storage.join(' ');

    }
  }


  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  
  // 2- In OOP, what does "this" refer to ?
  
  // 3- What is jQuery?
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
      }
