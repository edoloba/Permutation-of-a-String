function recursivePermutation(str, i, j) {
  if (i === j) {
    return str;
  } else {
    for (let k = i; k <= j; k++) {
      str = swap(str, i, k);
     recursivePermutation(str, i + 1, j);
      str = swap(str, i, k);
    }
   
  }
}
function swap(string, i, j) {
  let temp;
  let lett = string.split("");
  temp = lett[i];
  lett[i] = lett[j];
  lett[j] = temp;
  console.log("result", lett.join(""));
  return lett.join("");
}

let string = "abc";
let n = string.length;
let result = recursivePermutation(string, 0, n - 1);
console.log(result)

// result is undefined. Why? I am getting lost with this solution. I believe has something to do with the fact that I am not returning the result of the recursivePermutation function on the else statement.

