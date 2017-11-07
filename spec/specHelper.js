(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck, testName) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + testName + " is not true");
      } else {
        console.log("Imagine this text is green: " + testName + " has passed");
      }
    },
    isAString: function(potentialString, testName) {
      if (typeof potentialString !== "string") {
        throw new Error("Assertion failed: " + testName + " supplied something that isn't a string");
      } else {
        console.log("Imagine this text is green: " + testName + " has passed");
      }
    },
    containsSubstring: function(string, potentialSubstring, testName) {
      if (string.indexOf(potentialSubstring) === -1) {
        throw new Error("Assertion failed: " + testName + " - not in the string");
      } else {
        console.log("Imagine this text is green: " + testName + " has passed");
      }
    }
  };
  exports.assert = assert;
})(this);
