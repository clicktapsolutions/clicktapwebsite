  function openTab(evt, tabName) {
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Set default tab
    var firstTabButton = document.querySelector(".tab-button");
    if (firstTabButton) {
      openTab({ currentTarget: firstTabButton }, firstTabButton.getAttribute("data-target"));
    }
  });
  

  



  




  