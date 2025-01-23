function caesarCipher(s, k) {
    const shift = k % 26;
    const code_A = 'A'.charCodeAt(0);
    const code_a = 'a'.charCodeAt(0);
    const result = [];

    for(let char of s){
        let newChar;
        if(char >= 'A' && char <= 'Z') {
            newChar = String.fromCharCode((char.charCodeAt(0) - code_A + shift) % 26 + code_A);
        } else if (char >= 'a' && char <= 'z'){
            newChar = String.fromCharCode((char.charCodeAt(0) - code_a + shift) % 26 + code_a);
        }

        newChar ? result.push(newChar) : result.push(char);
    }

    return result.join('');
}

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));
// "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

console.log(caesarCipher("A friend in need is a friend indeed", 20));
// "U zlcyhx ch hyyx cm u zlcyhx chxyyx"