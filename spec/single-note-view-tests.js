"use strict";

(function() {
  console.log("Testing SingleNoteView: ")
  function testNoteDisplaysContents() {
    console.log(" it returns a the text of a note wrapped in div tags");
    var mockNote = {
      text: function() {
        return 'Extremely interesting note';
      }
    };
    var singleNoteView = new SingleNoteView(mockNote);
    var htmlToCheck = singleNoteView.html();
    assert.isSameAs(htmlToCheck, '<div>Extremely interesting note</div>');
  }
  testNoteDisplaysContents();
})();
