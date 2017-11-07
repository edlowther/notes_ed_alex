"use strict";

(function() {

  console.log("Testing NoteController:");

  var mockNoteListView = {
    html: function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>";
    }
  }

  var noteController = new NoteController(mockNoteListView);

  function canBeInstantiated() {
    console.log(" it returns a NoteController");
    assert.isANoteController(noteController);
  };
  canBeInstantiated();

  function putsCorrectHtmlOnPage() {
    console.log(" it puts the right HTML on the page");
    var expectedHtml = "<ul><li><div>Favourite food: pesto</div></li></ul>";
    noteController.exportHtml("app"); 
    assert.elementContains("app", expectedHtml);
  };
  putsCorrectHtmlOnPage();
  //
  // function stringContainsUlTags() {
  //   console.log(" the string contains ul tags");
  //   var htmlString = noteListView.html();
  //   assert.isSameAs(htmlString, noteTextWithHTMLTags);
  // }
  // stringContainsUlTags();
})();
