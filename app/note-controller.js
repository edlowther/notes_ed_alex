'use strict';

(function(exports) {

  var NoteController = function(noteListView) {
    this._noteListView = noteListView;
  };

  NoteController.prototype.exportHtml = function(id) {
    var element = document.getElementById(id);
    element.innerHTML = this._noteListView.html(); 
  }

  exports.NoteController = NoteController;
})(this);
