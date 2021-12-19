gitlab container registry with Docker

docker 에서 제공하는 이미지 호스팅 서비스를 도커허브라고 함.

docker hub처럼 깃랩에서 제공하는 container registry를 사용할 수 있음


링크   

https://www.youtube.com/watch?v=ZJZGJTM23z0&list=LL&index=1

https://www.youtube.com/watch?v=AR29V1wWjjk&list=LL&index=2&t=717s

위의 링크가 제일 잘 안내되어있음

https://joont92.github.io/docker/image-%EB%8B%A4%EB%A3%A8%EA%B8%B0/

도커 공부를 좀 해야겠다..


**docker registry** -> we store our docker images and distribute it

Hosted Registry, Local Registry 

we can use GitLab Container Registry as a hosted registry
like Docker hub

로그인 시엔 액세스 토큰을 발급 받는 게 가장 좋은 듯 

1. package and registry > Container registry : 여기에 어플리케이션을 하나의 이미지화 해서 올려놓는 듯 
2. 기존의 이미지를 docker tag alpine registry~(깃랩제공)를 이용해 gitlab registry에 push ( 새로운 태그 이름 부여하기 )
3. 이렇게 올려 놓을 경우 파이프라인 하나 실행시 해당 이미지 빌드


도커 공부를 좀 하면서 같이 보는 게 맞을 것 같당..
