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
// 코스기수-프로젝트회차-팀(조, 진행자)이름-프로젝트명
// BE05-1st-ㄴㅇㅇㅇ-ㅇㅇㅇㅇ
// npm -v
// npm i -g create-react-app
//  npm create react-app day7
// Success! Created day7 at C:\html-study\day7
// Inside that directory, you can run several commands:

// npm start
//   Starts the development server.

// npm run build
//   Bundles the app into static files for production.

// npm test
//   Starts the test runner.

// npm run eject
//   Removes this tool and copies build dependencies, configuration files
//   and scripts into the app directory. If you do this, you can’t go back!

// We suggest that you begin by typing:

// cd day7
// npm start
