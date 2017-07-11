var inputTitle = document.getElementById("website-title-input");
var inputUrl = document.getElementById("website-url-input");
var enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", function(event){
  event.preventDefault();
  addBookMark();
  console.log(inputTitle.value);
  console.log(inputUrl.value);
});

function addBookMark(){

  var title = inputTitle.value;
  var url = inputUrl.value;
  var bookMarkContainer = document.getElementById("right-side");
  var bookMarks = document.createElement("div");

  if (title === '' || url === '') {
    alert("Enter a website title and url.")
  } else {
  bookMarkContainer.insertBefore(bookMarks, bookMarkContainer.firstChild);
  return bookMarks.innerHTML = `<div class="web-title-cards">
    <h2>${title}</h2><hr>
    <a href="${url}">${url}</a><hr>
    <button class="read-button">Read</button>
    <button class="delete-button">Delete</button>
  </div>`;
  }
};

$("div").on("click", ".delete-button", function(e) {
    e.preventDefault();
    $(this).parent().remove();
});

$("div").on("click", ".read-button", function(e) {
    e.preventDefault();
    $(this).toggleClass("read");
  });
