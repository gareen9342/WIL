

## IAM 유저
- root 최상위 사용자
- IAM: 루트 유저가 신규 사용자 생성
- group: 특정 업무 규칙 등에 따라 사용자 할당 가능하며 유저만 할당, 그룹 할당 X 

## MFA
보안을 강화하는 방법에는 비밀번호 정책 설정과 MFA 설정하는 방법이 있음
디바이스, passkey, 토큰 등 이용함 

## IAM Policy
JSON Document that outlines permissions for user or groups

IAM Policy Statement -  시드, 효과, 원칙, 조치, 리소스, 그리고 조건으로 구성

## IAM Role
IAM Role은 AWS 서비스가, AWS 에 접근할 떄의 정책을 미한다. 


## IAM Security Tools
어떤 서비스가 가장 사용되고 있지 않은지 어떤 유저가 접속하고 있지 않은지 알 수 있는 콘솔이다. 

### IAM Credentail Report (account-level)

### IAM Access Advisor (user-level)


## placement group

when yon want control over the EC2 Instance

strategies
- cluster: low latency, high network throughput, high risk / in single AZ 
- spread: reduce risk is simultaneous failure and / max 7 instances per AZ / 서로 다른 AZ 에서 안정성 보장 
- partition / spread instances across multiple AZs 
  - Haddop, Cassandra, MongoDB, Redis, etc.

## ENI (Elastic Network Interface)

> Elastic Network Interface (ENI) is a logical networking component in the Amazon Virtual Private Cloud (Amazon VPC).

- primary IPv4 1 or more secondary IPv4 addresses
_- One elastic ip per private IPv4
- One public IPv4
- One or more security groups
- Bound to a specific AZ_
  탄력적 네트워크 인터페이스(ENI)는 다른 AZ에 있는 EC2 인스턴스와 연결될 수 없음!
- 특정 AZ 에 국한됨. 

https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/



### 절전 모드 (Hibernate)

EC2 절전 모드를 활성화하기 위해서는 EC2 인스턴스 루트 볼륨 유형이 EBS 볼륨이어야함


----------------

IAM 서비스가 지원하는 유일한 리소스 기반 정책? 신뢰 정책
-> 리소스 접근할 수 있는 유저나 ID를 정의

S3 -> Amazon Kinesis Data Streams 가장 빠른 방법?
AWS Database Migration Service(AWS DMS)를 Amazon S3와 Amazon Kinesis Data Streams 간의 브리지로 활용합니다.

통합 CloudWatch 에이전트를 사용하면 다음을 수행할 수 있습니다.

- 운영 체제 전반에 걸쳐 Amazon EC2 인스턴스에서 내부 시스템 수준 지표를 수집할 수 있습니다. 지표에는 EC2 인스턴스 지표뿐만 아니라 인게스트 지표도 포함될 수 있습니다.
- 온프레미스 서버로부터 시스템 수준 지표를 수집합니다. 여기에는 AWS가 관리하지 않는 서버뿐만 아니라 하이브리드 환경의 서버도 포함될 수 있습니다.
- StatsD 및 collectd 프로토콜을 사용하여 애플리케이션 또는 서비스에서 사용자 지정 지표를 검색할 수 있습니다. StatsD는 Windows Server가 실행되는 서버와 Linux 서버에서 모두 지원되며, collectd는 Linux 서버에서만 지원됩니다.
- Linux 또는 Windows Server를 실행하는 Amazon EC2 인스턴스 및 온프레미스 서버에서 로그를 수집할 수 있습니다.
시나리오의 전제는 EC2 서버의 메모리 사용량이 높지만 이 특정 지표는 기본적으로 Auto Scaling 그룹에서 추적하지 않기 때문에 확장 활동이 트리거되지 않는다는 것입니다. 기본적으로 CloudWatch는 메모리 사용량을 모니터링하지 않고 CPU 사용률, 네트워크 사용률, 디스크 성능 및 디스크 읽기/쓰기만 모니터링합니다.
