// let 변하는 변수 const 상수
// let i =0;
// const i =0;
// for (let i = 0; i < 10; i++) {
//   if (i === "0") console.log(i);
//   else if (i === 0) console.log(true);
// }
// if ("true" == true) console.log("같다");
// 2 ... 100 소수 탐색
for (let i = 2; i <= 10; i++) {
  let isPrime = true;
  for (let j = 2; j < i / 2; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
