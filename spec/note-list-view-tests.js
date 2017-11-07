"use strict";

(function() {

  console.log("Testing NoteListView:")

  var noteText = 'Note number one';
  var noteTextWithHTMLTags = '<ul><li><div>Note number one</div></li></ul>'

  var mockNote = {
    text: function() {
      return noteText;
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

  function stringContainsNotesData() {
    console.log(" the string contains the notes data");
    var htmlString = noteListView.html();
    assert.containsSubstring(htmlString, noteText);
  };
  stringContainsNotesData();

  function stringContainsUlTags() {
    console.log(" the string contains ul tags");
    var htmlString = noteListView.html();
    assert.isSameAs(htmlString, noteTextWithHTMLTags);
  }
  stringContainsUlTags();
})();
