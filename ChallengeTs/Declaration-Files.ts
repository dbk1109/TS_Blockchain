//Everything, everywhere all at once!
//This is a three day challenge!

//오늘의 강의: Typescript로 블록체인 만들기: From #5.3
//오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
//제출기간: 최종 3일 챌린지입니다. 월요일 오전 6시까지
//Goal of the Challenge:
//Your task is to translate the JSDoc comments of the following files to Typescript Type Declarations.
//여러분들의 목표는 다음 JSDoc 파일들의 주석 부분들을 타입스크립트 타입 정의로 바꾸는 것입니다.
//head.js: https://github.com/lodash/lodash/blob/master/head.js
//hasIn.js: https://github.com/lodash/lodash/blob/master/hasIn.js
//isBoolean.js: https://github.com/lodash/lodash/blob/master/isBoolean.js
//toString.js: https://github.com/lodash/lodash/blob/master/toString.js
//split.js: https://github.com/lodash/lodash/blob/master/split.js
//hasPath.js: https://github.com/lodash/lodash/blob/master/hasPath.js
//filter.js: https://github.com/lodash/lodash/blob/master/filter.js
//every.js: https://github.com/lodash/lodash/blob/master/every.js
//map.js: https://github.com/lodash/lodash/blob/master/map.js
//함수를 실행시키는 것까지 하실 필요는 없습니다. 타입 정의만 만드시면 충분합니다.

//TA's 힌트
//타입 정의를 위해선 보통의 경우 {자바스크립트 파일 이름}.d.ts 형태로 타입 정의 파일을 만들고 declare이라는 키워드를 사용합니다. 이번 챌린지에서는 lodash라는 모듈에 대한 타입 정의를 필요로 하기 때문에 module이라는 키워드도 함께 쓰고 있습니다. 모듈에 대한 타입 정의의 자세한 사항은 해당 공식 문서를 확인해주세요.
//head.js, hasIn.js 등은 모두 함수 형태로 구성이 되어 있습니다. return되는 값의 타입이 어떤지 잘 파악하면서 타입에 대한 정의를 내리시기 바랍니다.
//타입스크립트를 자바스크립트로 컴파일 할 때 여러가지 설정들을 할 수 있는데 해당 설정들을 가능케 하는 파일이 바로 tsconfig.json입니다.
//target: 어떤 버전의 자바스크립트로 컴파일 해줄 것인지 설정해줍니다.
//lib: 자바스크립트 코드가 어디에서 동작하게 하며 특정 버전의 자바스크립트가 어떤 환경에서 동작하는지 설정해줍니다. 만일 여기서 DOM 속성을 추가하게 되면 DOM과 관련된 API 타입들을 자동적으로 불러와줍니다.
//JSDoc은 주석을 이용하여 자바스크립트 파일에 타입에 대한 정보를 제공할 수 있습니다;.
//JSDoc을 사용하는 방법에 대한 자세한 사항은 공식 문서를 참조해주세요.
//@ts-check은 자바스크립트에서 오류를 활성화해줍니다. 해당 기능을 원치 않으실 경우 끌 수도 있습니다.

interface Path {
  array: any[];
  string: string;
}
interface Function {
  (value: string, index: number, array: string[]): void;
}

declare module "lodash" {
  function head(array: number[]): number | undefined;
  function hasIn(object: object, key: any): boolean;
  function isBoolean(value: boolean): boolean;
  function toString(value: any): string;
  function split(string: string, separator: string, limit: number): string[];
  function hasPath(object: object, path: Path): boolean;
  function filter(array: object[], predicate: Function): string[];
  function every(array: any[], predicate: Function): boolean;
  function map(array: number[], iteratee: Function): number;
}
