let a = 7, b = -9, c = 3;
let k = c;

if (c < b) {
	c = b;
	b = k;
}
if (b < a) {
	k = a;
	a = b;
	b = k;
}
if (c < b) {
	k = c;
	c = b;
	b = k;
}

console.log(a, b, c);