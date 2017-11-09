'use strict';

(function() {

  var noteListModel = new Notelist();
  var noteListView = new NoteListView(noteListModel);
  var noteController = new NoteController(noteListModel, noteListView);

  noteController.displayList();
  noteController.makeUrlChangeShowNote();
  noteController.listenForNewNotes();

})();
