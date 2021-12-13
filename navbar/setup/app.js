// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const cList = links.classList;

// Method -1
// navToggle.addEventListener("click", () => {
//   // (property) Element.classList: DOMTokenList
//   // Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

//   //   (method) DOMTokenList.contains(token: string): boolean
//   // Returns true if token is present, and false otherwise.
//   if (!cList.contains("show-links")) {
//     // cList.add("show-links"); // (method) DOMTokenList.add(...tokens: string[]): void
//     // Adds all arguments passed, except those already present.
//     // Throws a "SyntaxError" DOMException if one of the arguments is the empty string.
//     // Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.
//   } else {
//     cList.remove("show-links"); // (method) DOMTokenList.remove(...tokens: string[]): void
//     // Removes arguments passed, if they are present.
    
//     // Throws a "SyntaxError" DOMException if one of the arguments is the empty string.
    
//     // Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.
//   }
// })

// Method-2
navToggle.addEventListener("click", () => {
  cList.toggle("show-links");

  // toggle(class, true|false)
  // Toggles between a class name for an element.

  // The first parameter removes the specified class from an element, and returns false.
  // If the class does not exist, it is added to the element, and the return value is true.

  // The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed. For example:

  // Remove a class: element.classList.toggle("classToRemove", false);
  // Add a class: element.classList.toggle("classToAdd", true);

  // Note: The second parameter is not supported in Internet Explorer or Opera 12 and earlier.
});
