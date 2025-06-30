document.addEventListener('DOMContentLoaded', function() {
  const seeMoreButtons = document.querySelectorAll('.see-more-btn');

  seeMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const fullBio = this.previousElementSibling;
      const card = this.closest('.card');

      if (fullBio.classList.contains('expanded')) {
        fullBio.classList.remove('expanded');
        this.textContent = 'See More';
      } else {
        fullBio.classList.add('expanded');
        this.textContent = 'See Less';
      }
    });
  });
});
