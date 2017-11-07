"use strict";

(function() {

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
    var testName = "NoteListView__returnsAString";
    assert.isAString(noteListView.html(), testName);
  };
  returnsAString();

  function stringContainsNotesData() {
    var testName = "NoteListView__stringContainsNotesData";
    assert.containsSubstring(noteListView.html(), noteText, testName);
  };
  stringContainsNotesData();

  function stringContainsUlTags() {
    var testName = "NoteListView_stringContainsUlTags";
    assert.containsSubstring(noteListView.html(), noteTextWithHTMLTags, testName);
  }
})();
