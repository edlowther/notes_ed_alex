"use strict";

(function(exports) {
  var SingleNoteView = function(note) {
    this._note = note
  }

  SingleNoteView.prototype.html = function() {
    return '<div>' + this._note.text() + '</div>'
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
