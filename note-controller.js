(function () {

  var noteList = new Notelist();

  noteList.addNote("Favourite drink: a cool lager");

  var noteListView = new NoteListView(noteList);

  var htmltag = noteListView.html();

  var element = document.getElementById('app')

  element.innerHTML = htmltag;

})();
