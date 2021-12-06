const num = 266219;

// Преобразует число в строку, принимает каждый символ этой строки, 
// преобразует его в число и помещает в новый массив. 
// Этот новый массив чисел будет возвращен.
const arrayOfDigits = Array.from(String(num), Number);

const multiplication = arrayOfDigits.reduce((acc, rec) => acc * rec);

const exponentiation = multiplication ** 3;

console.log(exponentiation.toString().substring(0, 2));