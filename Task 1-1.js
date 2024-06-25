const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = thumbnail.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});