"use strict";

(function() {

  console.log("Testing NoteController:");

  var mockNoteListView = {
    html: function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>";
    },
    getNoteById: function() {
      return {
        text: function() {
          return "Favourite food: pesto";
        }
      } 
    }
  }

  var noteController = new NoteController(mockNoteListView);

  function canBeInstantiated() {
    console.log(" it returns a NoteController");
    assert.isANoteController(noteController);
  };
  canBeInstantiated();

  function putsCorrectHtmlOnPage() {
    console.log(" it puts the right HTML on the page for the list");
    var expectedHtml = "<ul><li><div>Favourite food: pesto</div></li></ul>";
    noteController.exportHtml("app");
    assert.elementContains("app", expectedHtml);
  };
  putsCorrectHtmlOnPage();

  function putsSingleNoteOnPage() {
    console.log(" it puts the right HTML for a single note from the list");
    var expectedHtml = "<div>Favourite food: pesto</div>";
    noteController.showNote(0);
    assert.elementContains("note", expectedHtml);
  };
  putsSingleNoteOnPage();



})();
