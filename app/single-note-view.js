"use strict";

(function(exports) {
  var singleNoteView = function(note) {
    this._note = note
  }

  singleNoteView.prototype.html = function() {
    return '<div>' + this._note.text() + '</div>'
  }

  exports.singleNoteView = singleNoteView;
})(this);
