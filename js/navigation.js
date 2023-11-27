// navigation.js

// Function to handle the "Jump To" button click
function jumpTo() {
  // Remove the 'active' class from all navigation links
  removeActiveClassFromNavigation();

  // Add the 'active' class to the clicked navigation link
  document.querySelector('.navigationBar[data-target="sectionJump"]').classList.add('active');

  // Show the 'sectionJump' section and hide the 'sectionAbout' section
  document.getElementById('sectionJump').style.display = 'block';
  document.getElementById('sectionAbout').style.display = 'none';
}

// Function to handle the "About NFT" button click
function aboutSection() {
  // Remove the 'active' class from all navigation links
  removeActiveClassFromNavigation();

  // Add the 'active' class to the clicked navigation link
  document.querySelector('.navigationBar[data-target="sectionAbout"]').classList.add('active');

  // Show the 'sectionAbout' section and hide the 'sectionJump' section
  document.getElementById('sectionAbout').style.display = 'block';
  document.getElementById('sectionJump').style.display = 'none';
}

// Function to remove the 'active' class from all navigation links
function removeActiveClassFromNavigation() {
  const navigationLinks = document.querySelectorAll('.navigationBar');
  navigationLinks.forEach(link => {
    link.classList.remove('active');
  });
}

// Event listeners for the buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.navigationBar[data-target="sectionJump"]').addEventListener('click', jumpTo);
  document.querySelector('.navigationBar[data-target="sectionAbout"]').addEventListener('click', aboutSection);
});