'use strict';

(function(exports) {

  var Notelist = function(noteClass = Note) {
    this._notes = [];
    this._noteClass = noteClass;
  };

  Notelist.prototype.addNote = function(text) {
    this._notes.push(new this._noteClass(text));
  };

  Notelist.prototype.notes = function() {
    return this._notes;
  }

  exports.Notelist = Notelist;
})(this);
