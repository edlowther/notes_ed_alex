"use strict";

(function(exports) {
  var Note = function(text) {
    this._text = text;
  }

  Note.prototype.text = function() {
    return this._text;
  }

  exports.Note = Note;
})(this);
