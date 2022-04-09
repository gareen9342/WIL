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

