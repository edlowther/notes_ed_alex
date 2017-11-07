'use strict';

(function(exports) {

  var Notelist = function() {
    this._notes = [];
  };

  Notelist.prototype.addNote = function(text) {
    this._notes.push(new Note(text));
  };

  Notelist.prototype.notes = function() {
    return this._notes;
  }

  exports.Notelist = Notelist;
})(this);
