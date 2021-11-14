# 조건문, 반복문


## 조건문

```python
if a == 2:
    print('a == 2')
else : 
    print('a != 2')
```

## 반복문

### for

for 변수 in  출력할 리스트

for 문 뒤에 else 를 붙이면 반복문 정상 종료시 수행할 것들을 놓을 수 있다. 

```python
# subject = ['java', 'javascript', 'python']
# for i in subject : 
#     print(i, end = ' ')
# else :
#     # 반복문이 정상 종료되었을 때
#     print("재밌다. ")
#     # 시작부터 끝 -1까지 
# for i in range(1, 100):
#     print(i)
# print()
# for i in range(10,0,-1) : 
#     print(i, end = ' ')
# print()
#
# for i in range( 1, 10, 2 ):
#     print(i, end= ' ')
# print()

print ('==========')
# print의 끝에 end = "" -> 끝에 무엇을 출력할 지 sep ="" ->출력문 사이에 무엇을 출력할 지
for i in range(2,10) :
    for k in range (1,10) : 
        # print(str(i)+"*"+str(k)+"="+str(i * k))
        print(i, '*', k,'=',i*k, sep= ' ')
```

### while

++연산자는 파이썬에 없다

이것 또한 else로 정상 종료시 수행할 함수를 놓을 수 있다. 

```python
i=1
while i <= 10:
    print(i)
    # i++  없음
    i += 1
    
mysum= 0
mycount = 1
while mycount <= 10 : 
    mysum += mycount
    mycount += 1
else :
    print('sum', mysum, sep = ':')
    print('sum', mycount, sep = ':')
```