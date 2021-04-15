# 브루트 포스 (BruteForce) 

## 카잉달력

https://www.acmicpc.net/problem/6064

M과 N보다 작거나 같은 두 자연수 x,y를 이용해서 년도를 <x:y> 로 표현한다.   
첫 번째 해는 <1:1>, 두 번째 해는 <2:2> 이다.   
<x:y>의 다음 해는 <x':y'> 이다.   
x<M 이면 x'=x+1, 아니면 x' = 1    
y<N 이면 y' = y+1, 아니면 y' = 1    
M,N,x,y가주어졌을때,<x:y>이 몇 번째 해인지 구하는 문제   

결국 X와 Y를 분리하여 포문을 돌려서 원하는 수에 다 왔는지 구할 것인데   
만약에 문제에서 M = 5, N = 7  이라고 치고, 찾아야 하는 수가 3,6 이라고 쳤을 때 이게 몇 번째의 수인지 알 수 있어야  한다.   
어느정도는 X가 일단 먼저 원하는 수인지 검사를 하고,   
Y에 대해서 검사를 하면 간단해질 수 있는데   
3 -> ( 5칸 띄고 ) -> 8 -> ( 5칸 띄고 ) -> 13   
이런 식의 로직으로 검사할 수 있을 것 이다.   
결국 나머지 연산의 개념을 이용할 수 있다.  
나머지 연산을 간단히 하기 위해서 우선적으로 X, Y에서 1을 뺴주고 연산을 돌려 검사해줄 수 있다.   



```java
public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.valueOf(bf.readLine());
        while (t-- > 0) {
            String[] line = bf.readLine().split(" ");
            int m = Integer.valueOf(line[0]);
            int n = Integer.valueOf(line[1]);
            int x = Integer.valueOf(line[2])-1;
            int y = Integer.valueOf(line[3])-1;
            boolean ok = false;
            for (int k=x; k<(n*m); k+=m) {
                if (k%n == y) {
                    System.out.println(k+1);
                    ok = true;
                    break;
                }
            }
            if (!ok) {
                System.out.println(-1);
            }
        }
    }
}

```

## 수 이어 쓰기
1부터 N까지의 수를 모두 더했을 때 무슨 수인지 구하는 것 
수의 자릿 수별로 나누어서 문제를 풀기

1-9 : ( 9 - 1 + 1 ) * 1
10 - 99 : ( 99 - 10 + 1 ) * 2
100 - 120 : (120 - 100 + 1) * 3

**브루트 포스 문제에서 연산속도를 줄일 수 있는 방법**

1. 나머지 연산을 이용
2. 계속 중복된 것들이 있는 것들을 묶어서 한번에 계산하면 된다. 
