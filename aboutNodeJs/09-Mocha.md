# Mocha

## 시작

해당 링크를 참조하였다.

[Mocha - the fun, simple, flexible JavaScript test framework](https://mochajs.org/#getting-started)

1. `npm install mocha supertest`
2. test 코드 작성하기 `test/test_spec.js`

    ```jsx
    const supertest = require("supertest")
    const {query1,query2, query3, query4, query5, query6, query7, query8, query9, query10} = require("./testQuery/searchHotplaceQuery")
    const server = supertest.agent('http://localhost:16429')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMTZkYWU2ZDQtN2U3Zi00ZTBkLWJkMDItYzBlNDRjMWRiZTc2IiwiaWF0IjoxNjMwOTg4MDg1LCJleHAiOjE2MzA5OTE2ODV9.RFNwsIz7LufArzOK8_mLpST_xP2HSxnZlaxxrYafhBk"

    describe('레벨1 리스트 찾기', () => {
        it('', (done) => {
            server
            .post('/api/v1/hotplace/first/level/list')
            .set("authorization", token ) // authorization header
            .send( query1 )
            .expect(200)
            .end((err, res) => {
                const code = res.body.resultCode
                if(code == 0){
                    done();
                } else {
                    console.log(err)
                    done(new Error())
                }
            })
        });
    })
    ```

3. package.json에 script 삽입 → test script
   `"test": "mocha 'test/*.js'"`
4. run `npm test`

## 코드

코드에 대한 설명은 아래와 같다.

```jsx
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

### Test - describe

describe로 테스트 suite를 만들고 그 안에 it(),로 테스트 코드를 작성한다.

describe는 중첩해서 사용할 수 있다.

```jsx
describe("Test suite", function () {
  it("should be ok", function () {
    assert.equal(true, false)
  })
})
```

### hooker - before / after/ beforeEach / afterEach

테스트 코드를 실행하지 전과 후에 어떤 동작을 수행할 것인지에 대한 정의를 적을 수 있다.

```jsx
describe("Test suite", function () {
  var arr

  before("Create the array", function () {
    arr = [0, 1, 2]
  })

  after("Destory the array", function () {
    arr = undefined
  })

  it("should be ok", function () {
    assert.equal(arr[0], 0)
  })
})
```

## Exclusive

실행시간이 길어지게 될 경우 하나의 테스트 만 실행하고 싶을 경우엔 only메서드를 실행

```jsx
describe("...", function () {
  // 오직 이 테스트만 수행됨
  describe.only("Only this test suite will be run", function () {
    it("...", function () {})
  })

  describe("...", function () {
    it("...", function () {})

    it("...", function () {})
  })
})
```

## Options

mocha 명령어로 테스트를 할 때 옵션을 줄 수 있다.

```jsx
mocha [debug] [options] [files]
```

[Node.js 테스트 프레임워크 Mocha](https://heropy.blog/2018/03/16/mocha/)

```jsx
mocha [spec..]

Run tests with Mocha

Commands
  mocha inspect [spec..]  Run tests with Mocha                         [default]
  mocha init <path>       create a client-side Mocha setup at <path>

Rules & Behavior
      --allow-uncaught       Allow uncaught errors to propagate        [boolean]
  -A, --async-only           Require all tests to use a callback (async) or
                             return a Promise                          [boolean]
  -b, --bail                 Abort ("bail") after first test failure   [boolean]
      --check-leaks          Check for global variable leaks           [boolean]
      --delay                Delay initial execution of root suite     [boolean]
      --dry-run              Report tests without executing them       [boolean]
      --exit                 Force Mocha to quit after tests complete  [boolean]
      --fail-zero            Fail test run if no test(s) encountered   [boolean]
      --forbid-only          Fail if exclusive test(s) encountered     [boolean]
      --forbid-pending       Fail if pending test(s) encountered       [boolean]
      --global, --globals    List of allowed global variables            [array]
  -j, --jobs                 Number of concurrent jobs for --parallel; use 1 to
                             run in serial
                                   [number] [default: (number of CPU cores - 1)]
  -p, --parallel             Run tests in parallel                     [boolean]
      --retries              Retry failed tests this many times         [number]
  -s, --slow                 Specify "slow" test threshold (in milliseconds)
                                                          [string] [default: 75]
  -t, --timeout, --timeouts  Specify test timeout threshold (in milliseconds)
                                                        [string] [default: 2000]
  -u, --ui                   Specify user interface    [string] [default: "bdd"]

Reporting & Output
  -c, --color, --colors                     Force-enable color output  [boolean]
      --diff                                Show diff on failure
                                                       [boolean] [default: true]
      --full-trace                          Display full stack traces  [boolean]
  -G, --growl                               Enable Growl notifications [boolean]
      --inline-diffs                        Display actual/expected differences
                                            inline within each string  [boolean]
  -R, --reporter                            Specify reporter to use
                                                      [string] [default: "spec"]
  -O, --reporter-option,                    Reporter-specific options
  --reporter-options                        (<k=v,[k1=v1,..]>)           [array]

Configuration
      --config       Path to config file   [string] [default: (nearest rc file)]
  -n, --node-option  Node or V8 option (no leading "--")                 [array]
      --package      Path to package.json for config                    [string]

File Handling
      --extension          File extension(s) to load
                                           [array] [default: ["js","cjs","mjs"]]
      --file               Specify file(s) to be loaded prior to root suite
                           execution                   [array] [default: (none)]
      --ignore, --exclude  Ignore file(s) or glob pattern(s)
                                                       [array] [default: (none)]
      --recursive          Look for tests in subdirectories            [boolean]
  -r, --require            Require module              [array] [default: (none)]
  -S, --sort               Sort test files                             [boolean]
  -w, --watch              Watch files in the current working directory for
                           changes                                     [boolean]
      --watch-files        List of paths or globs to watch               [array]
      --watch-ignore       List of paths or globs to exclude from watching
                                      [array] [default: ["node_modules",".git"]]

Test Filters
  -f, --fgrep   Only run tests containing this string                   [string]
  -g, --grep    Only run tests matching this string or regexp           [string]
  -i, --invert  Inverts --grep and --fgrep matches                     [boolean]

Positional Arguments
  spec  One or more files, directories, or globs to test
                                                     [array] [default: ["test"]]

Other Options
  -h, --help             Show usage information & exit                 [boolean]
  -V, --version          Show version number & exit                    [boolean]
      --list-interfaces  List built-in user interfaces & exit          [boolean]
      --list-reporters   List built-in reporters & exit                [boolean]

Mocha Resources
    Chat: https://gitter.im/mochajs/mocha
  GitHub: https://github.com/mochajs/mocha.git
    Docs: https://mochajs.org/
```