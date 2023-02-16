//classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.
//LocalStorage API
//Geolocation API

//LocalStorage API:
//Use abstract classes and generics. 추상 클래스와 제네릭을 사용하세요.
//Usage:
//localStorage.setItem(<key>, <value>)
//localStorage.getItem(<key>)
//localStorage.clearItem(<key>)
//localStorage.clear()
//Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Storage

//Geolocation API:
//overloading을 사용하세요.
//geolocation.getCurrentPosition(successFn);
//geolocation.getCurrentPosition(successFn, errorFn);
//geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
//geolocation.watchPosition(success);
//geolocation.watchPosition(success, error);
//geolocation.watchPosition(success, error, options);
//geolocation.clearWatch(id);
//Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation

//LocalStorage API
//LocalStorage는 사용자 로컬 컴퓨터에 저장되는 공간 중 하나로 저장되는 데이터는 key값과 value값의 쌍 즉, key: value 값으로 저장이 됩니다.

//핵심 키워드는 추상화(abstract) 그리고 제네릭입니다.

//타입 만들기: interface는 type과 더불어 꽤 많이 사용되는 타입 정의 키워드이며 상속에 굉장히 용이하다는 특징이 있습니다. 인풋 타입에 따라 아웃풋 타입이 유동적으로 변할 수 있도록 제네릭과 함께 적용해 보세요.
//추상화(abstract)는 어떤 하위 클래스에 상속시킬 때 주로 사용이 되며 추상화 클래스 자체로는 인스턴스를 생성할 수 없습니다. 클래스 뿐만이 아니라 클래스 내부의 필드와 메소드에도 적용이 가능합니다. 어떤 부분에 추상화를 적용시킬지는 여러분들이 잘 판단해서 해보시기 바랍니다. 또한, 추상화 클래스에도 제네릭을 적용시킬 수 있습니다. 마찬가지로 클래스 내부 메소드에 제네릭을 어떻게 적용시키면 좋을지 생각해보세요.
//추상화 클래스를 상속시킨 새로운 클래스를 정의한 후 내부 필요한 메소드들을 정의해보세요. 추상화 클래스를 상속시킨 이 새로운 클래스가 실제 API로써 사용될 클래스가 됩니다. 사용법에 적혀 있는 setItem(), getItem(), clearItem() 및 clear()들은 전부 LocalStorage와 관련있는 메소드입니다. 관련 공식 문서는 여기를 확인해주세요.
//GeoLocation API
//GeoLocation API는 로컬 컴퓨터의 위치 정보를 가져오는 유용한 API입니다. 공식 문서의 링크를 통해 어떤 메소드들이 있는지 살펴보시기 바랍니다.

//핵심 키워드는 overloading입니다. 특히 함수 overloading은 동일한 함수 이름이되 서로 다른 타입의 매개변수를 받는 것을 의미합니다. 따라서, GeoLocation API 안에 어떤 필드들과 어떤 메소드들이 있는지 유심히 살펴보시고 어떤 식으로 타입을 적용시킬지 고민이 필요한 챌린지입니다.

//GeoLocation에 사용될 필드와 메소드에 적용될 수 있는 타입들을 정의해보세요.
//overloading을 적용될 수 있도록 GeoLocation API에 있는 기존 메소드의 이름을 쓰되 새로 만든 타입을 중복 시켜 적용해보세요.
//사용법에 있는 getCurrentPosition(), watchPosition() 안에 Fn이 붙어 있는 파라미터들은 콜백 함수를 의미하며 나머지들은 전부 객체를 가리킵니다. 이에 유의하여 타입을 설정해보시기 바랍니다.

interface SStorage<T> {
  [key: string]: T;
}

abstract class LocalStorage<T> {
  private storage: SStorage<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

type CustomPosition = {
  (successFn: string, errorFn?: string, optionsObj?: object): void;
  (success: string, error?: string, options?: object): void;
  (id: object): void;
};

declare function getCurrentPosition(): CustomPosition;
declare function watchPosition(): CustomPosition;
declare function clearWatch(): CustomPosition;

//TA's 정답 해설
//개요
//이번 챌린지는 그간 배웠던 제네릭과 타입의 다양한 선언 방법 그리고 추상화 클래스를 복합적으로 다뤄볼 수 있는 챌린지였습니다. 이번 챌린지를 통해 여러분들은
//추상화 클래스와 제네릭을 함께 가공하여 새로운 API를 만들 수 있습니다.
//overloading을 이용하여 다양한 타입으로 이루어진 API를 만들 수 있습니다.
//해설
//LocalStorage API
//먼저 로컬 스토리지에 들어갈 아이템들의 타입을 설정해주어야 합니다. 이번에는 interface를 사용해보도록 하겠습니다. interface의 경우 상속이 굉장히 용이한 타입 식별자입니다.
//로컬 스토리지 내부에 저장되는 데이터는 key: value쌍의 값으로 저장이 됩니다. 또한, 인풋의 타입이 어떻게 되느냐에 따라 아웃풋의 타입도 유동적으로 변할 수 있도록 제네릭을 함께 설정해주어 Items라는 타입을 만들었습니다.
//다음으로 추상화 클래스를 만들어 볼 차례입니다. 추상화를 시킬 땐 abstract라는 키워드를 사용합니다. 앞서 만들었던 Items라는 타입을 protected 키워드를 이용해 오직 하위 클래스에서만 접근 가능하도록 items라는 객체 필드에 타입을 지정해주었습니다. 그리고 나머지 메소드들 또한 전부 abstract로 연결시켜주었으며, 제네릭을 활용하였습니다.
//마지막으로 실제 API로 사용될 SuperStorage라는 임의의 이름을 가진 새로운 클래스를 만들고 extends라는 키워드를 이용해 앞서 만든 추상화 클래스를 상속시켜 주었습니다. 모범 답안에서는 모든 메소드에 대해 접근이 가능하도록 public 키워드를 사용해주었습니다.
//GeoLocation API
//overloading을 활용하는 챌린지였습니다. overloading은 글자 그대로 이름은 동일하되 서로 다른 타입들을 덧붙이는 것이라고 이해하면 쉽습니다.
//먼저 GeolocationCoordinates의 타입을 설정해주겠습니다. GeoLocation은 사용자의 로컬 컴퓨터의 위치를 좌표 형식으로 나타내줍니다. 사용법에 있는 메소드로 전달된 파라미터들 중에 각각 optionsObj, errors, option 등은 전부 객체 형태인 것을 유추할 수 있습니다. 그렇기 때문에 각각 GeoOptions, GeoError, GeolocationCoords 그리고 Position이라는 타입을 각각 만들어서 필요한 필드들이 담긴 타입을 만들었습니다.
//다음으로 successFn, errorFn의 콜백 함수에 대한 타입을 설정할 차례입니다. 앞서 만든 GeoOptions, GeoError, GeolocationCoords 그리고 Position을 successFn과 errorFn의 파라미터에 적용시킬 타입으로 사용합니다. 그렇게 SuccessFunction과 ErrorFunction이라는 타입을 만들었습니다.
//이후, 사용법에 제시된 getCurrentPosition()과 watchPosition() 메소드의 전체 타입을 지정하도록 하겠습니다. 앞서 만든 SuccessFunction 타입과 ErrorFunction을 연결 지을 수 있도록 GetCurrentPosition과 WatchCurrentPosition 타입을 만든 후, return되는 타입을 설정해주고, 이를 하나로 묶은 GeolocationAPI라는 interface를 만들었습니다. 추후에 상속을 해야하니까요.
//마지막으로 Geolocator라는 클래스를 만들었습니다. 이것이 실제로 API로 사용될 클래스이며 GeolocationAPI 타입을 연결합니다. getCurrentPosition()과 watchPosition() 메소드에서 전달되는 error와 options는 없을 수도 있기 때문에 ? 연산자를 통해 필수가 아닌 선택적인 요소로 바꾸었습니다.
