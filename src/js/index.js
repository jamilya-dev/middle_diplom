import modals from './modules/modals';
import carousel from './modules/carousel';
import timer from './modules/timer';
import sendForms from './modules/sendForms';
import docs from './modules/docs';
import scroll from './modules/scroll';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded', function () {
  modals();
  carousel();
  if (window.location.pathname === '/index.html') {
    timer('25 September 2024', 'timer_1');
    timer('25 September 2024', 'timer_2');
    sendForms('form_1');
    sendForms('form_2');
  } else if (window.location.pathname === '/balkony.html') {
    timer('25 September 2024', 'timer_3');
    timer('25 September 2024', 'timer_4');
    sendForms('form_3', 'calc-total');
    sendForms('form_4', 'calc-total');
    calc();
  } else if (window.location.pathname === '/kuhni.html') {
    timer('25 September 2024', 'timer_5');
    timer('25 September 2024', 'timer_6');
    sendForms('form_5');
    sendForms('form_6');
  }
  docs();
  scroll();
});
