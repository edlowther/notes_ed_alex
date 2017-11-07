"use strict";

(function(exports) {
  var Note = function(text) {
    this._text = text + " error";
  }

  Note.prototype.text = function() {
    return this._text;
  }

  exports.Note = Note;
})(this);
