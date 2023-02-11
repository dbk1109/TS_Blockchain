//타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
//add: 단어를 추가함
//get: 단어의 정의를 반환함
//delete: 단어를 삭제함
//update: 단어를 업데이트 함
//showAll: 딕셔너리의 단어를 모두 프린트함
//count: 딕셔너리 단어들의 총 수를 반환함

//자바스크립트에서 클래스를 만들기 위해서는 클래스 내부에 반드시 constructor() 생성자 함수를 정의해야 하고 그 내부에 필요한 변수들을 정의해야 합니다. 예제는 다음을 참고해보세요. 또한, 생성자 함수 내부의 변수를 위한 타입도 따로 만들어야 합니다.
//변수들은 public, private 혹은 protected로 접근 제한자를 설정할 수 있습니다. 어떻게 사용하는 것이 좋을지 고민을 해보시기 바랍니다.
//add 메소드는 먼저 배열 안에 해당 원소가 있는지 먼저 판별 후 없다면 해당 단어와 정의를 함께 추가하는 로직을 세워보세요. 객체 속성에 접근하는 방법도 함께 참조해보세요.
//get 메소드는 단어의 정의를 return해야 합니다.
//delete 메소드는 단어를 삭제시킵니다. delete 연산자를 이용해세요.
//update 메소드는 단어를 업데이트 해야 합니다. 업데이트 하려면 제일 먼저 무엇을 해야 할까요? (add 메소드 참고)
//showAll 메소드는 모든 단어들을 프린트하면 됩니다. 단어: 정의 형태로 객체에 담긴다면 단어들을 어떻게 빼올 수 있을까요? 그리고 그 빼온 단어들을 어떻게 하나씩 출력시킬 수 있을까요? Object.keys() 메소드와 forEach() 메소드를 참조해주세요.
//count 메소드는 딕셔너리의 총 수를 반환해야 합니다. length를 한 번 이용해보세요.
//모든 메소드는 적절하게 파라미터를 집어 넣고 각각의 파라미터에 올바른 타입을 집어넣어야 합니다.

const fruits = [
  {
    word: "사과",
    def: "빨갛고 동그란 과일의 일종",
  },
  {
    word: "바나나",
    def: "노랗고 길쭉한 껍질이 있는 과일의 일종",
  },
  {
    word: "키위",
    def: "겉은 갈색의 털이 달린 껍질로 쌓여있지만 속은 초록색에 까만 씨가 많은 과일",
  },
];

class Dict {
  constructor(private word: string, private def: string) {}

  add(word: string) {
    const fruit = fruits.find((fruit) => fruit.word === word);
    console.log(fruit);
    if (fruit) {
      return `이미 사전에 있는 단어입니다.`;
    } else {
      return this.def;
    }
  }
  get() {
    return this.def;
  }
  //  delete() {
  //    return;
  //  }
  //  update() {
  //    return;
  //  }
  //  showAll() {
  //    return;
  //  }
  //  count() {
  //    return;
  //  }
  //}
}

let 사과 = new Dict("사과", "빨강");
let 바나나 = new Dict("바나나", "바나saas나");
console.log(fruits[]);
console.log(바나나.add("바나나"));
