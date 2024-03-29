## 가장 긴 증가하는 부분 수열 (Longest Increasing Subsequence)

### ILS_1

수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열(길이)을 구하는 문제

→ 부분 수열이란?  _순서를 유지하면서 띄엄띄엄 있는 것_

→ 해당 i까지 어떻게 증가하는지 구하기 위해 각 i 의 증가하는 부분 수열을 구한 후에  

전체 D[i]의 값 중 max를 뽑아낸 것이 정답이다.   
해당 하는 인덱스의 값을 가지고 그 앞 부분을 순회하며 검사를 하는데    
A[i] > A[j] 이면 D[j]의 값을 가지고 오고 + 1 을 하면 그 부분 수열에  A[i]를 더해준 것과 같으므로 그렇게 진행하면 되지만   
또한 D[j]가 무조건 D[i]보다 작아야 하므로 그 부분에 대한 검사를 같이 하며 진행한다. 

### ILS_2

수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 문제   
이렇게 길이도 구하고, 무엇이 수열을 이루는지도 물어본다면 '역추적' 이라는 과정을 거치고   
역추적이라는 과정은 대부분의 알고리즘이 비슷하다.   
아까와 같이 비교를 하며 순회하되, 어떤 수 때문에 값이 바뀌었는지 기록할 배열을 하나 더 추가한다. (V)   
만약에 2번째 인덱스 때문에 변화하게 된거라면 V[i] = 2이다 (없으면 0 or -1 입맛대로..)   
길이가 D[i] 인건 아까와 같이 구하게 되고,A[V[i]]를 계속 추적하며 배열에 넣어준다. 

## 연속합

n개의 정수로 이루어진 임의의 수열이 주어진다.  
우리는 이 중 연속된 몇 개의 숫자를 선택해서 구할 수 있는 합 중 가장 큰 합을 구하려고 한다.   
숫자는 한 개 이상 선택해야 한다.    
앞에 있는 수와 연속하는 경우, 연속하지 않는 경우로 나눠서 구해보도록 한다   
D[i]를 i번째 수로 끝나는 연속합의 가장 큰 수  
D[i]가 연속한다면 앞에 있는 수에서 끝나는 D[ i]에 A[i] 를 더한 값일 것이다. 연속하지 않는 다면 A[i]일 것이다. 이런 식으로 해당하는 인덱스의 경우만 생각을 하며 ㄷ쭉 더해주는 것이다. 

그래서 결국 D[i]  = max((D[i-1] + A[i]) , A[i])일 것이다. 

## 제곱수의 합

주어진 자연수 N을 제곱수 들의 합으로 표현할 때에 그 항의 최소개수를 구하는 문제   

ex ) 11 = 3^2 + 1^2 + 1^2

마지막 항이 중요하다.   
마지막 항이 1인 경우 → ?+?+...+? = i-1   
마지막 항이 4인 경우 → ? +?+...+? =  i-4   
마지막 항이 9인 경우 → ?+?+...+? = i-9   
마지막 항이 16인 경우 → ? +?+...+? = i-16   
마지막 항이 25인 경우 → ?+?+...+? = i-25   

 **i = ?+?+...+ ? + j**

**N = i ^ 2 + (N - i^2 )**

**D[N] = min(D[N- i^2) + 1**

만약에 방법의 수라면? **D[N ] = ΣD[N-i^2]**

지금 점화식의 경우엔 변수가 들어가있다

변수의 범위를 구하게 된다면   **1 ^ 2 ≤ i^2 ≤ N**  

```java
for (int i=1; i<=n; i++) {
    **d[i] = i; -> i 는 정답이 i를 넘어갈 수 없으니까(0은세팅하면안됨)**
    for (int j=1; j*j <= i; j++) {
        if (d[i] > d[i-j*j]+1) {
            d[i] = d[i-j*j]+1;
        }
		} 
}
```

## 합분해

0부터 N 까지의 정수 K개를 더해서 그 합이 N이 되는 경우의 수   

D[K][N] = ?   

→ (N - L) + L(가상의 변수) = N

→ N-L = D[K-1][N-L]

→ D[K][N] = ΣD[K-1][[N-L](notion://www.notion.so/0%E2%89%A4L%E2%89%A4N)]

```java
d[0][0] = 1LL;
for (int i=1; i<=k; i++) {
    for (int j=0; j<=n; j++) {
        for (int l=0; l<=j; l++) {
            d[i][j] += d[i-1][j-l];
            d[i][j] %= mod;
        }
	}
}
```

문제를 구하기 위해 점화식을 구하고 → 마지막 한 단계를 찾고 ( 왜냐면 그 단계가 빠지면 문제가 작아지는 것이라) 어떻게 진행이 되는 지 찾고 이런 방식으로 해결을 하게 된다면 다이나믹을 좀 더 수월하게 풀게 된다.