# package 관련

**RPM : Redhat Package Manager**

: \*.rpm

: windows의 setup과 비슷한 역할

```html
rpm -i[옵션] rpm-package : rpm-package 설치 
rpm -u[옵션] rpm-package : rpm-package 업그레이드
```

**YUM : Yellowdog Updater Modified**

: rpm : 기반의 package tool     
: 패키지를 분석하여 의존성 해결 ( 자동 설치)      
: /etc/yum.repos.d 에 패키지 저장소 파일 저장

```html
yum [-y] install package-name package 설치   

package 업데이트      

yum update package-name     
yum upgrade package-name     

package 삭제
yum [-y] erase package-name 
yum [-y] remove package-name 

package 정보 확인
yum info package-name  
```
