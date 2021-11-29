const TITLE = 'Корпоративный портал в дополненную реальность';
const SCREENS = 'Простые, Сложные, Интерактивные';
const SCREENPRICE = 969;
const ROLLBACK = 14;
const FULLPRICE = 10005005;
const ADAPTIVE = true;

console.log(typeof TITLE);
console.log(typeof FULLPRICE);
console.log(typeof ADAPTIVE);

console.log(SCREENS.length);

console.log(`Стоимость верстки экранов ${SCREENPRICE} долларов`);
console.log(`Стоимость разработки сайта ${FULLPRICE} юани`);

console.log(SCREENS.toLowerCase().split(', '));

console.log(Math.trunc(FULLPRICE * (ROLLBACK / 100)));