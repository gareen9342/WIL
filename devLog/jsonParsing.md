# Json Parsing을 눈을 잘 뜨고 보자.  

이미지를 올리고 이름을 받는 과정을 테스트 하고 있었다.  
분명 올라간 경로도 다 잘 들어갔고, 심지어 데이터도 잘 찍혔는데 평소에 하듯이 값을 가져오는 과정에서 자꾸 undefined가 뜨는 것이다. 😩

data를 출력했더니 
```javascript
    {"url" : "21.jpg"}
``` 

이런 형태를 띄고 있었다. 난 그 때 까지만 해도 이게 이상한 것임을 모르고 있었다.
사실 콘솔에 오브젝트를 출력할 경우 밑에 화려한 설명이 콘솔을 감싸며 데이터 타입이 오브젝트라고 나오는데   
그게 나오지 않는데도 하수인 나는 알아보지 못 했던 것이다 ㅠㅠ...
그냥 String key구나~ 하고 data["url"] 이렇게 갖고 왔는데도 undefined가 떠서 뭔가 싶어서 계속 어리둥절...ㅠㅠ

자꾸 이상해서 쳐다본 후에 JSON.parse 로 출력했더니..... 그랬더니 이쁜 오브젝트가 출력되었고 나는 잠을 잘 수 있는 사람이 되었다 ㅠㅠ   

이건 콘솔에 출력해 본 결과물!      
![json](./images/json.png)   

```javascript
    console.log(data)
    console.log(JSON.parse(data))
    console.log(data.url);
    console.log(JSON.parse(data).url);
```