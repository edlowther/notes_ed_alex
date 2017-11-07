
(function() {

  function testNoteDisplaysContents() {

    var noteText = 'cheers beers';

    console.log(noteText)

    var mockNote =  {
      text: function() {
        return noteText;
      }
    };

    console.log(mockNote)

    var singleNoteView = {
    singleNote: function() {
      new singleNoteView(mockNote);
    }
  }

  console.log(singleNoteView)

    var htmlToCheck = {
      noteView: function() {
        return singleNoteView.html();
      }
    }

    console.log(htmlToCheck)

    assert.isSameAs(htmlToCheck, '<div>cheers beers</div>');
  }

  testNoteDisplaysContents();
})();
