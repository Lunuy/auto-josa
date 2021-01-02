
const { josa } = require("../dist/")

console.log(josa`${"바나나"}을 먹었다.`)
console.log(josa`을을${"바나나"}\을을`) // \를 통해서 자동 조사 교환 방지

console.log(josa`${"바나나"}이다`)
console.log(josa`${"로봇"}가 죽었다.`);
console.log(josa`그 ${"게임"}는 재미없었다.`);
console.log(josa`${"잉잉"}와 함께했다.`);
console.log(josa`${"바다"}으로 가자!`);
console.log(josa`${Math.floor(Math.random()*10)}라고??`);
console.log(josa`${"execute"}은 뭐지`);
console.log(josa`${"abc"}은 뭐지`);
console.log(josa`${"ab"}${"c"}은 뭐지`);

// . . . . .