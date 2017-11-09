'use strict';

(function(exports) {

  var NoteController = function(noteListModel, noteListView) {
    this._noteListModel = noteListModel;
    this._noteListView = noteListView;
  };

  NoteController.prototype.displayList = function() {
    document.getElementById("list")
      .innerHTML = this._noteListView.html();
  };

  NoteController.prototype.showNote = function() {
    var noteId = this.getNoteIdFromUrl();
    var note = this._noteListModel.getNoteById(noteId);
    var singleNoteView = new SingleNoteView(note);
    document.getElementById("note")
      .innerHTML = singleNoteView.html();
  };

  NoteController.prototype.makeUrlChangeShowNote = function() {
    window.addEventListener("hashchange", this.showNote.bind(this));
  };

  NoteController.prototype.getNoteIdFromUrl = function() {
    return window.location.hash.split("#notes/")[1];
  };

  NoteController.prototype.listenForNewNotes = function() {
    var form = document.getElementById("addNoteForm");
    var callback = function(event) {
      event.preventDefault();
      this._noteListModel.addNote(event.srcElement[0].value);
      this.displayList();
    }
    form.addEventListener("submit", callback.bind(this));
  };

  exports.NoteController = NoteController;
})(this);
