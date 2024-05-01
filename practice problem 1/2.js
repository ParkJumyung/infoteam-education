// 근의 공식을 확인해보세요.
// 계수 a, b, c를 가진 이차함수 f(x) = ax^2 + bx + c를 함수로 만들고
// 1부터 10까지의 자연수가 담긴 배열을 만들어 각 원소의 함숫값으로 이루어진 배열을 계산하세요.
// 근의 공식을 이용하여 계수 a, b, c가 주어지면 두 근을 구하는 함수를 만들고,
// 1x^2 - 4x + 3 = 0 의 해를 구하고
// 그 해를 각각 이차함수에 넣어 함숫값이 0이 되는지 확인해보세요.

const a = 1;
const b = -4;
const c = 3;

function secondary(a, b, c, x) {
    return a * x * x + b * x + c;

}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squared = [];
for (let i = 0; i < array.length; i++) {
    squared.push(secondary(a, b, c, array[i]))

}
console.log(array);
console.log(squared);

function root1(a, b, c) {
    return (-b + (b * b - 4 * a * c) ** 0.5) / 2 / a;
}
function root2(a, b, c) {
    return (-b - (b * b - 4 * a * c) ** 0.5) / 2 / a;
}
for (let i = 0; i < array.length; i++) {
    if (array[i] === root1(a, b, c)) {


        if (secondary(a, b, c, array[i]) === 0) {
            console.log(array[i] + '=해가 맞습니다')
        } else {
            console.log('해가 아닙니다')
        }

    } else if (array[i] === root2(a, b, c)) {

        if (secondary(a, b, c, array[i]) === 0) {
            console.log(array[i] + '=해가 맞습니다')
        } else {
            console.log('해가 아닙니다')
        }
    } else {

        console.log(array[i] + '=해가 아닙니다');
    }
}