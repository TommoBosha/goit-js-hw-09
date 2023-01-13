import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const dateField = document.getElementById('datetime-picker');
const btnEl = document.querySelector('button');
const dayField = document.querySelector('[data-days]');
const hourField = document.querySelector('[data-hours]');
const minuteField = document.querySelector('[data-minutes]');
const secondField = document.querySelector('[data-seconds]');


btnEl.addEventListener('click', startCountDownHandler);

document.querySelectorAll('.field').forEach(elem => {
    elem.style.cssText +=
        'text-align: center;font-size: 25px;margin-top: 0px;display: inline-flex;flex-direction: column;';
    elem.lastElementChild.style.cssText +=
        'addLeadingZeroding-top: 5px;font-size: 14px;text-transform: uppercase;';
});

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            btnEl.disabled = true;
            Notify.failure(
                'Please choose a date in the future',
                {
                    width: '300px',
                    duration: 2000,
                });
        } else {
            btnEl.disabled = false;
            Notify.success(
                'Entered date is correct',
                {
                    width: '300px',
                    duration: 2000,
                });
        }

    }
}
const datePicker = flatpickr(dateField, options);
btnEl.disabled = true;


function startCountDownHandler() {
    const selectedDate = datePicker.selectedDates[0];
    if (!selectedDate) return;
    dateField.disabled = true;
    btnEl.disabled = true;
    let timerId = setInterval(function () {
        let difference = new Date(selectedDate) - new Date();
        dayField.innerHTML = addLeadingZero(
            Math.floor(difference / (1000 * 60 * 60 * 24))
        );
        hourField.innerHTML = addLeadingZero(
            Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        minuteField.innerHTML = addLeadingZero(
            Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        );
        secondField.innerHTML = addLeadingZero(
            Math.floor((difference % (1000 * 60)) / 1000)
        );

        if (difference < 1000) {
            clearInterval(timerId);
            Notify.info(
                'Time`s up!',
                {
                    width: '300px',
                    duration: 2000,
                });
            dateField.disabled = false;
        }
    }, 1000);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}






