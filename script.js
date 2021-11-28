let title = 'Корпоративный портал в дополненную реальность';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 969;
let rollback = 14;
let fullPrice = 10005005;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юани`);

console.log(screens.toLowerCase().split(', '));

console.log(Math.trunc(fullPrice * (rollback/100))); 