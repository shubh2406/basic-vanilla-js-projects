//using selectors inside the element
// traversing the dom

// target btns
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    // (property) Event.currentTarget: EventTarget
    // Returns the object whose event listener's callback is currently being invoked.

    const questionTextClass =
      question.querySelector(".question-text").classList;

    questionTextClass.toggle("show-text");

    const plusIcon = btn.querySelector(".plus-icon");
    const minusIcon = btn.querySelector(".minus-icon");

    // if(!plusIcon.classList.contains("show-text")){
    //     minusIcon.classList.add("show-text");
    //     plusIcon.classList.add("show-text");
    // }else{
    //     minusIcon.classList.remove("show-text");
    //     plusIcon.classList.remove("show-text");
    // }

    plusIcon.classList.toggle("show-text");
    minusIcon.classList.toggle("show-text");

    check(btn);
  });
});

function check(clickBtn) {
  btns.forEach((btn) => {
    if (clickBtn !== btn) {
      const question = btn.parentElement.parentElement;

      const questionTextClass =
        question.querySelector(".question-text").classList;

      questionTextClass.remove("show-text");

      const plusIcon = btn.querySelector(".plus-icon");
      const minusIcon = btn.querySelector(".minus-icon");

      plusIcon.classList.remove("show-text");
      minusIcon.classList.remove("show-text");
    }
  });
}
