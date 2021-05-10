# 파이썬의 자료형

## 자료형

### 숫자

```python
# number 숫자
a=100
print(a)
print(type(a))

#실수형
b=100.1
print(b)
print(type(b))

# 2진수, 8진수, 16진수
c=0b1111
print(c)
d = 0o77
print(d)
e=0xff
print(e)
```

- 정수 / 실수 → 그냥 써줌
- 2진수 : 0b(숫자)
- 8진수 : 0o(숫자)
- 16진수 : 0x(숫자)

### 문자

single quotaton과 double quotation은 차이 없음

**3번 쓰고 문자열 감싸면 줄바꿈을 포함할 수 있다.** 

\ 를 읽어서 \t, \n을 모두 사용할 수 있는데 

문자열 앞에 r 사용시 raw String 값으로 사용할 수 있다. 

```python
#혼합
e='abs"def"ghi\npython\'s string'
print(e)
f="abs'def'ghi\ttest"
print(f)

# r : raw string(\를 문자로 인식)
g = r"/Users/garin/Documents/Workspaces/Workspace_python/Phthon00"
h = "C :\test"
```

### 리스트

- 생성자

    ```python
    # 생성자
    a = list()
    print(a)
    a.append(1)
    print(a)
    a.append('one')
    print(a)
    a[1] = 'two'
    print(a)
    ```

- [ ] 사용

    ```python
    b = [1,2,3,4,5]
    #중첩
    c = ['a','b', 'c',['d','e','f']]

    # 가지고 올 때는 인덱스 값으로 
    print(c)
    print(c[3][2])

    # array concat
    print(b + c)
    ```

***함수들***

- (+) 배열 + 배열로 배열을 합할 수 있다 concat
- ( * ) 배열 * n으로 배열을 반복할 수 있다.
- reverse 배열을 뒤집기
- append : 값넣기
- sort : 배열을 정렬 중간에 문자열이나 숫자형 중 다른 자료형이 있으면 정렬이 되지 않는다
- len : 길이 구하기
- index :  위치값
- insert : 특정위치에 넣기
- remove 첫 번째로 나오는 값 삭제

***리스트의 튜플은 둘 다 unpack 을 통해 각 인덱스의 값들을 뽑아서 변수에 저장이 가능하지만***

***정확하게 값들이 얼마나 있는지 파악하고 그 값만큼 할당하여야 사용이 가능하다.***

### Tuple

리스트와 거의 비슷하다

다른점

1. 리스트는 []로 둘러싸지만 튜플은 (으로 둘러싼다.
2. 리스트는 그 값의 생성 삭제, 수정이 가능하지만 튜플은 그 값을 바꿀 수 없다. 

```python
######## Tuple
# 수정 불가능한 리스트

# 생성자
a = tuple()
print(a)
# a.append(1) ##'tuple' object has no attribute 'append'
# print(a)

b = tuple([1,2,'3'])
print(b)

# () 사용
c = (1,2,3,4,5)
print(c)
# c[1] = 'two' #'tuple' object does not support item assignment
d = tuple(range(3,6))
print(d)
print(c + d)

# tuple을 list로
e=list(d)
print(e)
# e.print(6)
e.append(6)
print(e)
#list 를 tuple로
f=tuple(e)
print(f)
# 리스트와 튜플은 거의 비슷 튜플은 추가 수정 삭제 안됨

# unpack

g,h,i,j = f #정확하게 내부의 값들이 얼마나 있는지 알아야 unpack 할 수 있다!!
print(g)
print(h)
print(i)
print(j)
```

### Set

집합 자료형인 Set

만약 저장된 값을 인덱스로 접근하려면 리스트나 튜플로 변환 후 사용함

생성시엔 생성자 `set()` ,{}를 사용

합집합, 교집합을 사용할 수 있다. 

```python
#set ( 집합 )
# 생성자
a = set(['1','2','3','4','4'])
print(a)

# 생성자에 iterable한 객체를 넣면 set의 값으로 변환

b=(set('hello')) # h,e,l,o
print(b)

#{}사용
c = {'1','2','3','4','4'}
c.add('world')

print(c)

#합집합, 교집합
print(a.union(b))
print(a|b)

print(a.intersection(c))
print(a&c)
```

***내장함수***

- add : 추가
- update : 여러개의 값 추가
- remove : 값 제거

### Dictionary

딕셔너리 자료형, 유일한 키를 가지며 Value 는 중복이 가능

```python
#생성자
dict01 = dict()
dict01[1] = 1
dict01[2] = 2
print(dict01)

#{}사용
dict02 = {}
dict02['one'] = 1
dict02['2'] = 'this is two'
dict02[3] = 3

print('dict02= ' )
print(dict02)

dict02[3] = 1
# key / value 가져오기

print(dict01.get(1))
print(dict02.get('one'))
print(dict02['one'])

print(dict02.keys())
print(dict02.values())
print(list(dict02.values())[1])
```

***내장함수***

- keys :key 값의 리스트
- values: value 값의 리스트
- items : key value쌍의 튜플로 묶은 값을 idct_items 객체로 돌려준다
- clear : key value 쌍을 모두 지우기
- get :  key로 value 얻기
- in :  해당 key가 딕셔너리 안에 있는지 조사하기