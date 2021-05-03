const args = process.argv;
for (let i = 2; i < args.length; i++) {
  let result = '';
  for (let a = args[i].length - 1; a > -1; a--) {
    result += args[i][a];
  }
  console.log(result);
}

