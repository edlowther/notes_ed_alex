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

  function takesTextOnInstantiation() {
    var testName = "takesTextOnInstantiation";
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text() === "My favourite language is JavaScript", testName);
  };

  takesTextOnInstantiation();
})(this);
