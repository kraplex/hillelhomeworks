//1 При загрузке страницы задается два вопроса: "Как тебя зовут?" "Какого ты года рождения?" И с помощью алерта выводится сообщение с именем и возрастом. Например, если пользователь ответил "Юра" и "1989" то выводится "Юра 28"
let name = prompt("Kак тебя зовут?");

let dateOfBirth = +prompt("Какого ты года рождения?");

alert(name + " " + (2020 - dateOfBirth));

//2 Ввести с клавиатуры 3 переменные (a, b, c). Привести их все в число. Выполнить операцию суммирования всех переменных. Указать какие переменные являются чётными.
let first = 6;

let second = 87;

let third = 99;

console.log(+first, +second, +third); /*приведение к числу*/

console.log(+first + +second + +third); /*сумма чисел*/

console.log(+first % 2); /*остаток после деления 0, значит число четное*/

console.log(+second % 2); /*остаток после деления 1, значит число нечетное*/

console.log(+third % 2); /*остаток после деления 1, значит число нечетное*/

//3 Определить среднее арифметическое трех чисел*/
console.log((+first + +second + +third) / 3);

//4 Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел
let x = 34567;

const a = x % 10;

const b = Math.ceil(((x - a) / 100) % 10);

const c = Math.ceil((x / 1000) % 10);

const d = Math.ceil((x / 10000) % 10);

const e = Math.floor((x / 100000) * 10);

console.log(e, d, c, b, a);

//5 Даны два различных числа. Определить какое из них больше, а какое меньше.
let i = 3;

let j = 5;

i > j ? console.log("i больше") : console.log("i меньше");

//6 Дано число. Определить, заканчивается оно четной цифрой или нечетной. Вывести последнюю цифру.

const isEven = x % 2 === 0 ? console.log("Четная") : console.log("Нечетная");

console.log(x % 10); //вывод последней цифры

//7 Напишите скрипт.
let yourName = prompt("Kак тебя зовут?");

let age = +prompt("Сколько тебе лет?");

let isAlcohol = confirm("Алкоголь употребляем?");

if (isAlcohol === false) {
  alert("Так держать!");
} else if (age > 40) {
  alert("Не злоупотребляйте");
} else if (age < 18) {
  alert("Ты что?! Маме расскажу!");
} else {
  alert("Только водку с пивом не мешай");
}
