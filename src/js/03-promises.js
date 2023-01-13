import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget;
  const delayNum = Number(delay.value);
  const stepNum = Number(step.value);
  const amountNum = Number(amount.value);

  for (let i = 0; i < amountNum; i += 1) {
    createPromise(i + 1, delayNum + i * stepNum)
      .then(onResolve)
      .catch(onReject);
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    },);
  });
}
function onResolve({ position, delay }) {
  Notify.success(` Fulfilled promise ${position} in ${delay}ms`, { duration: 3000, });
}

function onReject({ position, delay }) {
  Notify.failure(` Rejected promise ${position} in ${delay}ms`, { duration: 2000, });
}