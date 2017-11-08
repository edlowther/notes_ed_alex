"use strict";

(function() {

  console.log("Testing NoteListView:")

  var noteText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
  var mockNote = {
    text: function() {
      return noteText;
    },
    intro: function() {
      return noteText.substring(0, 20) + "...";
    }
  }

  var mockNoteList = {
    notes: function() {
      return [mockNote];
    }
  }

  var noteListView = new NoteListView(mockNoteList);

  function returnsAString() {
    console.log(" it returns a string");
    assert.isAString(noteListView.html());
  };
  returnsAString();

  function stringContainsFirst20CharsOfNotesData() {
    console.log(" the string contains the first 20 characters of the note, followed by an ellipsis");
    var htmlString = noteListView.html();
    assert.containsSubstring(htmlString, noteText.substring(0, 20) + "...");
  };
  stringContainsFirst20CharsOfNotesData();

  function stringContainsUlTags() {
    console.log(" the string contains ul tags");
    var expectedHtml = '<ul><li><div>Lorem ipsum dolor si...</div></li></ul>'
    var htmlString = noteListView.html();
    assert.isSameAs(htmlString, expectedHtml);
  }
  stringContainsUlTags();



  var noteTextTwo = "The truly terrible thing is that everybody has their reasons"
  var mockNoteTwo = {
    text: function() {
      return noteTextTwo;
    },
    intro: function() {
      return noteTextTwo.substring(0, 20) + "...";
    }
  }

  var mockNoteListTwo = {
    notes: function() {
      return [mockNote, mockNoteTwo];
    }
  }

  var noteListViewTwo = new NoteListView(mockNoteListTwo);

  function returnsCorrectHtmlForMultipleNotes() {
    console.log(" the string works for more than one note");
    var expectedHtml = '<ul><li><div>Lorem ipsum dolor si...</div></li><li><div>The truly terrible t...</div></li></ul>'
    var htmlString = noteListViewTwo.html();
    assert.isSameAs(htmlString, expectedHtml);
  }
  returnsCorrectHtmlForMultipleNotes();
})();
