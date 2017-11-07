"use strict";

(function() {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("Your code is not broken in the way that you think"); 
      }
    }
  };

  function takesTextOnInstantiation() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text() === "My favourite language is JavaScript");
  };

  takesTextOnInstantiation();
})(this);
