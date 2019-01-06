//create a "close" button and attach it to each list item
function newElement() {
  //add to the list of commitments
  var list = document.createElement("li");
  //input variable established
  var inputValue = document.getElementById("myInput").value;
  //create text node with specified text of input value
  var txtcontainer = document.createTextNode(inputValue);
  //create list item containing the text
  li.appendChild(txtcontainer);

  //if input is null
  if (inputValue === '') {
  //send alert
    alert("Goals will motivate you! Think of one if you can.");
  } else {
    //add input to list
    document.getElementById("myUL").appendChild(li);
  }

  //create button for the close
  var button = document.createElement("button");
  button.className = "close";

  //for all items in list
  for (i = 0; i < close.length; i++) {
    //close the item on click
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 

//obtain list of nodes
var nodelist = document.getElementsByTagName("li");
var i; //index
//loop through each item in the list
for (i = 0; i < nodelist.length; i++) {
  //create a button for close
  var button = document.createElement("button");
}

// click on close button to get rid of list item
//get close class
var close = document.getElementsByClassName("close");
var i;
//for each list item
for (i = 0; i < close.length; i++) {
  //close list item on click and run function
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//add a "checked" symbol when clicking on a list item
var list = document.querySelector('li');
//on click of list element, toggle the checklist tick!
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
//otherwise not initiated
}, false);



