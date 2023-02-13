/*
  타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
  add: 단어를 추가함
  get: 단어의 정의를 반환함
  delete: 단어를 삭제함
  update: 단어를 업데이트 함
  showAll: 딕셔너리의 단어를 모두 프린트함
  count: 딕셔너리 단어들의 총 수를 반환함

  자바스크립트에서 클래스를 만들기 위해서는 클래스 내부에 반드시 constructor() 생성자 함수를 정의해야 하고 그 내부에 필요한 변수들을 정의해야 합니다. 예제는 다음을 참고해보세요. 또한, 생성자 함수 내부의 변수를 위한 타입도 따로 만들어야 합니다.
  변수들은 public, private 혹은 protected로 접근 제한자를 설정할 수 있습니다. 어떻게 사용하는 것이 좋을지 고민을 해보시기 바랍니다.
  add 메소드는 먼저 배열 안에 해당 원소가 있는지 먼저 판별 후 없다면 해당 단어와 정의를 함께 추가하는 로직을 세워보세요. 객체 속성에 접근하는 방법도 함께 참조해보세요.
  get 메소드는 단어의 정의를 return해야 합니다.
  delete 메소드는 단어를 삭제시킵니다. delete 연산자를 이용해세요.
  update 메소드는 단어를 업데이트 해야 합니다. 업데이트 하려면 제일 먼저 무엇을 해야 할까요? (add 메소드 참고)
  showAll 메소드는 모든 단어들을 프린트하면 됩니다. 단어: 정의 형태로 객체에 담긴다면 단어들을 어떻게 빼올 수 있을까요? 그리고 그 빼온 단어들을 어떻게 하나씩 출력시킬 수 있을까요? Object.keys() 메소드와 forEach() 메소드를 참조해주세요.
  count 메소드는 딕셔너리의 총 수를 반환해야 합니다. length를 한 번 이용해보세요.
  모든 메소드는 적절하게 파라미터를 집어 넣고 각각의 파라미터에 올바른 타입을 집어넣어야 합니다.
*/

type Words = {
  [key: string]: string;
};
class Word {
  constructor(public term: string, public def: string) {}
}
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(x: Word) {
    if (this.words[x.term] === undefined) {
      this.words[x.term] = x.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(x: Word) {
    delete this.words[x.term];
  }
  update(x: Word, change: string) {
    if (this.words[x.term] != undefined) {
      this.words[x.term] = change;
    }
  }
  showAll() {
    const keys = Object.keys(this.words) as (keyof typeof this.words)[];

    keys.forEach((e) => {
      console.log(e, this.words[e]);
    });
  }
  count() {
    return Object.keys(this.words).length;
  }
}

const 사과 = new Word("사과", "빨갛고 동그란 과일의 일종");
const 바나나 = new Word("바나나", "노랗고 길쭉한 껍질이 있는 과일의 일종");
const 키위 = new Word(
  "키위",
  "겉은 갈색의 털이 달린 껍질로 쌓여있지만 속은 초록색에 까만 씨가 많은 과일"
);
const dict = new Dict();

dict.add(사과);
dict.add(바나나);
dict.add(키위);
dict.update(사과, "가끔은 연두색인 친구");
dict.showAll();
dict.count();

/*
변수 타입 생성 및 constructor() 생성자 메소드 정의
Dict라는 이름의 클래스를 생성하시기 전에 제일 먼저 Dict 클래스에 들어갈 단어들 (여기서는 words라고 정했습니다) 객체에 대한 타입을 설정해주셔야 합니다.
여기서 words 객체에 들어갈 타입을 Words라는 이름으로 지정해주었고, 인덱스 서명이라는 것을 통해 words 객체에 어떤 식으로 들어가는지 지정해주었습니다.
여기서 key는 들어갈 단어를 의미하고 string 타입으로 지정하였습니다. 그리고 해당 단어에 대한 정의 또한 string으로 지정하였습니다.

words 객체는 함부로 바뀌면 안 되므로 외부 그 어디서든 접근을 못 하게끔 하는 것이 좋을 것 같습니다. 따라서 접근 제한자를 private을 사용하였습니다.
자바스크립트 (혹은 타입스크립트)에서 클래스를 정의하기 위해서는 constructor() 생성자 메소드를 반드시 정의해야 합니다. 클래스 내부에서 words라는 객체에 접근할 수 있도록 this 연산자를 이용하여 빈 객체를 할당해주었습니다. 이것이 단어가 들어갈 우리의 딕셔너리인 것입니다.

메소드 정의
add메소드는 제일 먼저 해당 딕셔너리에 똑같은 단어가 있는지 알아봐야 합니다. add의 경우 없는 경우에만 단어를 추가할 수 있으므로 if문에 ! 연산자를 써서 없는지 체크 후 없다면 파라미터로 제공한 term을 key로 전달 후 파라미터로 전달한 definition을 값으로 대입합니다.
get 메소드는 해당 단어만 반환만 하면 됩니다. 그렇기에 단순히 this.words[term]으로 값을 접근한 후 그것을 return 해주었습니다.
delete 메소드는 해당 단어를 삭제해야 합니다. delete 연산자를 이용하면 해당 객체 요소를 삭제할 수 있습니다.
update 메소드는 해당 단어를 새 정의로 업데이트 해야 합니다. add 메소드 로직과 동일합니다.
showAll() 메소드가 좀 복잡했을텐데요...
먼저 [Object.keys()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)를 이용하여 words 객체 안의 모든 키값들을 배열 형태로 가져옵니다.
두번째로 forEach() 메소드를 이용하여 모든 원소에 대해서 어떻게 할건지에 대한 로직을 설정합니다. 따라서 콜백 함수를 파라미터로 전달해준 후, 각각의 단어(term)에 대해서 템플릿 리터럴을 이용하여 각각의 배열의 원소를 프린트합니다.
count 메소드는 총 단어의 수를 return만 하면 됩니다.
여기서 키값들의 총 길이만 반환하면 되므로 length를 이용했습니다.
*/