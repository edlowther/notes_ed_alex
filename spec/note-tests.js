"use strict";

(function() {

  function takesTextOnInstantiation() {
    var testName = "takesTextOnInstantiation";
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text() === "My favourite language is JavaScript", testName);
  };

  takesTextOnInstantiation();
})();
