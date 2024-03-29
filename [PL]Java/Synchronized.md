## 동기화를 지원하는 자료구조

쓰레드간 통신시 전역 변수의 공간 또는 힙영역을 통해 데이터를 주고받을 수 있다. 

쓰레드간의 데이터 교환은 프로세스간의 교환과는 달리 캐시메모리를 비울 필요가 없기 때문에 빠르다. 

하지만 동일한 자원에 동시에 접근하는 일이 생길 수 있기 때문에, 

예를 들어.
**_다른 쓰레드에서 사용중인 변수가 자료구조에 접근하여 엉뚱한 값을 읽어올 수 있을 때_** 

그래서, 멀티쓰레딩 환경에서 공유 자원에 접근을 하게 될 경우 
데이터 동기화를 통해 작업 처리 순서를 컨트롤 하고 공유 자원에 대한 접근을 컨트롤 해야 한다. 

하지만 동기화를 지원하는 자료구조를 사용하게 될 경우 자원을 많이 사용하고 이로 인해

과도한 락으로 인한 병목 현상이 일어날 수 있따. 

공유 자원이 아닌 부분은 동기화 처리를 할 필요가 없다. 동기화 처리가 필요한 부분에만 synchronized 키워드를 통해 동기화. 

https://cornswrold.tistory.com/209  


- List -> synchronizedList    
- Map -> synchronizedMap  
- Set -> synchronizedSet 
- Hashtable
- ConcurrentHashMap
- Vector
- ...