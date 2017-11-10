'use strict';

var noteController = (function(exports) {

  exports.displayList = function() {
    document.getElementById("list")
      .innerHTML = this.noteListView.html();
  };

  exports.showNote = function() {
    var noteId = getNoteIdFromUrl();
    var note = this.noteListModel.getNoteById(noteId);
    var singleNoteView = new SingleNoteView(note);
    document.getElementById("note")
      .innerHTML = singleNoteView.html();
  };

  var getNoteIdFromUrl = function() {
    return window.location.hash.split("#notes/")[1];
  };

  return exports;
})(noteController);
