const permutationLoop = (string) => {
    if(string.length === 1) {
        return string;
    }
    if(string.length === 0) {
        return "";
    }
    let result = [];
    for(let i = 0; i < string.length; i++) {
        let remaining = permutationLoop(string.slice(0, i) + string.slice(i + 1));
        for(let j = 0; j < remaining.length; j++) {
            result.push(string[i] + remaining[j]);
        }
    }
    return result;
}
console.log(permutationLoop('abcd'));

