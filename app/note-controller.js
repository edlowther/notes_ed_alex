'use strict';

(function(exports) {

  var NoteController = function(noteListView) {
    this._noteListView = noteListView;
    console.log(this._noteListView);
  };

  NoteController.prototype.exportHtml = function(id) {
    var element = document.getElementById(id);
    element.innerHTML = this._noteListView.html();
  };

  NoteController.prototype.showNote = function() {
    var noteId = this.getNoteIdFromUrl(); 
    var element = document.getElementById("note");
    var note = this._noteListView.getNoteById(noteId);
    console.log(noteId);
    var singleNoteView = new SingleNoteView(note);
    element.innerHTML = singleNoteView.html();
  };

  NoteController.prototype.makeUrlChangeShowNote = function() {
    console.log("makeUrlChangeShowNote called ")
    window.addEventListener("hashchange", this.showNote.bind(this));
  };

  NoteController.prototype.getNoteIdFromUrl = function() {
    return window.location.hash.split("#notes/")[1];
  };

  exports.NoteController = NoteController;
})(this);
