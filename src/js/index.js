import modals from './modules/modals';
import carousel from './modules/carousel';
import timer from './modules/timer';
import sendForms from './modules/sendForms';
import docs from './modules/docs';

modals();
carousel();
timer('25 september 2024', 'timer_1');
timer('25 september 2024', 'timer_2');
sendForms('form_1');
sendForms('form_2');
docs();
