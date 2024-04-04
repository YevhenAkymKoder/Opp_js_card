console.log("It's working!");

// Create a variable that saves data. The data is getting an element from the
// HTML document with an ID
const cardContainer = document.querySelector("#card");
console.log(cardContainer);

// Create a variable that saves data. The data is creating a new Html element. 
const h2Title = document.createElement("h2");

// Giving our new variable element to be displayed.
h2Title.textContent = "HAALAND";

console.log(h2Title);

// Appending the HTML element we created in JS to our HTML document. 
cardContainer.appendChild(h2Title);



// Create a variable that saves data. The data is getting an element from the
// HTML document with an ID
const cardContainer_new = document.querySelector("#card-new");
console.log(cardContainer_new);

// Create a variable that saves data. The data is creating a new Html element. 
const h2Title_new = document.createElement("h2");

// Giving our new variable element to be displayed.
h2Title_new.textContent = "Player Name";
console.log(h2Title_new);

// Appending the HTML element we created in JS to our HTML document. 
cardContainer_new.appendChild(h2Title_new);

// Changing title
function changeTitle() {
    // Gives text from input
    var newTitle = document.getElementById("newTitleInput").value;

    // Changing text
    h2Title_new.textContent = newTitle;
}



function createImage() {
    // Gives selected image and entered text
    var selectedImage = document.getElementById("imageSelect").value;
    var text = document.getElementById("textInput").value;
  
    // Create new image element
    var img = document.createElement("img");
    img.src = selectedImage;
  
    // Create new text element
    var textNode = document.createElement("h3");
    textNode.textContent = "Player Name: " + text; // Add "Name:" + text from input
  
    // Create new element div and add created text with image
    var container = document.createElement("div");
    container.appendChild(textNode);
    container.appendChild(img);
    
  
    // Add created elements to DIV for image
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = '';
    imageContainer.appendChild(container);
  }