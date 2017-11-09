"use strict";

(function(exports) {
  var noteCounter = 0;

  var Note = function(text) {
    this._text = text;
    this._id = noteCounter;
    noteCounter++;
  }

  Note.prototype.id = function() {
    return this._id;
  }

  Note.prototype.text = function() {
    return this._text;
  }

  Note.prototype.intro = function() {
    return this._text.substring(0, 20) + "...";
  }

  exports.Note = Note;
})(this);
