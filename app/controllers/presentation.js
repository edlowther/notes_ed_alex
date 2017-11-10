'use strict';

(function(exports) {

  var PresentationController = function(noteListModel, noteListView) {
    this._noteListModel = noteListModel;
    this._noteListView = noteListView;
  };

  PresentationController.prototype.displayList = function() {
    document.getElementById("list")
      .innerHTML = this._noteListView.html();
  };

  PresentationController.prototype.showNote = function() {
    var noteId = this.getNoteIdFromUrl();
    var note = this._noteListModel.getNoteById(noteId);
    var singleNoteView = new SingleNoteView(note);
    document.getElementById("note")
      .innerHTML = singleNoteView.html();
  };

  PresentationController.prototype.getNoteIdFromUrl = function() {
    return window.location.hash.split("#notes/")[1];
  };

  exports.PresentationController = PresentationController;
})(this);
