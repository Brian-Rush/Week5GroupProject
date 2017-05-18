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

library.booksArray.push(lostCat);

console.log(library.getAllTags());

console.log(library);


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
  console.log(clickedId);
  var targetClass = "." + clickedId;
  console.log(targetClass);
  $(".square").hide();
  $(targetClass).show();
});

  //MODAL STUFF
    // Get the modal
    // var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // $(".square").click(function() {
    //   // $(this).
    //   var modalImg = document.getElementsByClassName("square");
    //   modal.style.display = "block";
    //   modalImg.src = $(this).css('background-image');
    //   captionText.innerHTML = this.class;
    // })

    // $(".square").click(function() {
    //
    //   var modalImg = $(this);
    //   console.log(modalImg);
    //   var captionText = document.getElementById("caption");
    //   img.onclick = function(){
    //     console.log("click!");
    //       modal.style.display = "block";
    //       modalImg.src = "http://fillmurray.com/400/400";
    //       captionText.innerHTML = this.alt;
    //   }
    // });
    // // $(".square").click(function() {
    // //
    // //   var modalImg = $(this);
    // //   console.log(modalImg);
    // //   var captionText = document.getElementById("caption");
    // //   img.onclick = function(){
    // //     console.log("click!");
    // //       modal.style.display = "block";
    // //       modalImg.src = "http://fillmurray.com/400/400";
    // //       captionText.innerHTML = this.alt;
    // //   }
    // // });
    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }



  // });
// });



//Click listener, stores classes of clicked square image as array

$(".square").click(function(x) {
  // var displayTags = [];
  var clickedClasses = x.target.className;
  var displayTags = clickedClasses.split(" ")
  console.log(displayTags);

  //Output tags of clicked image to text.
  for (i = 1; i < displayTags.length; i++) {
    return displayTags[i];
  }


  });
});



//
