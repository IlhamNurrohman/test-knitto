function deteksiPalindrom(str) {
    if(typeof str !== "string"){
        return "Data harus string";
    }

    let currentString = str.toLowerCase();
    let newString = '';
    for (let i = currentString.length - 1; i >= 0; i--) {
        newString = newString + currentString[i];
    }
    console.log(newString)
    if (newString !== currentString) {
        return "bukan palindrom";
    }
    return "palindrom";
}
console.log(deteksiPalindrom(1));
console.log(deteksiPalindrom('malam'));
console.log(deteksiPalindrom('Malam'));
console.log(deteksiPalindrom('malih'));