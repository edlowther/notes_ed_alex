"use strict";

(function(exports) {
  var NoteListView = function(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype.html = function() {
    var notes = this._noteList.notes();
    var intros = notes.map(function(note) {
      return note.intro();
    });
    var result = "<ul>";
    notes.forEach(function(note) {
      result += "<li><div><a href=\"#notes/" + note.id() + "\">"
      result += note.intro() + "</a></div></li>"
    });
    return result + "</ul>";
  }

  exports.NoteListView = NoteListView;
})(this);
