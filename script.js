//Zadanie 1

const hello = 'Hello';
const world = 'World!';
console.log(`${hello} ${world}`);

//Zadanie 2

const multiply = (a=1, b=1) => a*b;

console.log(multiply());
console.log(multiply(6));
console.log(multiply(12, 73));

//Zadanie 3

const average = (...args) => {
	let sum = 0;
	args.forEach(arg  => {
		sum += arg;
	});
	return (`Średnia podanych liczb wynosi: ${sum/args.length}`);
};
console.log(average(1)); 
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//Zadanie 5

const array1 = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstname, ,lastname] = array1;

console.log(`First name: ${firstname}`);
console.log(`Last name: ${lastname}`);

