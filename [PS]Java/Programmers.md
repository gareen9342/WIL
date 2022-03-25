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

오랜만에 자바로 문제 풀이 했더니 하나도 모르겠다 ㅠㅠ Stream API를 공부해야할듯하다 ㅠ_ㅜ

코테용으로 파이썬을 더 해볼까..ㅠ