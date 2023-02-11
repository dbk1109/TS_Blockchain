// https://ordinary-code.tistory.com/22 참고

/* Class 기본 문법 */
class Person {}
let kim1 = new Person();
console.log(kim1);
//// 출력
// Person {}
//
//
//
/* Class 초기값 설정해주기 */
class Person {
  constructor(name, age, city) {
    console.log("constructor");
    this.name = name;
    this.age = age;
    this.city = city;
  }
}
let kim2 = new Person("kim", "24", "seoul");
console.log(kim2);
//// 출력
// constructor;
// Person {name: "kim", age: "24", city: "seoul"}
//
//
//
/* Class 메서드 사용하기 */
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  //메서드생성
  nextYearAge() {
    return Number(this.age) + 1;
  }
}
let kim3 = new Person("kim", "24", "seoul");
console.log(kim3.nextYearAge());
//내용 추가 가능
kim3.eat = function () {
  return "apple";
};
console.log(kim3.eat());
//// 출력
// 25
// apple
// 이렇게 밖에서 추가한 class는 추후 새로운 new Person class로 새로운 객체를 만들었을 때는 호출하여 사용할 수 없다
//
//
//
/* 상속(extends) */
// class에서도 상속을 이용하면 기존의 class의 값을 모두 접근하여 사용할 수 있다.
// 상속은 extends를 써서 이용할 수 있다.
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  //메서드생성
  nextYearAge() {
    return Number(this.age) + 1;
  }
}
class introducePerson extends Person {
  introduce() {
    return `저는 ${this.city}에 사는 ${this.name} 입니다.`;
  }
}
let kim4 = new introducePerson("kim", "24", "seoul");
console.log(kim4.introduce());
//// 출력
// 저는 seoul에 사는 kim 입니다.
//
//
//
/* super 사용하기 */
// 하위 클래스에서만 사용하고 싶은 값이 있을 수도 있다.
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  //메서드생성
  nextYearAge() {
    return Number(this.age) + 1;
  }
}
class introducePerson extends Person {
  constructor(name, age, city, futureHope) {
    super(name, age, city);
    this.futureHope = futureHope;
  }
  introduce() {
    return `저는 ${this.city}에 사는 ${this.name} 입니다. 
            내년엔 ${super.nextYearAge()}살이며,
            장래희망은 ${this.futureHope} 입니다.`;
  }
}
let kim5 = new introducePerson("kim", "24", "seoul", "개발자");
console.log(kim5.introduce());
//// 출력
// 저는 seoul에 사는 kim 입니다.
// 내년엔 25살이며,
// 장래희망은 개발자 입니다.
//
//
//
