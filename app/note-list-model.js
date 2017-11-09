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
  };

  Notelist.prototype.getNoteById = function(noteId) {
    var matchingNote = this._notes.filter(function(note){
      return note.id() === parseInt(noteId);
    })[0];
    return matchingNote;
  };

  exports.Notelist = Notelist;
})(this);
