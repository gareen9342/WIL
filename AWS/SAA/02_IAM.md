

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