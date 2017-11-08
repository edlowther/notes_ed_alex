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

  NoteListView.prototype.getNoteById = function(noteId) {
    var notes = this._noteList.notes();
    return notes.filter(function(note){
      return note.id() === parseInt(noteId);
    })[0];
  }

  exports.NoteListView = NoteListView;
})(this);
