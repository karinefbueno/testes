const inverteString = (string) => {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(inverteString('Karine'))