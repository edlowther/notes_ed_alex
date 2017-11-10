'use strict';

(function() {

  var noteListModel = new Notelist();
  var noteListView = new NoteListView(noteListModel);
  var noteController = new NoteController(noteListModel, noteListView);
  var submitEventController = new SubmitEventController(noteController, noteListModel)

  noteController.displayList();
  noteController.makeUrlChangeShowNote();
  submitEventController.listenForNewNotes();

})();
