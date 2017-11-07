"use strict";

(function(exports) {
  var NoteListView = function(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype.html = function() {
    var notes = this._noteList.notes();

    var result = "";
    for (var i = 0; i < notes.length; i++) {
      var note = notes[i];
      result += note.text();
    }
    return result;
  }

  exports.NoteListView = NoteListView;
})(this);
