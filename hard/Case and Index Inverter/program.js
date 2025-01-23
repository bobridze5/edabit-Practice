function invert(s) {
	return Array.from(s, (char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).reduceRight((prev, current) => prev += current);
}

console.log(invert("dLROW YM sI HsEt"));

console.log(invert("ytInIUgAsnOc"));

console.log(invert("step on NO PETS"));

console.log(invert("XeLPMoC YTiReTXeD"))

/*
TeSh iS my worlD
CoNSaGuiNiTY
step on NO PETS
dExtErIty cOmplEx
*/