# Crypto

## Cipher
Cipher 클래스의 인스턴스는 데이터를 암호화하는데 쓰이는 것
node에서 제공하는 crypto라는 모듈에 cipher라는 클래스를 사용하는데
crypto.createCipher / crypto.createCipheric를 통해 Cipher instance를 만든다.

1. cipher로 write(), read(), end()함수로 읽고 쓸 수 있음.
2. event기반으로 사용가능('readable', 'end')
3. pipe라인 스트림으로도 사용가능.
4. cipher.update(), cipher.final()로 암호화, 종결가능.

cipher.update()
-> data값이 주어지면 cipher를 업데이트 
