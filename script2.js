const arr = new Map([
    ['ru', 'Пон Вт Ср Чт Пт Сб Вс'],
    ['en', 'Mon Tue Wen Thu Fri Sat Sun'],
  ]);

let lang = 'en';

// первый метод через if
if (lang === 'ru') {
    console.log(arr.get('ru'));
} else if (lang === 'en') {
    console.log(arr.get('en'))
} else {
    console.log(' Что-то другое');
}

// второй метод через switch-case
switch (lang) {
    case 'ru':
        console.log(arr.get('ru'));
        break;
    case 'en':
        console.log(arr.get('en'));
        break;
    default:
        console.log('Что-то другое')
}

// третий метод через многомерный массив
console.log(arr.get(lang));