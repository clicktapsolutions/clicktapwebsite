function openTab(event, tabId) {
  var i, tabcontent, tabbuttons;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}

// Open the first tab by default
document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName("tab-button")[0].click();
});
  //////////////////////////////////////////////////////
  let nav = document.querySelector("nav");
  window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
    }else {
      nav.classList.remove("sticky");
    }
  }
 //////////////////////////////////////////////////////
 document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
});
 //////////////////////////////////////////////////////
 function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}   
  ////////////////////////////////////////////////////// 


  




  