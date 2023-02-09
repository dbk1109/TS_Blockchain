## 타입스크립트 공부하면서 정리하기

- 타입스크립트는 더 나은 환경을 위해 개발되었으며 `런타임에러`를 방지하는데 아주 탁월하다.
- `런타임에러` : 유저의 컴퓨터에서 코드가 실행되어야 지만 확인할 수 있는 에러.
- 일반적인 상황일때는 타입스크립트가 알아서 해당 타입을 추론하게 만드는것이 바람직하다.
- 타입 선언방법

  ```Typescript
    // Single varation
    let A : number = 1;
    let B : string = "Hello";
    let C : boolean = true;
    let D : boolean[] = [true]; //[]를 통해 array로 만들어준다.

    // Object varation
    type Age = number; //타입 별칭 (Type Aliases)
    type Player = { //첫글자 대문자
      name: string,
      age?: Age; //옵션
    }
    //const playerMaker = (name: string): Player => ({ name }); 아래와 같음.
    function playerMaker(name: string): Player { // : Player를 넣어주면
      return {
        //name: name은 name으로 줄여서 사용 가능
        name,
      };
    }
    const kimda = playerMaker("kimda");
    kimda.age = 12; //age를 알아챔
  ```

- `type vs interface` 타입 별칭과 인터페이스의 가장 큰 차이점은 인터페이스는 확장이 가능한데 타입 별칭은 확장이 불가능, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천.
- object typed에 readonly를 적으면 수정할 수 없게 됨.
  ```Typescript
    const names: readonly number[] = [1,2,3,4];
    names.push(5) // 이렇게 사용하면 에러가 뜬다
  ```
- 함수가 문자열 배열을 반환할때 : `function name(): string[]`
- `Tuple` : array를 생성할때 최소 갯수와 특정 위치의 타입을 알게함.

  ```Typescript
    const player: readonly [string, number, boolean] = ["nico",12,false];
    player[0] = 1 // 에러가남.(스트링이어야 하기 때문에, readonly이기 때문에)

  ```

- let a:`any`: 사용하게 되면 타입스크립트를 탈출하기 때문에 참고는 하되 사용하지 않는게 좋다.
- let a:`unkown`: 변수의 타입을 미리 알지 못할때 확인함. 사용할때 if(typeof ...) 으로 사용.
- function hello():`void` {...}: 아무것도 리턴하지 않는 함수라고 인식함.
- function hello():`never` {...}: 절대 실행되면 안되는 함수라고 인식함.

### function

![image](https://user-images.githubusercontent.com/75190062/217847003-9adb9e77-c92f-40c4-9ddc-958806c365f7.png)

- `call signeture` : 마우스를 올렸을때 함수의 인자(아규먼트)의 타입이랑 반환타입을 알려주는것.

```typescript
function add1(a: string, b: number) {
  return a + b;
}
const add2 = (a: string, b: number) => a + b;
type Add = (a: string, b: number) => number;
```

![image](https://user-images.githubusercontent.com/75190062/217847963-f920f41f-bd5b-4f64-8dd2-df83cf2034ac.png)

