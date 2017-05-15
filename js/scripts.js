//BUSINESS LOGIC BELOW

//Entry Object Constructor
function Entry() {
  this.bookTitle = "";
  this.bookAuthor = "";
  this.bookPage = 0;
  this.entryTags = [];
  this.imageId = "";
}

//Book Object Constructor
function Book() {
  this.bookTitle = "";
  this.bookAuthor = "";
  this.commonEntryTags = [];
  this.includedImageIds = [];
}

//Make new entry
var entryOne = new Entry()
this.bookTitle = "Lost Cat";
this.bookAuthor = "JASON";
this.bookPage = 0;
this.entryTags = ["BOM BOM","Head Bonk","Frustration", "Frustrated","Wall","Head","Impact", "Twice","Repeated"];
this.imageId = "";




//USER LOGIC BELOW
$(document).ready(function(){
  $("#search").submit(function(event){
    event.preventDefault();

  });
});
