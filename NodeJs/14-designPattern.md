# 핵심 디자인 패턴

출처 : https://blog.canapio.com/37, https://blog.risingstack.com/fundamental-node-js-design-patterns/

> 디자인 패턴은 흔히 발생하는 문제를 재사용 가능하게 일반화하여 해결하는 것    
> 노드에서도 구현하고 있는 디자인 패턴이 되게 많다    
알아갈수록 노드의 찐매력을 알 수 있다.   


## Singleton

Node의 모듈 시스템은 기본적으로 싱글톤이다.    
require로 해당 모듈을 불러올 때, 이 객체를 얼마나 사용하든 상관없이 오직 하나의 객체로 존재하게 된다.


## Observer

한 객체의 상태가 바뀔 때 해당 객체를 의존하고 있는 observer들에게 그 변경상태를 알린다. 
Observer 패턴을 구현하려면 EventEmitter를 끌어와 사용해야한다. 

```javascript
// MyFancyObservable.js 
var util = require('util'); 
var EventEmitter = require('events').EventEmitter; 
function MyFancyObservable() { EventEmitter.call(this); } 
util.inherits(MyFancyObservable, EventEmitter);

```

해당 기능을 유용하게 만들기 위해서 몇 가지 기능을 추가하면 된다. 

```javascript
MyFancyObservable.prototype.hello = function (name) { 
  this.emit('hello', name);
};
```

```javascript
MyFancyObservable.prototype.hello = function (name) { this.emit('hello', name); };

```

## Factory 
팩토리 패턴은 객체를 생성하기 위한 인터페이스를 정의해 놓고,
해당 객체의 생성은 만드는 쪽에서 (서브 클래스)에서 결정하게 하는 것 
```javascript
function MyClass (options) { this.options = options; } 
function create(options) { 
    // modify the options here if you want 
 return new MyClass(options); 
} 
module.exports.create = create;

```

## Dependency Injection
> Dependency Injection 은 의존 객체에 하나 이상의 dependency를 주입하거나 참조로 전달


database 조작을 위한 UserModel을 만들어 보자
```javascript
function userModel (options) {
  var db;
  
  if (!options.db) {
    throw new Error('Options.db is required');
  }
  
  db = options.db;
  
  return {
    create: function (done) {
      db.query('INSERT ...', done);
    }
  }
}
 
module.exports = userModel;
```
이렇게 사용하면서 위의 예시를 인스턴스화 할 수 있다. 

```javascript
var db = require('./db');

var userModel = require('User')({
  db: db
});
```

## Middlewares/ pipelines
Middleware는 파워풀하며 심플하다.
어떠한 유닛이나 함수의 결과물이 다음 실행할 함수의 인풋이 되는 것이다. 
```javascript
app.use = function(fn){
  this.middleware.push(fn);
  return this;
};
```
그래서 기본적으로 위의 예시는 미들웨어를 middleware array에 푸쉬하고 있다.
서버에 요청을 보낼때는 어떨까


````javascript
var i = middleware.length;
while (i--) {
  next = middleware[i].call(this, next);
}
````

한 가지가 호출 되고 또 다른 것이 호출 됨

## Streams

Stream은 특별한 pipeline이다. 큰 양의 데이터를 프로세싱할 때에 사용하면 좋음. 심지어 바이트일 때도 좋다. 

```javascript
process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);
    console.dir(buf);
    process.stdin.read(0);
});
```

```javascript
$ (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume2.js 
<Buffer 61 62 63>
<Buffer 0a 64 65>
<Buffer 66 0a 67>
<Buffer 68 69 0a>

```
