'use strict';

(function(exports) {

  var EventController = function(noteController, noteListModel) {
    this._noteController = noteController;
    this._noteListModel = noteListModel;
  };

  EventController.prototype.makeUrlChangeShowNote = function() {
    window.addEventListener("hashchange", this._noteController.showNote.bind(this));
  };

  EventController.prototype.getNoteIdFromUrl = function() {
    return window.location.hash.split("#notes/")[1];
  };

  EventController.prototype.listenForNewNotes = function() {
    var form = document.getElementById("addNoteForm");
    var callback = function(event) {
      event.preventDefault();
      this._noteListModel.addNote(event.srcElement[0].value);
      this._noteController.displayList();
    }
    form.addEventListener("submit", callback.bind(this));
  };

  exports.EventController = EventController;
})(this);
