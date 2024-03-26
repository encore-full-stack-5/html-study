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

// 수: mongo  vue, oracle
// 목: elk  next, postgre
// 발표는
// 쓰는 방법, 느낀점, 적용 사례(적용 회사), 비슷한 기술
// 팀명
// react : 프로젝트 (백엔드 맛보기 및 예습) F.E, JS 친숙해 지기
//  REACT-자기팀명-주제-BE
//  REACT-자기팀명-주제-FE
