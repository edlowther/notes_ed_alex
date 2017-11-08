
(function() {
    console.log(SingleNoteView)

  function testNoteDisplaysContents() {

    var noteText = 'cheers beers';

    console.log(noteText)

    var mockNote =  {
      text: function() {
        return noteText;
      }
    };

    var singleNoteView = new SingleNoteView(mockNote);


  console.log(singleNoteView)

    var htmlToCheck = singleNoteView.html();



    console.log(htmlToCheck)

    assert.isSameAs(htmlToCheck, '<div>cheers beers</div>');
  }

  testNoteDisplaysContents();
})();
