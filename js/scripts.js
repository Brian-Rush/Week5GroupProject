//BUSINESS LOGIC BELOW
//just testing if pushing a branch will create that branch

//Library Object Constructor
function Library() {
  this.booksArray = [];
  this.entriesArray = [];
}

//Book Object Constructor
function Book(bookTitle, bookAuthor, commonEntryTags, includedImageIds, entries) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.commonEntryTags = commonEntryTags;
  this.includedImageIds = includedImageIds;
  this.entries = entries;
}

//Entry Object Constructor
function Entry(entryName, bookTitle, bookAuthor, bookPage, entryTags) {
  this.entryName = entryName;
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.bookPage = bookPage;
  this.entryTags = entryTags;
  // this.imageId = this.bookTitle + "-" + this.bookAuthor + imageNum;
}

Library.prototype.getAllEntries=function(){
  var allEntries = []
  this.booksArray.forEach(function(book){
    console.log(book)
    book.entries.forEach(function(entry){
      allEntries.push(entry);
    })
  })
  return allEntries;
}
Library.prototype.getAllTags=function(){
  var allTags = []
  this.booksArray.forEach(function(book){
    book.entries.forEach(function(entries){
      entries.entryTags.forEach(function(entry){
        allTags.push(entry);
      })
    })
  })
  return allTags;
}
//

var entryOne = new Entry("entryOne","Lost Cat", "JASON", 0, ["bom bom","head", "wall"]);
console.log(entryOne);

var entryTwo = new Entry("entryTwo", "Lost Cat", "JASON", 0, ["bom bom", "head", "talk"]);
console.log(entryTwo);

var lostCat = new Book("Lost Cat", "JASON", ["Lost Cat", "JASON"], [], [entryOne, entryTwo])

//Library Object to contain all books (and, therefore, entries)
var library = new Library();

// library.booksArray.push(lostCat);
//
// console.log(library.getAllTags());
//
// console.log(library);


console.log(library.getAllEntries());

//USER LOGIC BELOW
$(document).ready(function(){
    $(".cover").show();
    $('.carousel').carousel({
      interval: 30000
    })
// On click of cover image, get id
$(".item").click(function(e) {
  var clickedId = e.target.id;
  // console.log(clickedId);
  var targetClass = "." + clickedId;
  // console.log(targetClass);
  $(".square-outline").hide();
  $(targetClass).show();
});
  //MODAL STUFF
  // Get the modal
  var modal = document.getElementById('myModal');
// // Get the image and insert it inside the modal

$('.square').click(function(clickedSquare) {
  var clickedClasses = clickedSquare.target.className;
  var displayTags = clickedClasses.split(" ")
  //Output tags of clicked image to text.
  var outputTags = function(e) {
    $("#caption").empty();
    for (var i = 2; i < displayTags.length; i++) {
      var individTag = ("<span class='clickableTag' id=" + displayTags[i] + ">" + displayTags[i] + "</span>" + ", ")
        $("#caption").append(individTag);
    }
  }

  outputTags();

  var modalImg = document.getElementById("lightbox-image");
  var captionText = document.getElementById("caption");
  var clickedSource = clickedSquare.target.src;
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.display = "block";
  // captionText.innerHTML = displayTags;
  // clickedSource;
  //img/Paper-Girls-bang

  })

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

  $(".item").click(function(e) {
    var clickedId = e.target.id;
    console.log(clickedId);
    var targetClass = "." + clickedId;
    console.log(targetClass);
    $(".square").hide();
    $(targetClass).show();
    });

    $(document).on("click", "#submit_btn", function(event){
    alert( "GO" );
});

  $(document).on("click", ".clickableTag", function(e) {
    var clickedTag = e.target.id;
    console.log(clickedTag);
    var targetTagClass = "." + clickedTag;
    console.log(targetTagClass);
    $(".square-outline").hide();
    modal.style.display = "none";
    // $(".square").hide();
    $(targetTagClass).parent().show();
    $(targetTagClass).show();

  });
  // $(".clickableTag").click(function(e) {
  //   var clickedTag = e.target.id;
  //   console.log(clickedTag);
  //   var targetTagClass = "." + clickedTag;
  //   console.log(targetTagClass);
  //   modal.style.display = "none";
  //   $(".square").hide();
  //   $(targetTagClass).show();
  // });

});
