// 덧셈과 곱셈이 함께 사용된 식에서 연산의 순서가 중요한 지 확인하는 코드를 작성하세요.
// 세 변수 a, b, c를 각각 2, 3, 4로 했을 때
// (a + b) * c와 a + (b * c)가 같은 지 확인해보고, 
// 같으면 (a + b) * c is same as a + (b * c), 
// 다르면 (a + b) * c is not same as a + (b * c)
// 라고 출력하세요.
// 사용되는 개념: 변수, 연산자, 조건문, 삼항연산자

// 변수 a, b, c 만들기
let a=2, b=3, c=4;
// (a + b) * c 를 계산하고 다른 변수에 저장한 후 출력하기
let n1;
n1 = (a+b)*c;
// a + (b * c) 를 계산하고 다른 변수에 저장한 후 출력하기
let n2; 
n2 = a + (b * c);
// 조건문을 이용하여 둘을 비교하고 결과를 출력하기
if (n1 === n2)
    {
        console.log('(a + b) * c is same as a + (b * c)');
    }
else
    {
        console.log('(a + b) * c is not same as a + (b * c)');
    }
// 삼항연산자를 이용하여 다시 둘을 비교하고 결과를 출력하기 
const text = (n1 === n2)?'(a + b) * c is same as a + (b * c)':'(a + b) * c is not same as a + (b * c)';

console.log(text);