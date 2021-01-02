# auto-josa
템플릿 문자열을 이용해 한국어 조사를 붙여준다.   
한국어/영어/숫자(경 까지) 지원   

# EXAMPLE
```js
const { josa } = require("auto-josa")

console.log(josa`${"바나나"}을 먹었다.`)
console.log(josa`을을${"바나나"}\을을`) // \를 통해서 자동 조사 교환 방지

console.log(josa`${Math.floor(Math.random()*10)}라고??`);
console.log(josa`${"execute"}은 뭐지`);
console.log(josa`${"abc"}은 뭐지`);
console.log(josa`${"ab"}${"c"}은 뭐지`); // 알파벳 한개는 알파벳 자체의 발음을 따름
```