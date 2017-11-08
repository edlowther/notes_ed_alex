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
    var result = "<ul><li><div>";
    result += intros.join("</div></li><li><div>")
    return result + "</div></li></ul>";
  }

  exports.NoteListView = NoteListView;
})(this);
