import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const state = event.target.elements.state.value;
  const delay = event.target.elements.delay.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, Number(delay));
  })
    .then(value =>
      iziToast.show({
        color: 'green',
        message: `✅ Fulfilled promise in ${value}ms`,
      })
    )
    .catch(error =>
      iziToast.show({
        color: 'red',
        message: `❌ Rejected promise in ${error}ms`,
      })
    );
}
