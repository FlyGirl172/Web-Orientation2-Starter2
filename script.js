const btn = document.querySelector ("#profile");
//The code below is what makes the button clickable and tells the computer what to display after the button  is clicked.
btn.addEventListener("click", function() {
  const heading= document.querySelector("h1")
  const subHeading = document.querySelector("h2")
  const listItems = document.querySelectorAll("li")
  heading.textContent = "Joanna is the BEST";
  subHeading.textContent =
   " Joanna Speaks Multiple Languages";
  listItems[0].textContent= "English";
  listItems[1].textContent = "Spanish";
  listItems[2].textContent = "French";
  listItems[3].textContent = "Italian";
  btn.remove();
  //Below is the beginning code of a Button that takes you back to the previous screen. This code is unfinished.
  const newBtn = document.createElement("button");
  newBtn.textContent = "Go Back";
  document.body.appendChild(newBtn);
})

