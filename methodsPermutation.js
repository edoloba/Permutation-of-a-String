const methodsPermutation = (string) => {
  if (string.length <= 2)
    return string.length === 2
      ? [string[0] + string[1], string[1] + string[0]]
      : [string];
  return string
    .split("")
    .reduce(
      (acc, char, i) =>
        acc.concat(
          methodsPermutation(string.slice(0, i) + string.slice(i + 1)).map(
            (perm) => char + perm
          )
        ),
      []
    );
};
console.log(methodsPermutation("abcde"));
