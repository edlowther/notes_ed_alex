"use strict";

(function(exports) {
  var Note = function(text) {
    this._text = text;
  }

  Note.prototype.text = function() {
    return this._text;
  }

  Note.prototype.intro = function() {
    return this._text.substring(0, 20) + "...";
  }

  exports.Note = Note;
})(this);
