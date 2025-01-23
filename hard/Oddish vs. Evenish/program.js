function oddishOrEvenish(num) {
	return Array.from(new String(num), Number).reduce((prev, current) => prev += current, 0) % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(43)); // Oddish

console.log(oddishOrEvenish(373)); // Oddish

console.log(oddishOrEvenish(4433)); // Evenish