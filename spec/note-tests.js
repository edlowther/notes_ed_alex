"use strict";

(function() {
  console.log("Testing Note: ")

  var note = new Note("My favourite language is JavaScript");
  var noteTwo = new Note("My favourite animal is elephant");

  function takesTextOnInstantiation() {
    console.log(" takes text on instantiation");
    assert.isTrue(note.text() === "My favourite language is JavaScript");
  };
  takesTextOnInstantiation();

  function hasAnIntro() {
    console.log(" returns the first 20 characters of the text as an intro, followed by an ellipsis");
    assert.isTrue(note.intro() === "My favourite languag...");
  };
  hasAnIntro();

  function getsAnId() {
    console.log(" gets an id");
    assert.isTrue(note.id() === 0);
  }
  getsAnId();

  function idGoesUpByOne() {
    console.log(" id gets incremented for subsequent instantiations");
    assert.isTrue(noteTwo.id() === 1);
  }
  idGoesUpByOne();
})();
