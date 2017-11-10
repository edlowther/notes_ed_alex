'use strict';

var noteController = (function() {

  var noteListModel = new Notelist();
  var noteListView = new NoteListView(noteListModel);

  var exports = {
    noteListModel: noteListModel,
    noteListView: noteListView
  };
  
  return exports;
})();
