/* ES6 ECMAScript 2015 highlight*/

/* 변수 타입 구조도 */
numberType: Number;
strigType: String;
booleanType: Boolean;
symbolType: Symbol;
objectType: Object;
fnType: Function;
array: Array;
date: Date;
regexp: RegExp;
//null;
//undefined


/* 1. block 단위 변수
const : 재정의가 불가능한 변수
let : 변경이 가능한 변수
function과 arrow function의 차이
function 안에서 this는 자신이 종속된 객체를 가리킴
arrow function은 자신이 종속된 인스턴스를 가리킴
closer 개념 : 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 ‘기억한다’.
*/

// closer
function hello(name) {
  var _name = name;
  return function() {
    console.log('Hello, ' + _name);
  };
}

var hello1 = hello('승민');
var hello2 = hello('현섭');
var hello3 = hello('유근');

hello1(); // 'Hello, 승민'
hello2(); // 'Hello, 현섭'
hello3(); // 'Hello, 유근'

// 클로저를 통해 내부 변수를 참조하는 동안에는 내부 변수가 차지하는 메모리를 GC가 회수하지 않는다. 
// 따라서 클로저 사용이 끝나면 참조를 제거하는 것이 좋다.
hello1 = null;
hello2 = null;
hello3 = null;

/*----------------------------------------------------------------------------------------*/

/* 2. string의 새로운 메서드 
.startsWith()
.endsWith()
.includes()
*/


/*----------------------------------------------------------------------------------------*/

/* 3. for-of 순회 */
// for-in의 문제 : 오브젝트의 상위에 추가된 프로토타입 객체들도 표시됨
// for-in 은 idx
// for-of 는 value
// 배열뿐 아니라 문자열을 character 단위로 순회

/*----------------------------------------------------------------------------------------*/

/* 4. spread operator - 배열의 복사 */
// ...arr - 배열을 펼침
let arr = [1, 2, 3];
let arr2 = [...arr]; // 참조를 끊고 새로운 배열을 복사
sum.apply(null, arr) = sum(...arr)

/*----------------------------------------------------------------------------------------*/

/* 5.from 메서드 */
let arr = Array.from(arguments); // function에서 인자값을 arguments 배열의 형태의 객체로 받아오지만 배열은 아니기 때문에 배열로 변환 시 사용됨

/*----------------------------------------------------------------------------------------*/

/* 6.간단히 객체생성 */

const key = 'keyName';
const object = {
  [key]: 'value'
};  // object = { 'keyName' : 'value'}

function getObj() {
  const name = "crong";

  const getName = function () {
    return name;
  };
  const setName = function (newName) {
    name = newName;
  };
  //ES6 이전
  return {
    getName: getName,
    setName: setName
  };
  //ES6 이후
  return { getName, setName };
}


const name = 'crong';
const obj = {
  name,
  getName() {
    return name;
  },
  setName(newName) {
    name = newName;
  }

}

/*----------------------------------------------------------------------------------------*/

/* 7. Destructuring Array */

let data = [1, 2, 3, 4];
let [a, , c] = data;

console.log(a, c);

/*----------------------------------------------------------------------------------------*/

/* 8. Destructuring Object */

let obj = {
  name: "crong",
  address: "Korea",
  age: 10
}

let { name, age } = obj;
console.log(name, age);

let { name: myName, age: myAge } = obj;
console.log(myName, myAge);

/*----------------------------------------------------------------------------------------*/

/* 9. Destructuring 활용 JSON파싱 */
var news = [
  {
    "title": "sbs",
    "imgurl": "http://",
    "newslist": [
      "뉴스1",
      "뉴스2",
      "뉴스3"
    ]
  },
  {
    "title": "mbc",
    "imgurl": "http://2",
    "newslist": [
      "뉴스a",
      "뉴스b",
      "뉴스c"
    ]
  }
];
let [, mbc] = news;
console.log(mbc);
let { title, imgurl } = mbc;
console.log(title, imgurl);


let [, { title: title2, imgurl: imgurl2 }] = news;
console.log(title2, imgurl2);

/*----------------------------------------------------------------------------------------*/

/* 10. Destructuring 활용 Event 객체전달 */
var news = [
  {
    "title": "sbs",
    "imgurl": "http://",
    "newslist": [
      "뉴스1",
      "뉴스2",
      "뉴스3"
    ]
  },
  {
    "title": "mbc",
    "imgurl": "http://2",
    "newslist": [
      "뉴스a",
      "뉴스b",
      "뉴스c"
    ]
  }
];


function getNewsList([, { newslist }]) {
  console.log(newslist);
}

getNewsList(news);


//이벤트 할당
document.querySelector("div").addEventListener("click", function (evt) {
  console.log(evt.target.tagName);
});

document.querySelector("div").addEventListener("click", function ({ target }) {
  console.log(target.tagName);
});

document.querySelector("div").addEventListener("click", function ({ target, type }) {
  console.log(target.tagName, type);
});

/*----------------------------------------------------------------------------------------*/

/* 11. Set으로 유니크한 배열 만들기 */

let mySet = new Set();
console.log(toString.call(mySet));

//set : 중복없이 유일한 값을 저장, 이미 존재하는지 체크할 때 유용

mySet.add("a");
mySet.add("b");
mySet.add("a");

mySet.forEach(function (v) {
  console.log(v);
});
//a,b

console.log(mySet.has("a"));

/*----------------------------------------------------------------------------------------*/

/* 12.WeakSet으로 효과적으로 객체타입저장하기 */
//weakset
//참조를 가지고 있는 객체만 저장이 가능하다.
//객체 형태를 중복없이 저장하려고 할 때 사용

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
let ws = new WeakSet();

//ws.add(11); //Invalid value used in weak set
//ws.add("11"); //Invalid value used in weak set
//ws.add(null); //Invalid value used in weak set
ws.add(function () { });

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null; // arr이 Garbage Collection 대상이 됨
arr2 = null; // arr이 Garbage Collection 대상이 됨

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));

/*----------------------------------------------------------------------------------------*/

/* 13. Map & WeeekMap 추가정보를 담은 객체저장하기 */

//Map & WeakMap
//Array -> set, weakset
//Object -> map, weakmap

//map은 key/value

let wm = new WeakMap();
let myfun = function () { };
//이 함수가 얼마나 실행됐는지 확인할 때

wm.set(myfun, 0);

console.log(wm);

let count = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(myfun);
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun)); // 10
myfun = null; //Gabage Collection 대상이 됨
console.log(wm.get(myfun)); // undefined

/*----------------------------------------------------------------------------------------*//*
/* 14.WaekMap 클랙스 인스턴스 변수 보호하기 */

//WeakMap 활용

const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, { height, width });
}

Area.prototype.getArea = function () {
  const { height, width } = wm.get(this);
  return height * width;
}

let myarea = new Area(10, 20);
console.log(myarea.getArea()); //200
console.log(myarea.height); //undefined
console.log(wm.has(myarea)); //true
console.log(wm.get(myarea));

myarea = null; //gc가 됨

console.log(wm.has(myarea));//false


const obj = {};

function Area2(height, width) {
  obj.height = height;
  obj.width = width;
}


Area.prototype.getArea = function () {
  const { height, width } = wm.get(this);
  return height * width;
}


let myobj = new Area2(10, 20);
console.log(myobj);
console.log(obj);

myobj = null; // gc가 되지 않음 ? 정확한 결과는 모름. 관련정보필요.

console.log(obj);

/*----------------------------------------------------------------------------------------*/

/* 15. Tagged Template literals */
const data = [
  {
    name: '1',
    order: true,
    items: ['a', 'b', 'c']
  },
  {
    name: '2',
    order: false
  }
]
// json으로 응답을 받고
// javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 dom에 추가!
// 데이터 + HTML 문자열의 결합이 필요하기 때문에.
//Tagged template literals
function fn(tags, name, items) {
  console.log(tags);
  if (typeof items === "undefined") {
    items = "<span style='color:red;'>주문가능한 상품이 없습니다.</span>";
  }

  return (tags[0] + name + tags[1] + items + tags[2]);
}
data.forEach((v) => {
  let template = fn`<div>welcome ${v.name} !! </div>
    <h4>주문가능항목</h4><div>${v.items}</div>`;

  console.log(template);
  document.querySelector("#message").innerHTML += template;
})

/*----------------------------------------------------------------------------------------*/

/* 16. Arrow function 활용 */

//arrow function 

setTimeout(function () {
  console.log("settimeout");
}, 1000);

setTimeout(() => {
  console.log("settimeout");
}, 1000);

const newArr = [1, 2, 3, 4, 5].map(function (value, index, object) {
  return value * 2;
});

const newArr2 = [1, 2, 3, 4, 5].map((v) => {
  return v * 2;
});

const newArr3 = [1, 2, 3, 4, 5].map((v) => v * 2);

[1, 2, 3, 4, 5].filter((v) => (v > 5));

[1, 2, 3, 4, 5].sort((a, b) => (a - b));

[1, 2, 3, 4, 5].reduce((prev, next) => (prev + next));

[1, 2, 3, 4, 5].join();

/*----------------------------------------------------------------------------------------*/

/* 17. Arrow function 의 this context */

//this context Arrow function
const myObj = {
  runTimeout() {
    setTimeout(function () {
      this.printData();
    }.bind(this), 200);
  },

  printData() {
    console.log("hi codesquead!");
  }
}
myObj.runTimeout();
const myObj2 = {
  runTimeout() {
    setTimeout(() => {
      this.printData();
    }, 200);
  },

  printData() {
    console.log("hi codesquead!");
  }
}
myObj2.runTimeout();


// tag click 이벤트 시 기존 bind 방식과 Arrow function 비교
const el = document.querySelector("p");

el.addEventListener("click", function (evt) {
  console.log(this);
});

const myObj = {
  register() {
    el.addEventListener("click", function (evt) {
      this.printData();
    }.bind(this));
  },

  printData() {
    console.log('clicked!!');
  }
}
myObj.register();


const myObj2 = {
  register() {
    el.addEventListener("click", (evt) => {
      this.printData(evt.target);
    });
  },

  printData(el) {
    console.log('clicked!!', el.innerText);
  }
}
myObj2.register();

/*----------------------------------------------------------------------------------------*/

/* 18. function default parameters */

//defualt parameters

function sum(value, size = { value: 1 }) {
  return value * size.value;
}
console.log(sum(3, { value: 3 }));

/*----------------------------------------------------------------------------------------*/

/* 19.rest parameter */

//rest parameters
//es6 이전방식
function checkNum() {
  const argArray = Array.prototype.slice.call(arguments);
  console.log(toString.call(argArray));

  const result = argArray.every((v) => typeof v === "number");
  console.log(result);
}

checkNum(10, 2, 3, 4, 5, "55");

//es6 rest parameters
function checkNum2(...argArray) {//매개변수에 spread operator 값을 받으면 배열로 받는다는 의미
  console.log(toString.call(argArray));

  const result = argArray.every((v) => typeof v === "number");
  console.log(result);
}

checkNum2(10, 2, 3, 4, 5, "55");

/*----------------------------------------------------------------------------------------*/

/* 20. class 를 통한 객체생성 */

//ES6 이전 function
function Health(name) {
  this.name = name;
}

Health.prototype.showHealth = function () {
  console.log(this.name + "님 안녕하세요");
}

const h = new Health("a");
h.showHealth();

//ES6 Class 모습만 class일 뿐 function으로 만들어지는 것 - 가독성향상
class Health2 {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
  }

  showHealth() {
    console.log(this.name + "님 안녕하세요")
  }
}

const myHealth = new Health2("b");
myHealth.showHealth();

/*----------------------------------------------------------------------------------------*/

/* 21. Object assign으로 JS 객체만들기 */

const healthObj = {
  showHealth: function () {
    console.log("오늘 운동시간 : " + this.healthTime);
  }
}

//prototype 객체 생성
const myHealth = Object.create(healthObj);

//객체 변수값 할당
myHealth.healthTime = "11:20";
myHealth.name = "crong";

myHealth.showHealth();



//Object assign 방식
const myHealth2 = Object.assign(Object.create(healthObj), {
  name: "crong",
  healthTime: "11:20"
});

myHealth2.showHealth();

/*----------------------------------------------------------------------------------------*/

/* 22. Object assign으로 immutable 객체만들기 (객체 복사) */

const previousObj = {
  name: "crong",
  healthTime: "11:20"
};

const myHealth = Object.assign({}, previousObj, {
  "healthTime": "12:30",
  "name": "honux",
  "age": "99"
});

const myHealth2 = Object.assign({}, previousObj, {});

console.log(previousObj === myHealth); // false

console.log(previousObj === myHealth2); // 값은 같지만 객체가 다르기 때문에 false

/*----------------------------------------------------------------------------------------*/

/* 23. Object setPrototypeOf로 객체만들기 */

//Object.setPrototypeOf(obj, proto)

const healthObj = {
  showHealth: function () {
    console.log("오늘 운동시간 : ", this.healthTime);
  },
  setHealth: function (newTime) {
    this.healthTime = newTime;
  }
};

const myHealth = {
  name: "crong",
  healthTime: "11:20"
};

Object.setPrototypeOf(myHealth, healthObj);
console.log("myHealth is ", myHealth);

const myHealth2 = Object.setPrototypeOf({
  name: "crong",
  healthTime: "11:20"
}, healthObj);

console.log("myHealth2 is ", myHealth2);

/*----------------------------------------------------------------------------------------*/

/* 24. Object setPrototypeOf로 객체간 prototype chain 생성하기 */

//Object.setPrototypeOf(obj, proto)

const healthObj = {
  showHealth: function () {
    console.log("오늘 운동시간 : ", this.healthTime);
  },
  setHealth: function (newTime) {
    this.healthTime = newTime;
  }
};

//child obj
const healthChildObj = {
  getAge: function () {
    return this.age;
  }
}

Object.setPrototypeOf(healthChildObj, healthObj);

const childObj = Object.setPrototypeOf({
  age: 22
}, healthChildObj);

childObj.setHealth("11:55");
childObj.showHealth();

/*----------------------------------------------------------------------------------------*/

/* 25,26.module(exprot&import)의 이해 및 서비스코드구현 방법 */

//app.js
import _ from "./utility"
import CodeSquad from "./CodeSquad"

_.log("my first test data");

const cs = new CodeSquad();
_.log(`current hour is ${cs.getCurrentHour()}`);
_.log(`lectures of Codsquead are ${cs.getLectures()}`);

//CodeSquad.js
export default class CodeSquad {
  constructor(props) {
    this.lectures = ['java', 'iOS'];
  }

  getLectures() {
    return this.lectures;
  }

  getCurrentHour() {
    return (new Date).getHours();
  }

  getTime() {
    return Date.now();
  }
}


//utility.js
const _ = {
  log(data) {
    if (window.console) console.log(data);
  }
}

export default _; //default와 const는 같이 사용이 불가능하여 별로도 default 

/*----------------------------------------------------------------------------------------*/

/* 27. Proxy로 interception기능구현 */

//Proxy
const myObj = { name: 'crong', changedValue: 0 };
const proxy = new Proxy(myObj, {
  get: function (target, property, receiver) {
    console.log('get value');
    return Reflect.get(target, property);//target[property];
  },
  set: function (target, property, value) {
    console.log('set value');
    target['changedValue']++
    target[property] = value;
  }
});

console.log(proxy.name);
myObj.name = 'test';
console.log(proxy.name);
console.log(myObj.name);
proxy.name = 'change';
proxy.name = 'change2';
console.log(proxy.name);
console.log(myObj.name);
console.log(proxy.changedValue);
console.log(myObj.changedValue);


/*----------------------------------------------------------------------------------------*/

/* 28. Promise */
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  console.log(thisPromiseCount + ') 시작 (동기적 코드 시작)');
  // 새 프로미스 생성 - 프로미스의 생성 순서를 전달하겠다는 약속을 함 (3초 기다린 후)
  var p1 = new Promise(
    // 실행 함수는 프로미스를 이행(resolve)하거나
    // 거부(reject)할 수 있음
    function (resolve, reject) {
      console.log(thisPromiseCount + ') 프로미스 시작 (비동기적 코드 시작)');
      
      // setTimeout은 비동기적 코드를 만드는 예제에 불과
      window.setTimeout(
        function () {
          // 프로미스 이행 !
          resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000);

      window.setTimeout(
        function () {
          // 프로미스 에러 !
          reject(thisPromiseCount);
        }, Math.random() * 2000 + 1000);
    }
  );

  // 프로미스를 이행했을 때 할 일은 then() 호출로 정의하고,
  // 거부됐을 때 할 일은 catch() 호출로 정의
  p1.then(
    // 이행 값 기록
    function (val) {
      console.log(thisPromiseCount + ') 프로미스 이행 (비동기적 코드 종료)');
    })
    .catch(
      // 거부 이유 기록
      function (reason) {
        console.log(reason + ') 프로미스 거부 (비동기적 코드 종료)');
      });

  console.log(thisPromiseCount + ') 프로미스 생성 (동기적 코드 종료)');
}


/*----------------------------------------------------------------------------------------*/

/* 29. async & await */
//주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작합니다.

function fetchUser() {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  return fetch(url).then(function(response) {
    return response.json();
  });
}

function fetchTodo() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  return fetch(url).then(function(response) {
    return response.json();
  });
}

async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}