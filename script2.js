const arr_week = ['воскресение', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
const now = new Date()

for (let i = 0; i < arr_week.length; i++) {
    if (now.getDay() === i) {
        document.body.insertAdjacentHTML('beforeend', '<b>' + arr_week[i] + '</b>'+ '<br>');
    } else if (i >= 1 && i<=5) {
        document.body.insertAdjacentHTML('beforeend', arr_week[i] + '<br>');
    } else {
        document.body.insertAdjacentHTML('beforeend', '<i>' + arr_week[i] + '</i>' + '<br>');
    }
}