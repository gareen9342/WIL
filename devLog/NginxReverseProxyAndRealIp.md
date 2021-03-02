# Nginx Reverse Proxy 와 realIp

기존에 블로그를 올려 사용하던 백 / 프론트 서버의 인증서 적용을 위해 nginx 의 Reverse Proxy 를 이용했다.

포트는 80, 442로 받고 ssl 인증서를 적용하며 3060포트로 서버로 전달할 수 있도록 적용해 놓았고 잘 적용해 놓고 쓰고 있었는데,
포스팅의 GET 요청이 들어올 때 클라이언트의 아이피를 수집해서 views를 카운트 하고 싶어서 아이피를 열심히 수집하고 있었는데 자꾸 127.0.0.1 만 수집이 되는 것이다.   
그 과정에서 썼던 코드는 

```jsx
var ipaddress =  (req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress).split(":").pop();
```

이렇게 다양하게 사용하였다. 

몇십시간을 투자해 이렇게도 바꿔보고 저렇게도 바꿔보았지만 해결이 안되던 와중, nginx reverse proxy 를 적용해 놓았다는 것을 뒤늦게 깨달았다. ㅠㅠ (중간에서 가로채서 127.0.0.1 요청 ..) 

nginx reverse proxy get real ip라고 검색하니...

출처 :[https://stackoverflow.com/questions/62664348/cant-get-clients-real-ip-when-using-nginx-reverse-proxy](https://stackoverflow.com/questions/62664348/cant-get-clients-real-ip-when-using-nginx-reverse-proxy)

 

1. 일단 서버 conf 파일을 열고 설정을 바꾼다.

    ```java
    server{
      server_name example.com;
      location / {
        proxy_pass http://localhost:4000;
        proxy_set_header X-Real-IP $remote_addr; <---Add this line
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; <---this line too
      }
    ```

2. /nginx 폴더 내의 프록시 설정 파일을 하나 더 열고 확인한다

    ```java
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    ```

3. req.headers['x-forwarded-for'] 으로 찍힌 IP를 열어보면 클라이언트 아이피를 확인할 수 있다.