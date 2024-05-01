// 덧셈과 곱셈이 함께 사용된 식에서 연산의 순서가 중요한 지 확인하는 코드를 작성하세요.
// 세 변수 a, b, c를 각각 2, 3, 4로 했을 때
// (a + b) * c와 a + (b * c)가 같은 지 확인해보고, 
// 같으면 (a + b) * c is same as a + (b * c), 
// 다르면 (a + b) * c is not same as a + (b * c)
// 라고 출력하세요.

const a = 2;
const b = 3;
const c = 4;
let d = (a + b) * c;
let f = a + (b * c);
console.log(d);
console.log(f);
if (d === f) {
    console.log('(a + b) * c is same as a + (b * c)');

} else {
    console.log('(a + b) * c is not same as a + (b * c)');

}
let text = d === f ? '(a + b) * c is same as a + (b * c)' : '(a + b) * c is not same as a + (b * c)';
console.log(text);


