function towerHanoi(discs) {
	return 2 ** discs - 1;
}

console.log(towerHanoi(3)); // 7

console.log(towerHanoi(5)); // 31

console.log(towerHanoi(0)); // 0