document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".fade-up");

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add("showUp");
        }, index * 500); // Menggunakan index untuk mengatur keterlambatan muncul
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(function(element) {
    observer.observe(element);
  });
});