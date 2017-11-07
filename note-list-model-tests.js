"use strict";

(function() {
  var assert = {
    isTrue: function(assertionToCheck, testName) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + testName + " does not work");
      } else {
        console.log("Your code is not broken in the way that you think");
      }
    }
  };

  function storesArrayOfNoteModels() {
    var testName = "takesTextOnInstantiation";
    var noteList = new Notelist();
    noteList.addNotes("brie");
    assert.isTrue(noteList.notes()[0].text) === ['brie'];
  };

    storesArrayOfNoteModels();
  })(this);
