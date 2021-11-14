# editor, 압축

## text editor

vi : VIsual display editor
- 가벼운 text editor

vim : VI iMproved
- vi호환 text editor
- cui 용 뿐만 아니라 gui도 있음 (대부분 cui사용)
- vim script : vim에 통합된 스크립트형 언어

## achive

- **tar** : 속도 빠름/ 압축률 낮음 / 확장자 .tar
- **gzip** : 속도 보통/ 압축률 보통 / 확장자 .gz
- **bzip** : 속도 느림/ 압축률 느림 / 확장자 .bz2

gzip은 여러 개의 파일을 압축하지 못함 -> 일반적으로 tar와 같이 사용

기본 형태
**tar [옵션] [파일명]**
c : tar 압축
x : tar 압축 해제
f : 여러 개의 파일
v : 처리 정보 출력

z : gzip 사용
j : bzip2 사용

## 추가

cat[파일명] : 파일 내용 보기    
명령 | 명령 : 명령의 결과를 다른 명령의 입력으로 사용     
명령 < 파일명 : 파일로부터 입력 (키보드 입력 대신)    
명령 > 파일명 : 파일로 새로 저장 (모니터 대신)    
명령 >> 파일명 : 파일로 추가 저장
