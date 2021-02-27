# Git

참고자료 
[HwangNara/git-class](https://github.com/HwangNara/git-class/tree/master/beginner)

## 깃이란?

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## 왜 깃을 쓰는가

1. 공유 (협업)
하나의 프로젝트 내에서 부분을 나눠서 개발시에 작업이 끝난 코드를 적용해야 개발서버와 리얼서버에 반영할 수 있음.
2. 보관(백업)
안전하게 웹 저장소에 코드를 저장해 놓을 수 있다. 
3. 대세 
많은 아이티기업들이 사실상 사용하고 있기 떄문에

## 세팅

- 계정 연결
global 옵션을 붙이면 컴퓨터 전체, 안 붙이면 해당 프로젝트 내에서만

```
git config --global user.name "Country"
git config --global user.email "hnaras@naver.com"
```

alias 및 현재 Git 설정 상태 보기

```
git config --list
```



## 깃 라이프사이클

간단히 add & commit(ci)

- add: 이 파일을 Git이 관리하게 하겠다 (or 수정 완료했다)
- commit: 이 파일을 Git에 저장하겠다

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26d7c2f0-64c7-41b7-8e43-bd4a3f8ac8cd/lifecycle.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26d7c2f0-64c7-41b7-8e43-bd4a3f8ac8cd/lifecycle.png)

    - Untracked
        - Git과 아무 상관이 없는 상태
        - 따라서 Git이 대상 파일을 관리하지 못함
        - 최초 `add`를 해줘야 Git의 관리 대상이 됨
        - Git이 관리하는 파일을 삭제하면 Untracked가 됨
    - Unmodified
        - 코드 저장이 완료된 상태
        - Staged 상태에서 `commit`을 하면 Unmodified가 됨
    - Modified
        - Git으로 관리되고 있던 코드를 수정하여 변경이 일어난 상태
        - Unmofieid 상태인 파일을 수정하면 Modified가 됨
        - `commit` 할 수 없음. `commit` 하려면 Staged 상태가 되야함
    - Staged
        - 이제 코드를 저장해도 좋다는(`commit`이 가능한) 상태
        - Untracked/Modified 상태인 파일을 `add` 하면 Staged가 됨

## **status (st)**

- 현재 git 상태를 보여줌.
- Untracked files : `Untracked` 상태인 파일들

## **log (lg)**

- 히스토리를 조회하는 명령어
- 커밋 단위로 히스토리가 쌓임
- log를 볼 줄 알아야 develop, release, hotfix 브랜치가 난무할 때 merge 방향이나 순서를 이해할 수 있음
- 위에 있는 것이 최신, 아래 있을 수록 예전 커밋

## add

- 파일을 `Staged` 상태로 만듦 -> 파일을 Git이 관리하는 상태로 만듦
    - `Untracked` / `Modified` 상태의 파일에 사용할 수 있음
- 이제 `commit`을 하면 코드를 저장할 수 있음

## commit (ci)

- 파일을 `Unmodified` 상태로 만듦 -> 한 단위의 작업이 완료
- Git 시스템에 영구적으로 변경을 저장
- SHA-1 알고리즘을 적용한 해시값을 키로 생성.
- 히스토리가 하나 추가됨
- 실무에서 한 작업 (기능, 피처) 단위로 한 커밋 권장

**옵션**

- `m` : 메시지를 넣음
- `a` : `add`를 같이 함. 단순히 Modified
- `am` : `a`와 `m`을 합친 것. 제일 많이 사용
- `-amend`
    - 마지막 커밋을 수정
    - `Stage` 상태의 파일들과 같이 커밋됨
    - 만약 `Stage`에 아무것도 없다면 (`commit`이후에 작업을 안 했으면 ) 커밋 메시지만 수정

## 브랜치 관련

커밋 사이를 가볍게 이동할 수 있는 어떤 포인터 같은 것 

하나의 작업 공간 단위

- 브랜치 확인  : git br
- 브랜치 생성 : git br test
- 브랜치 삭제 : git br -D test/1

### HEAD

: 지금 작업하는 로컬 브랜치를 가리키는 포인터

현재 브랜치 마지막 커밋의 스냅샷

branch를 변경하면 해당 브랜치의 마지막을 가리키고 있음

HEAD를 움직이면서 여러 버전의 코드를 볼 수 있음. 

### checkout (co)

- 다른 브랜치로 이동
- 옵션
    - `b` : 브랜치 생성하고 그 브랜치로 checkout
        - 아래 두 명령은 같음
        - `git co -b develop`
        - `git br develop
        git co develop`
- `git co master`

### checkout TIP

- 커밋의 hash값을 알면 시간 여행이 가능함
- 예시

```java
git co e5d33ad
```

## Stash

**현재 브랜치의 작업 내용 임시 저장**

**브랜치에서 작업하다가 다른 브랜치로 변경해야 하는데 커밋은 하고 싶지 않은 경우**

## merge

협업의 핵심, 다른 브랜치와 현재 브랜치를 합쳐서 코드를 합침.

방식

- 협업의 핵심. 다른 브랜치와 현재 브랜치를 합쳐서 코드를 합침
- 방식
- fast-forward
    - 커밋들이 공통이고 대상 브랜치의 커밋만 증가 했을 경우 단순히 HEAD만 옮겨짐
- 3-way Merge
    - 두 갈래로 나온 변경들을 합쳐서 새로운 커밋을 만듦
    - conflict
- squash
    - 대상 브랜치의 커밋들을 하나의 커밋으로 합쳐서 merge
    - `git merge --squash master`