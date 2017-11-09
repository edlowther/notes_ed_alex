'use strict';

(function() {

  var noteListModel = new Notelist();
  var noteListView = new NoteListView(noteListModel);
  var noteController = new NoteController(noteListModel, noteListView);
  var eventController = new EventController(noteController, noteListModel)

  noteController.displayList();
  eventController.makeUrlChangeShowNote();
  eventController.listenForNewNotes();

})();
