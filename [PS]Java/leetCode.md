### add two numbers


```java 
import java.util.*;
class Solution {
    
    private ListNode sumListNodesNumbers(List<Integer> l1Arr, List<Integer> l2Arr){
        boolean wasOverTen = false;    
        
        List<Integer> longer = l1Arr.size()>=l2Arr.size()?l1Arr:l2Arr;
        List<Integer> shorter = l1Arr.size()>=l2Arr.size()?l2Arr:l1Arr;
        
        ListNode prevNode = null;
        ListNode headNode = null;
        
        for(int i=0; i<longer.size(); i++){
            
            int numa = i<shorter.size() ? shorter.get(i) : 0; 
            int sum = numa +longer.get(i) + (wasOverTen?1:0);    
            wasOverTen = sum >= 10;
            
            if(i == 0){
                headNode = new ListNode(sum%10);    
                prevNode = tailNode ;    
            }else{
                ListNode temp = new ListNode(sum%10);    
                prevNode.next = temp ;
                prevNode = temp;
            }
            
        }
        
        
        if(wasOverTen){
            ListNode temp = new ListNode(1);    
            prevNode.next = temp ;
            prevNode = temp;
        }
        
        return headNode;
    }
    
    private List<Integer> listNodeToInt(ListNode ln){
        ListNode temp = ln;
        ListNode nextNode;
        
        int idx = 0;
        List<Integer> tempList = new ArrayList<Integer>();
        
        while(temp != null){
            nextNode = temp.next;
            tempList.add(temp.val);
            temp = nextNode;
        }
        
        return tempList;
    }
    
    /**
    각각 더해서 다시 거꾸로 뒤집는다.
    */
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
       
        List<Integer> l1Arr = listNodeToInt(l1);
        List<Integer> l2Arr = listNodeToInt(l2);
        
        return sumListNodesNumbers(l1Arr,l2Arr);
    }
}
```

TODO: 리팩토링하고 전체적으로 한번 다시 정리


## remove Duplicates from Sorted Array


https://leetcode.com/problems/remove-duplicates-from-sorted-array/


```java 
class Solution {
    public int removeDuplicates(int[] nums) {     
        int prevNum = -101;
        int possibleIdx = 0;
        for(int i=0; i<nums.length; i++){
            int number = nums[i];
            if(prevNum != number) {
                 nums[possibleIdx] = number;
                 possibleIdx++;
            }
            prevNum = number;
        }
        return possibleIdx;
    }
}

```

## palindrome-number

https://leetcode.com/problems/palindrome-number/submissions/

```java
import java.util.*;

class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0){
            return false;
        }
        
        String[] tokens = (x+"").split("");
        int len = tokens.length;
       
        
        // System.out.println(Arrays.toString(tokens));
        
        for(int i = 0; i<len/ 2; i++ ){
                // System.out.println(tokens[i]  + "" + tokens[len-1-i]);
            
            if(!tokens[i].equals(tokens[len-1-i])){
                return false;
            }
        }
        return true;
    }
}
 ```

## roman-to-integer

https://leetcode.com/problems/roman-to-integer/

```java
class Solution {
    public int romanToInt(String s) {
        String[] tokens = s.split("");
        Map<String, Integer> valueMap = new HashMap<String, Integer>();
        
        valueMap.put("I",1);
        valueMap.put("V",5);
        valueMap.put("X",10);
        valueMap.put("L",50);
        valueMap.put("C",100);
        valueMap.put("D",500);
        valueMap.put("M",1000);
        
        int result = 0;
        for(int i=0; i< tokens.length; i++){
            String token = tokens[i];
            if(i == tokens.length-1){
                result += valueMap.get(token);
                break;
            }
            
            if(valueMap.get(token) >= valueMap.get(tokens[i + 1])){
                result += valueMap.get(token);
            }else{
                result -= valueMap.get(token);
            }
        }
        
        return result;
    }
    
}
```

## logest-common-prefix

https://leetcode.com/problems/longest-common-prefix/

```java 
class Solution {
    public String longestCommonPrefix(String[] strs) {
        
    
    String extractedPrefix = "";
    String firstItem = strs[0];
    boolean isLoopEnd = false;

    for(int i = 0; i<strs[0].length(); i++){
      if(!isLoopEnd){
        // 첫 번째 문자의 앞에서 부터 잘라낸 문자열을 반환한다.
        extractedPrefix = firstItem.substring(0, i + 1);
//        System.out.println("extractedPrefix = " + extractedPrefix);

        for(int j = 1; j < strs.length; j++){

          String itemStr = strs[j];
//        System.out.println("itemStr = " + itemStr);

          int prefixIdx = itemStr.indexOf(extractedPrefix);
//          System.out.println("prefixIdx = " + prefixIdx);

          if(prefixIdx != 0){ // 이때 끝 혹은 루프를 다 돌고 끝
            isLoopEnd = true;
            
            extractedPrefix = firstItem.substring(0, i);
            break;
          }

        }
        // end item for loop
      }
      // end char for loop

    }
    return extractedPrefix;
    }
}
```

##  Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

```java 
public int longestCommonPrefix(String s){

    String[] strings = s.split("");
    int max = 0;
    int idx = 0;
    String temp = "";
    for(int i = 0; i<strings.length; i++){
      String token = strings[i];

      int exIdx = temp.indexOf(token);
      if(exIdx != -1){
        max = Math.max(max, temp.length());
        temp = temp.substring(exIdx + 1);
      }
      temp += token;
    }
    max = Math.max(max, temp.length());
    return max;
  }
```

...너무 알고리즘이란 개념 없이 막 푼거 아니냐..

## search insert position

https://leetcode.com/problems/search-insert-position/

```
class Solution {
    public int searchInsert(int[] nums, int target) {
        for(int i=0; i<nums.length; i++){
            if(nums[i] >= target){
                return i ;
            }
        }
        return nums.length;
    }
}
```

