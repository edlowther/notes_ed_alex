(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck, testName) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + testName + " is not true");
      } else {
        console.log("  Imagine this text is green: test has passed");
      }
    },
    isAString: function(potentialString, testName) {
      if (typeof potentialString !== "string") {
        throw new Error("Assertion failed: " + testName + " supplied something that isn't a string");
      } else {
        console.log("  Imagine this text is green: test has passed");
      }
    },
    containsSubstring: function(string, potentialSubstring, testName) {
      if (string.indexOf(potentialSubstring) === -1) {
        throw new Error("Assertion failed: " + testName + " - not in the string");
      } else {
        console.log("  Imagine this text is green: test has passed");
        return true;
      }
    },
    isSameAs: function(stringA, stringB, testName) {
      if (stringA !== stringB) {
        throw new Error("Assertion failed: " + testName + " - not the same");
      } else {
        console.log("  Imagine this text is green: test has passed");
      }
    },
    elementContains: function(elementId, htmlString) {
      console.log(elementId)
      console.log(htmlString)
      var element = document.getElementById(elementId);
      var elementHtml = element.innerHTML;
      console.log(elementHtml)
      if (elementHtml !== htmlString) {
        throw new Error("Assertion failed - html does not match");
      } else {
        console.log("  Imagine this text is green: test has passed");
      }
    },
    elementContainsText: function(elementId, string) {
      var element = document.getElementById(elementId);
      var elementText = element.textContent;
      console.log(elementText)
      if (!this.containsSubstring(elementText, string)) {
        throw new Error("Assertion failed - html does not match");
      } else {
        console.log("  Imagine this text is green: test has passed");
      }
    }
  };
  exports.assert = assert;
})(this);
