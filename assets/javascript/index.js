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


  // script.js

document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.fade-in');

  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the image is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once it is visible
          }
      });
  }, observerOptions);

  steps.forEach(steps => {
      observer.observe(steps);
  });
});





  