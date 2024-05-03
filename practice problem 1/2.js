// 근의 공식을 확인해보세요.
// 계수 a, b, c를 가진 이차함수 f(x) = ax^2 + bx + c를 함수로 만들고
// 1부터 10까지의 자연수가 담긴 배열을 만들어 각 원소의 함숫값으로 이루어진 배열을 계산하세요.
// 근의 공식을 이용하여 계수 a, b, c가 주어지면 두 근을 구하는 함수를 만들고,
// 1x^2 - 4x + 3 = 0 의 해를 구하고
// 그 해를 각각 이차함수에 넣어 함숫값이 0이 되는지 확인해보세요.

// 사용되는 개념: 변수, 연산자, 조건문, 함수, 배열, 배열 내장함수

// 이차 함수 구현하기
function SecondOrder(a ,b, c, x){
    return a*x*x + b*x + c;
}
// 1 부터 10까지의 배열을 함숫값의 배열로 바꾸기
const numbers = Array.from({length: 10}, (v,i) => i+1);
console.log(numbers);
const array1 = [];
numbers.forEach(n => {array1.push(SecondOrder(1, -4, 3, n))}) 
console.log(array1);
// 같은 작업을 원본 배열을 건드리지 않으면서 하기(1부터 10까지의 배열이 연산 후에도 그대로이도록)
// 어떤 의미인가요..?

// 근의 공식을 이용하여 해를 구하는 함수 구현하기
function FindingRoots(a, b, c)
{
    const discriminant = b*b - 4*a*c; //판별식
    let x1,x2;
    if (discriminant<0){
        console.log('There is no root');
        return;
    }
    else if(discriminant===0){
        x1 = -b/2*a
        return x1;
    }
    else{
        x1 = (-b-Math.sqrt(discriminant))/2*a
        x2 = (-b+Math.sqrt(discriminant))/2*a
        return [x1, x2];
    }
}

// 1x^2 - 4x + 3 = 0의 해 구하기
const root = FindingRoots(1, -4, 3);
console.log(root);

// 구한 해를 이차함수에 넣어 함숫값이 0인지 확인하기 
let text = SecondOrder(1, -4, 3, root[1]) === 0
    ? 'it is root'
    : 'it is not root';
console.log(text);