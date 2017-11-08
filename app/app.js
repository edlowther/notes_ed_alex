'use strict';

(function() {

  var noteList = new Notelist();
  noteList.addNote("Like all failed experiments, that one taught me something I didn’t expect: one key ingredient of so-called experience is the delusional faith that it is unique and special, that those included in it are privileged and those excluded from it are missing out");
  noteList.addNote("Using TDD, update your note-controller.js to load content for the single note page. The note controller code should listen for hashchange events. When one happens, if the new browser URL is for a single note page, it should change the content of the app element to be the HTML for that note");
  var noteListView = new NoteListView(noteList);
  console.log(noteListView);
  var noteController = new NoteController(noteListView);
  noteController.exportHtml("app");
  noteController.makeUrlChangeShowNote();
  noteController.listenForNewComments(); 

})();
