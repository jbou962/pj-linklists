var inputTitle = document.getElementById("website-title-input");
var inputUrl = document.getElementById("website-url-input");
var enterButton = document.getElementById("enter-button");

var readCardButton = document.querySelectorAll(".read-button");
var deleteCardButton = document.querySelectorAll(".delete-button")

enterButton.addEventListener("click", function(event){
  event.preventDefault();
  addBookMark();
  console.log(inputTitle.value);
  console.log(inputUrl.value);
});
//HOW TO RETURN SOMTHING BACK USING THE QUERY SELCTOR ALL
// readCardButton.addEventListener("click", function(event){
//   event.preventDefault();
// });

// deleteCardButton.addEventListener("click", function(event){
//   event.preventDefault();
// });
function addBookMark(){
  var title = inputTitle.value;
  var url = inputUrl.value;
  var bookMarkContainer = document.getElementById("right-side");
  var bookMarks = document.createElement("div");

  bookMarkContainer.insertBefore(bookMarks, bookMarkContainer.firstChild);
  return bookMarks.innerHTML = `<div class="web-title-cards">
    <h2>${title}</h2><hr>
    <a  href="${url}">${url}</a><hr>
    <button class="read-button">Read</button>
    <button class="delete-button">Delete</button>
  </div>`;
}
