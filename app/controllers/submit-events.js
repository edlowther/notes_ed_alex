'use strict';

(function(exports) {

  var SubmitEventController = function(noteController, noteListModel) {
    this._noteController = noteController;
    this._noteListModel = noteListModel;
  };

  SubmitEventController.prototype.listenForNewNotes = function() {
    var form = document.getElementById("addNoteForm");
    var callback = function(event) {
      event.preventDefault();
      this._noteListModel.addNote(event.srcElement[0].value);
      this._noteController.displayList();
    }
    form.addEventListener("submit", callback.bind(this));
  };

  exports.SubmitEventController = SubmitEventController;
})(this);
