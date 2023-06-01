const arr = [];
for (let i = 0; i < 49; i++) {
  const randomNum = Math.floor(Math.random() * 901) + 100;
  arr.push(randomNum);
}
console.log(arr);
