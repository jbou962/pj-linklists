var inputTitle = document.getElementById("website-title-input");
var inputUrl = document.getElementById("website-url-input");
var enterButton = document.getElementById("enter-button");

var readCardButton = document.querySelectorAll(".read-button");
var deleteCardButton = document.querySelectorAll(".delete-button")

enterButton.addEventListener("click", function(event){
  event.preventDefault();
  console.log(inputTitle.value);
  console.log(inputUrl.value);
});
//HOW TO RETURN SOMTHING BACK USING THE QUERY SELCTOR ALL
readCardButton.addEventListener("click", function(event){
  event.preventDefault();
});

deleteCardButton.addEventListener("click", function(event){
  event.preventDefault();
});
function UrlCard(title, url){
  this.title = title
  this.url = url
  return 
};

function addCard()
