const $ = (query) => document.querySelector(query);
const $all = (query) => Array.from(document.querySelectorAll(query));

const navContainer = $("#nav-container");
const showNavButton = $("#show-nav-button");
const hideNavButton = $("#hide-nav-button");

showNavButton.addEventListener("click", () => {
  navContainer.setAttribute("data-visible", true);
  document.body.style.overflowY = "hidden";
  document.documentElement.style.overflowY = "hidden";
});
hideNavButton.addEventListener("click", () => {
  navContainer.setAttribute("data-visible", false);
  document.body.style.overflowY = "visible";
  document.documentElement.style.overflowY = "visible";
});

const tabButtons = $all("#selection-list button");
const tabs = $all(".tab");
tabButtons.forEach((tabButton, tabButtonIndex) => {
  tabButton.addEventListener("click", () => {
    // loops over the button and unhighlights them all, except the active one
    tabButtons.forEach((tb, tbi) => { 
      if (tbi === tabButtonIndex) {
        tabButton.classList.add("active");
      } else {
        tb.classList.remove("active")
      }
    });

    // loops over the tabs to find a corresponding index
    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === tabButtonIndex) {
        tab.classList.add("visible");
      } else {
        tab.classList.remove("visible");
      }
    });
  });
});

const questionClickableAreas = $all("#faqs-list .clickable-area");
const questions = $all("#faqs-list .question");
questionClickableAreas.forEach((qca, qcaIndex) => {
  qca.addEventListener("click", () => {
    const question = questions[qcaIndex];
    const isShowingAnswer =
      question.getAttribute("data-is-showing-answer") === "true";

    question.setAttribute(
      "data-is-showing-answer",
      isShowingAnswer ? false : true
    );
  });
});

const emailRegExp = /[\w\d]+@\w+\.\w{2,3}/;
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const emailField = $("form #email");
  const fieldContainer = $("form .field-container");

  if (!emailRegExp.test(emailField.value)) {
    fieldContainer.classList.add("failed");
  } else {
    location.reload();
  }
});