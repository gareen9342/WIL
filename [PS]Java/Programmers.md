### 다른 사람의 풀이

```java
import java.util.*;
class Solution{

  public static int[] solution(String[] id_list, String[] report, int k) {

    HashMap<String, Set<String>[]> idmap = new HashMap<>();
    HashMap<String, Integer> resMap = new LinkedHashMap<String, Integer>();

    for(String id : id_list){
      Set[] sets = new Set[2];
      sets[0] = new HashSet<String>();
      sets[1] = new HashSet<String>();
      
      idmap.put(id, sets);
      resMap.put(id, 0);
    }

    // 배열의 0번째 : 이 사람이 신고한 사람
    // 배열의 1번째 : 이 사람을 신고한 사람
    // 확인용으로 출력하기 위해 담음 
    for(String item:report){
      String[] idArr = item.split(" ");
      String reporter = idArr[0];
      String reported = idArr[1];

      idmap.get(reporter)[0].add(reported);
      idmap.get(reported)[1].add(reporter);
    }

    idmap.forEach((id, reportList) -> {
//      System.out.println(id);
      Set<String> reportSet = reportList[0];
//      System.out.println("reportSet = " + reportSet);
      Set<String> reportedSet = reportList[1];
//      System.out.println("reportedSet = " + reportedSet);

      if(reportList[1].size() >= k){
        reportedSet.stream().forEach((val) -> {
          resMap.put(val, resMap.get(val) + 1);
        });
      }
    });

//    System.out.println(resMap);
    int[] result = new int[resMap.size()];
    int idx = 0 ;
    for (Map.Entry<String, Integer> entry : resMap.entrySet()) {
      Integer value = entry.getValue();
      result[idx] = value;
      idx++;
    }
    return result;
  }
}
```


### 더 맵게

이거 풀기위해 우선순위 큐 공부   


PriorityQueue : 기본값은 작은 숫자가 우선순위를 가진다,
문자의 경우 사전순   

추가시   

offer : 큐가 꽉찼을 경우 false 리턴   
add : 큐가 꽉찼을 경우 예외 발생   

삭제

remove : 예외 발생   
poll : null리턴

이번에도.. 문제 잘못 읽어서 열심히 삽질했다 문제를 잘 읽자 ^^

javascript일 경우 array shift, unshift 하며 루프마다 sort 로 구현 가능할 듯 

```java
class Solution {
  public static int solution(int[] scoville, int K) {

    int count = 0;

    PriorityQueue<Integer> pq = new PriorityQueue<>();

    for(int scov : scoville){
      pq.offer(scov);
    }
      
    if(pq.peek() >= K){
      return 0;
    }
      
    while(pq.peek() < K){
      if(pq.size() == 1) {
        return -1;   
      }
      int first = pq.poll();
      // System.out.println("first = " + first);
      int second = pq.poll();
      // System.out.println("second = " + second);
      int nowScoville = first + (second * 2); // 섞어주고
      // System.out.println("nowScoville = " + nowScoville);
      count+=1;
      pq.offer(nowScoville);
      
    }
    //  end loop
    return count;
  }
}

```