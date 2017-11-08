'use strict';

(function() {

  var noteList = new Notelist();
  noteList.addNote("tiger");
  noteList.addNote("cheetah");
  var noteListView = new NoteListView(noteList);
  console.log(noteListView); 
  var noteController = new NoteController(noteListView);
  noteController.exportHtml("app");
  noteController.makeUrlChangeShowNote();

})();
