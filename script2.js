const arr = [
    ['ru', 'Пон Вт Ср Чт Пт Сб Вс'],
    ['en', 'Mon Tue Wen Thu Fri Sat Sun'],
  ];

let lang = 'ru';

// первый метод через if
if (lang === 'ru') {
    console.log(arr[0][1]);
} else if (lang === 'en') {
    console.log(arr[1][1])
} else {
    console.log(' Что-то другое');
}

// второй метод через switch-case
switch (lang) {
    case 'ru':
        console.log(arr[0][1]);
        break;
    case 'en':
        console.log(arr[1][1]);
        break;
    default:
        console.log('Что-то другое')
}

// третий метод через многомерный массив
const arr1 = new Map([
    ['ru', 'Пон Вт Ср Чт Пт Сб Вс'],
    ['en', 'Mon Tue Wen Thu Fri Sat Sun'],
  ]);

console.log(arr1.get(lang));