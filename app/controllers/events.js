var noteController = (function(exports) {

  exports.makeUrlChangeShowNote = function() {
    window.addEventListener("hashchange", this.showNote.bind(this));
  };

  exports.listenForNewNotes = function() {
    var form = document.getElementById("addNoteForm");
    var callback = function(event) {
      event.preventDefault();
      this.noteListModel.addNote(event.srcElement[0].value);
      this.displayList();
    }
    form.addEventListener("submit", callback.bind(this));
  };

  return exports;
})(noteController);
