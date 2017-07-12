var inputTitle = document.getElementById("website-title-input");
var inputUrl = document.getElementById("website-url-input");
var enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", function(e){
  e.preventDefault();
  addBookMark();
  console.log(inputTitle.value);
  console.log(inputUrl.value);
  updateText();
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
    <a href="${url}" target="_blank">${url}</a><hr>
    <button class="read-button">Read</button>
    <button class="delete-button">Delete</button>
  </div>`;
  };
};

function updateText () {
  var currentCount = document.getElementById("counter-numeric");
  var numItems = $('.web-title-cards').length;
  currentCount.innerText = numItems;

  var readCount = document.getElementById("read-span");
  var readItems = $('.web-title-cards.card-read').length;
  readCount.innerText = readItems;

  var unreadCount = document.getElementById("unread-span");
  var unreadItems = $('.web-title-cards').length;
  unreadCount.innerText = unreadItems - readItems;
};

$("div").on("click", ".delete-button", function(e) {
    e.preventDefault();
    $(this).parent().remove();
    updateText ();
});

$("div").on("click", ".read-button", function(e) {
    e.preventDefault();
    $(this).toggleClass("read");
    $(this).parent().toggleClass("card-read");
    $(this).toggleClass("card-read");
    $(this).siblings().toggleClass("card-read");
    updateText();
  });

$('#website-url-input').on('keyup', function() {
  var input=$(this);
  if
  (input.val().substring(0,0)==''){input.val('http://'+input.val().substring(7));} else {
  }
});
