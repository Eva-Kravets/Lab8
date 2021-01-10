  
let n = 5;
let numbers = [3, -2, 1, 0, -7];
let max = 0;

for (let i = 0; i < n; i++) {
	if (numbers[i] > max) {
		max = numbers[i];
	}
}

console.log(max);