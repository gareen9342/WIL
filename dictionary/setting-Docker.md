# 도커 세팅

> 초기 세팅들... 여러번 날리고 다시 설치하고 해보고 싶다보니 ㅠㅠ


## 기본 명령어

### 이미지

이미지 보기     
`docker images`

이미지 가져오기    
`docker pull image이름`

이미지 제거하기    
`docker rmi 이미지이름`

### 컨테이너 관련

컨테이너 상태 보기   
`docker ps`   
`docker container ls`   


컨테이너 생성 
docker run <옵션> -t <이미지 이름> 이와 같은 형식으로 명령어를 수행한다.

-it: 컨테이너에 접근하여 조작하기 위해서는 -i, -t 옵션을 부여하는 것이 좋다. (줄여서 -it 로 사용 가능하다)
--rm: 컨테이너가 종료(stop)되면 자동으로 컨테이너가 삭제된다. (주의. 하이폰 - 2개를 사용한다)
-d: 백그라운드(background)로 실행한다.
-p: 포트 번호를 맵핑(mapping)한다.
예: -p <호스트 포트번호>:<컨테이너 포트번호>

출처: https://memostack.tistory.com/2?category=755764 [MemoStack]

## 도커 - 우분투 최신 버전 설치 후 초기 세팅

우분투 패키지 매니저는 최신 버전 같은 경우에 

이미지 받기   
`docker pull ubuntu`

현재는 버전 20.XX임 (`cat /etc/issue`)

도커 이미지 파일 확인    
`docker images`

이미지 아이디 확인 후 컨테이너 만들고 실행    
`docker run -it <이미지 아이디> /bin/bash`  
-> 기존 것 실행은 `run -> exec`

root 상태 에서   

업데이트 한번해주고   
`apt update -y `

vim 설치   
`apt install -y vim`

유저 만들어 주고    
`adduser <username>`

su로 게정 전환해주기 전 sudo설치
`apt install sudo `

`visudo` 로 파일에 해당 계정 권한 한 줄 추가 해줌

우분투 서버를 카카오 미러 서버로 변경   
`sudo sed -i 's/kr.archive.ubuntu.com/mirror.kakao.com/g' /etc/apt/sources.list`

한글 입출력 설치 

`apt-get install language-pack-ko`

`apt-get install language-pack-ko-base`

하단의 링크    
[https://ti.bqbro.com/21](https://ti.bqbro.com/21)

그리고 하단의 명령 순서대로 입력     

`localedef -f UTF-8 -i ko_KR ko_KR.utf8`   
`export LANG=ko_KR.utf8`   
`export LC_ALL=ko_KR.utf8`    



