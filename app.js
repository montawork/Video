const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

window.addEventListener('DOMContentLoaded', () => {
  preloader.classList.add('hide-preloader');
});

btn.addEventListener('click', function () {
  if (!this.classList.contains('slide')) {
    this.classList.add('slide');
    video.pause();
  } else {
    this.classList.remove('slide');
    video.play();
  }
});
