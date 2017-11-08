"use strict";

(function() {
  console.log("Testing Note: ")

  function takesTextOnInstantiation() {
    console.log(" takes text on instantiation");
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text() === "My favourite language is JavaScript");
  };
  takesTextOnInstantiation();

  function hasAnIntro() {
    console.log(" returns the first 20 characters of the text as an intro, followed by an ellipsis");
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.intro() === "My favourite languag...");
  };
  hasAnIntro();
})();
