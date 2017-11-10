"use strict";

(function() {

  console.log("Testing NoteController:");

  function handlesFormSubmitCorrectly() {
    console.log("  it handles form submit events correctly")
    noteController.listenForNewNotes();
    noteController.makeUrlChangeShowNote();
    document.getElementsByName("noteTextarea")[0].value = "Favourite drink: tea"
    var addNoteSubmit = document.getElementById("addNoteSubmit");
    addNoteSubmit.click();
    var expectedText = "Favourite drink: tea...";
    assert.elementContainsText("list", expectedText);
  }
  handlesFormSubmitCorrectly();

  function putsCorrectHtmlOnPage() {
    console.log(" it puts the right HTML on the page for the list");
    var expectedHtml = '<ul><li><div><a href="#notes/3">Favourite drink: tea...</a></div></li></ul>';
    assert.elementContains("list", expectedHtml);
  };
  putsCorrectHtmlOnPage();

  function putsSingleNoteOnPage() {
    console.log(" it puts the right HTML for a single note from the list");
    var expectedHtml = "<div>Favourite drink: tea</div>";
    var link = document.getElementsByTagName("a")[0];
    link.click();
    noteController.showNote();
    assert.elementContains("note", expectedHtml);
  };
  putsSingleNoteOnPage();


})();
