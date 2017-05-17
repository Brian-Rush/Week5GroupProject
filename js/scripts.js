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
// var entryTwo = new Entry() {
//   bookTitle: "Lost Cat"
//   bookAuthor: "JASON"
//   bookPage: 0
//   entryTags: ["fart","poop","wall"]
//   imageId: this.bookTitle + "-" + this.bookAuthor + "-2"
// }

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
// {
//   this.bookTitle: "book one";
//   this.bookAuthor: "tom";
//   this.commonEntryTags: ["Lost Cat", "JASON"];
//   this.includedImageIds: [];
//   this.entries: [entryOne, entryTwo];
// }

console.log(library.getAllTags());



console.log(library);

//Make new entry
// var entryOne = new Entry()
// this.bookTitle = "Lost Cat";
// this.bookAuthor = "JASON";
// this.bookPage = 0;
// this.entryTags = ["BOM BOM","Head Bonk","Frustration", "Frustrated","Wall","Head","Impact", "Twice","Repeated"];
// this.imageId = "";

// library.prototype.compareInputToTagArray(userInput) {
//   // for (i = 0; i < this.entryTags.length; i++) {
//     if (libraryOne.this.entryTags.includes(userInput)) {
//       getElementsByClassName('userInput')
//       // return userInput;
//     }
//   }
// }


// library.forEach(function(book) {
//   // console.log(store.name + " sells:");
//   book.entries.forEach(function(product) {
//     console.log(entries.entryTags);
//   });
//   console.log("\n");
// });


console.log(library.getAllEntries());

//USER LOGIC BELOW
$(document).ready(function(){
  // $("form#tag-search-form2").submit(function(event){
  // event.preventDefault();
    // event.preventDefault();
    $("#bookOneCoverImage").show();
    $("#bookTwoCoverImage").show();
    // $("").click(function(){
    //   $(".paper-girls").show();
    // });
    $('.carousel').carousel({
      interval: 30000
    })
    // $("#bookTwoCoverImage").click(function(){
    //   $(".the-photographer").show();
    //   $("#book-container").show(".cover");
    // });

// click on book 2
//book 2 is displayed above and hidden BELOW
//book 1 is hidden above and displayed BELOW

// On click of cover image, get id

$(".item").click(function(e) {
  console.log(e);
  console.log(e.target.id);


});

  // });
});
