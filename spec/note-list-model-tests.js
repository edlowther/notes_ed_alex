"use strict";

(function() {
  function storesArray() {
    var testName = "storesArray";
    var noteList = new Notelist();
    assert.isTrue(Array.isArray(noteList.notes()), testName);
  };
  storesArray();

  function storesArrayOfNoteModels() {
    var testName = "storesArrayOfNoteModels";
    var noteList = new Notelist();
    noteList.addNote("brie");
    assert.isTrue(noteList.notes()[0].text() === 'brie', testName);
  };
  storesArrayOfNoteModels();
})();
