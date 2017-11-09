"use strict";

(function() {

  console.log("Testing NoteController:");

  var mockNoteListModel = {
    getNoteById: function() {
      return {
        text: function() {
          return "Favourite food: pesto";
        }
      }
    },
    addNote: function() {

    }
  }

  var mockNoteListView = {
    html: function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>";
    }
  }

  var mockNoteListViewTwo = {
    html: function() {
      return "<ul><li><div>Favourite drink: tea...</div></li></ul>";
    }
  }

  var noteController = new NoteController(mockNoteListModel, mockNoteListView);

  function canBeInstantiated() {
    console.log(" it returns a NoteController");
    assert.isANoteController(noteController);
  };
  canBeInstantiated();

  function putsCorrectHtmlOnPage() {
    console.log(" it puts the right HTML on the page for the list");
    var expectedHtml = "<ul><li><div>Favourite food: pesto</div></li></ul>";
    noteController.displayList();
    assert.elementContains("list", expectedHtml);
  };
  putsCorrectHtmlOnPage();

  function putsSingleNoteOnPage() {
    console.log(" it puts the right HTML for a single note from the list");
    var expectedHtml = "<div>Favourite food: pesto</div>";
    noteController.showNote(0);
    assert.elementContains("note", expectedHtml);
  };
  putsSingleNoteOnPage();

  function handlesFormSubmitCorrectly() {
    var noteController = new NoteController(mockNoteListModel, mockNoteListViewTwo);
    noteController.listenForNewNotes();
    document.getElementsByName("noteTextarea")[0].value = "Favourite drink: tea"
    var addNoteSubmit = document.getElementById("addNoteSubmit");
    addNoteSubmit.click();
    var expectedText = "Favourite drink: tea...";
    assert.elementContainsText("list", expectedText);
  }
  handlesFormSubmitCorrectly();


})();
