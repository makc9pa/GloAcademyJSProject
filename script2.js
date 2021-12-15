'use strict';

const 
daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
today = new Date()

// for (let i = 0; i < daysOfWeek; i++) {
//     if (i === now.getDay() && (i === 0 || i === 6)) {
//         document.body.insertAdjacentHTML('beforeend', '<b>' + '<i>'+ arr_week[i] + '</i>' + '</b>' + '<br>');
//     } else if (i === now.getDay()) {
//         document.body.insertAdjacentHTML('beforeend', '<b>' + arr_week[i] + '</b>' + '<br>');
//     } else if (i >= 1 && i <= 5) {
//         document.body.insertAdjacentHTML('beforeend', arr_week[i] + '<br>');
//     } else {
//         document.body.insertAdjacentHTML('beforeend', '<i>' + arr_week[i] + '</i>' + '<br>');
//     }
// }

for (let i = 0; i < daysOfWeek.length; i++) {
let day = i + 1 > 5 ? daysOfWeek[i].italics() : daysOfWeek[i];

document.body.appendChild(document.createElement('p')).innerHTML =
`${i + 1 !== today.getDay() ? day : day.bold()}`;
}