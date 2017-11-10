'use strict';

(function(exports) {

  var NoteController = function(noteListModel, noteListView) {
    this._noteListModel = noteListModel;
    this._noteListView = noteListView;
    this._presentationController = new PresentationController(noteListModel, noteListView);
    this._submitEventController = new SubmitEventController(this, noteListModel);
  };

  NoteController.prototype.makeUrlChangeShowNote = function() {
    window.addEventListener("hashchange", this.showNote.bind(this));
  };

  NoteController.prototype.displayList = function() {
    this._presentationController.displayList();
  };

  NoteController.prototype.showNote = function() {
    this._presentationController.showNote();
  };

  NoteController.prototype.listenForNewNotes = function() {
    this._submitEventController.listenForNewNotes();
  };

  exports.NoteController = NoteController;
})(this);
