document.addEventListener('DOMContentLoaded', function () {
  // Initialize the typing effect
  var typed = new Typed('.typed', {
    strings: ["Web Developer", "Software Engineer"], // Add more items separated by commas
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });

  // Function to set the active nav link based on scroll position
  function setActiveNav() {
    // Get the scroll position
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    // Sections to monitor
    let sections = ['home', 'about', 'resume', 'projects', 'contact'];
    
    // Iterate through sections to find the active one
    let currentSection = '';

    for (let i = 0; i < sections.length; i++) {
      let section = document.getElementById(sections[i]);

      // Debug: Log section details
      console.log(`Section: ${section.id}, Top: ${section.offsetTop}, Height: ${section.offsetHeight}, ScrollPos: ${scrollPos}`);

      // Adjust the threshold to better match the section heights and spacing
      // Adjust threshold to account for sections being 695px in height
      if (section.offsetTop <= scrollPos + 347.5 && section.offsetTop + section.offsetHeight > scrollPos + 347.5) {
        currentSection = sections[i];
      }
    }

    // Remove active class from all nav links
    document.querySelectorAll('#mySidenav a').forEach(link => {
      link.classList.remove('active');
      // Add active class to the current section nav link
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Event listener for scroll to update active navigation
  window.addEventListener('scroll', setActiveNav);

  // Initial call to set the active nav
  setActiveNav();
});
