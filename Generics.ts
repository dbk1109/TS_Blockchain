//현재까지 배운 것을 토대로, 두 함수에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요
//last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
//prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.

//[https://nomadcoders.co/c/typescript-challenge/lobby#:~:text=TA%27s%20%ED%9E%8C%ED%8A%B8-,%ED%98%B8%EC%B6%9C%20%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B3%90%EC%97%90%20%EB%8C%80%ED%95%9C%20%EC%A0%95%EC%9D%98%20%EB%B0%8F%20%EC%98%88%EC%8B%9C,-last(arr)]호출 시그니쳐에 대한 정의 및 예시
//last(arr) 함수는 배열인 arr를 파라미터로 받으며 배열 arr의 마지막 요소를 최종적으로 return해야 합니다.
//자바스크립트에서 배열의 인덱스를 알면 Array[index] 형태로 값에 접근할 수 있습니다.
//자바스크립트에서 배열의 마지막 요소의 인덱스는 어떻게 알 수 있을까요 ? 배열의 크기를 숫자형으로 반환해주는 length를 활용해보시기 바랍니다.
//prepend(arr, item) 함수는 배열인 arr과 넣을 아이템인 item을 파라미터로 받으며 item이 arr의 맨 앞에 넣어진 후 만들어진 새로운 배열을 return해야 합니다.
//자바스크립트에서 배열의 맨 첫번째 원소의 인덱스는 0입니다.
//구조 분해 할당과 전개 구문(Spread Operator)를 함께 사용하여 배열의 맨 앞에 원소를 넣은 후 바뀐 배열을 반환하는 방법을 생각해보세요.

const test1 = [1, 2, 3, "4", 5];
const test2 = [1, 2, 3, 4, 5];

type IndexReturn = {
  <T>(arr: T[], item?: any): void;
};
const last: IndexReturn = (arr) => arr[arr.length - 1];
const prepend: IndexReturn = (arr, item) => {
  arr.unshift(item);
  return arr;
};

console.log(last(test1), prepend(test2, "INSERTED"));

///// solution
// Last
//type Last = <T>(items: T[]) => T;
//const last2: Last = (items) => items[items.length - 1];
//const lastItem = last2([1, 2, 3, 4, 5]);
//console.log(lastItem);

//// Prepend
//type Prepend = <T>(items: T[], item: T) => T[];
//const prepend2: Prepend = (items, item) => [item, ...items];
//const items = [1, 2, 3, 4, 5];
//const newItems = prepend2(items, 0);
//console.log(newItems);
