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

### functions

> 헷갈려서 다시 정리하는 기본용어!
> `매개변수`=인자=parameter : 함수의 정의에서 전달받은 인수를 함수 내부로 전달하기 위해 사용하는 변수를 의미합니다.(함수에서 전달된 값을 받는 변수.) f(parameter)
> `인수`=argument : 함수가 호출될 때 함수로 값을 전달해주는 값. (전달된 값)
> ![image](https://user-images.githubusercontent.com/75190062/217847963-f920f41f-bd5b-4f64-8dd2-df83cf2034ac.png)

- `Call Signature` : 마우스를 올렸을때 함수의 인자(아규먼트)의 타입이랑 반환타입을 알려주는것.
  ```typescript
  /* AS IS */
  function add1(a: number, b: number) {
    return a + b;
  }
  const add2 = (a: number, b: number) => a + b;
  /* TO BE : 함수의 개별 시그니처를 만드는 방법*/
  type Add = (a: number, b: number) => number;
  const add: Add = (a, b) => a + b;
  ```
- `Overloading` : 함수가 여러개의 Call Signature를 가지고 있을때 사용함. -> 이것은 Next.js 에서 다시 알아보기로 하자.
  ```typescript
  type Add = {
    (a: number, b: number): number;
    (a: number, b: string): number;
  };
  const add: Add = (a, b) => a + b;
  ```
- `Polymorphism` : Ploy(많은, 다수의, 폴리곤 등), Morphos(구조, 스트럭쳐).
  - `generic` : 타입의 플레이스홀더. 보통은 T로 작성하고, 아래와 같은 경우엔 새로운 타입이 생길때마다 한번씩 더 선언해줘야 하는 대신 제네릭으로 변경하면서 하나씩 입력하지 않아도 되기 때문에 유용함.
    ```typescript
    // 잘 작동하지만 더 나은방법으로 작성 가능
    type SuperPrint = {
      (arr: number[]): void;
      (arr: boolean[]): void;
    };
    const superPrint: SuperPrint = (arr) => {
      arr.forEach((i) => console.log(i));
    };
    superPrint([1, 2, 3, 4]);
    superPrint([true, false, true, true]);
    superPrint([true, false, 3, 4]); //에러 발생!
    // TO BE
    type SuperPrint = {
      <Potato>(arr: Potato[]): void;
    };
    const superPrint: SuperPrint = (arr) => arr[0];
    superPrint([true, false, 3, 4]); //작동!
    ```

### Classes

- js에서는 `this.name = name` 으로 선언해야하지만 ts에서는 `name: string`으로 선언하면 됨.
- `private` : JS로 변환시에 가져가지지 않고 내부에서 호출시에도 응답하지 않는다. 하지만 JS에서는 호출에도 사용 가능. 타입스크립트에서 경고용으로 생각하면 좋다. 만약 속성을 프라이빗으로 만들었다면 익스텐드로 값을 상속받는다고 하더라도 밖의 상속자가 접근할 수 없다.
- `protected` : 다른 자식 클래스에서 사용하고싶다면 이걸 사용하면 된다.
- `public` : private 반대.
- `추상클래스` : 다른 클래스가 상속받을 수 있음. 상속만 가능 `abstract`.
- `추상메소드` : 추상클래스를 상속받는 모든것을 구현 해야하는 메소드
- 접근 가능한 위치
  ```
  구분        선언한 클래스 내  상속받은 클래스 내  인스턴스
  private         ⭕　　　　　  　　❌　　　　  　 ❌
  protected       ⭕　　　　　　  　⭕　　　  　　 ❌
  public          ⭕　　　　　　  　⭕　　　  　　 ⭕
  ```
- ```Typescript
    abstract class User {
      constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
      ) {}
      abstract getNickName():void  //추상메소드

      getFullName() {
        return `${this.firstName}`;
      }
    }
    class Player extends User {
      getNickName() {
      }
    }
  ```

- 직접적으로 인스턴스를 만들수는 없다. (위에것에 선언시)
  `const dabin = new User("dabin", "kim", "DBK"); //ERROR!`
![image](https://user-images.githubusercontent.com/75190062/218486270-cf879138-0b15-4b2e-bbbf-46881bd7fe01.png)

