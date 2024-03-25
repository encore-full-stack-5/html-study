const cal = [
  0,
  (a) => {
    cal[5].push(cal[0]);
    cal[0] += a;
  },
  (a) => {
    cal[5].push(cal[0]);
    cal[0] -= a;
  },
  (a) => {
    cal[5].push(cal[0]);
    cal[0] *= a;
  },
  (a) => {
    cal[5].push(cal[0]);
    cal[0] /= a;
  },
  [],
];

cal[1](4);
cal[2](1);
cal[3](10);
cal[4](2);
cal[1](4);
const [total, c1, c2, c3, c4, c5] = cal;
console.log(cal[5], cal[0] === total, c1 === cal[1]);

// 수: mongo  vue
// 목: elk  next
