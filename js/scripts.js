//BUSINESS LOGIC BELOW

//Library Object Constructor
// function Library() {
//   this.entriesArray = [];
//   this.booksArray = [];
// }
//
//Library Object to contain all books (and, therefore, entries)
// var library = [bookOne, bookTwo];

//Entry Object Constructor
function Entry(bookTitle, bookAuthor, bookPage, entryTags) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.bookPage = bookPage;
  this.entryTags = entryTags;
  // this.imageId = this.bookTitle + "-" + this.bookAuthor + imageNum;
}

var entryOne = new Entry("Lost Cat", "JASON", 0, ["bom bom","head", "wall"]);
console.log(entryOne);
alert(entryOne);

// var entryTwo = new Entry() {
//   bookTitle: "Lost Cat"
//   bookAuthor: "JASON"
//   bookPage: 0
//   entryTags: ["fart","poop","wall"]
//   imageId: this.bookTitle + "-" + this.bookAuthor + "-2"
// }

//Book Object Constructor
function Book() {
  this.bookTitle = "";
  this.bookAuthor = "";
  this.commonEntryTags = [];
  this.includedImageIds = [];
  this.entries = [];
}

// var bookOne = new Book() {
//   this.bookTitle: "book one";
//   this.bookAuthor: "tom";
//   this.commonEntryTags: ["bang", "gun", "chicken"];
//   this.includedImageIds: [];
//   this.entries: [];
// }

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


library.forEach(function(book) {
  // console.log(store.name + " sells:");
  book.entries.forEach(function(product) {
    console.log(entries.entryTags);
  });
  console.log("\n");
});



//USER LOGIC BELOW
$(document).ready(function(){
  $("form#tag-search-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#tag-search").val();
  });
});
