# Dynamic Programming 문제 적용해서 생각해보기

## 1로 만들기

정수 X 에 사용할 수 있는 연산은 다음과 같이 세 가지이다. 

1. X 가 3으로 나누어 떨어지면, 3으로 나눈다.
2. X 가 2로 나누어 떨어지면, 2로 나눈다.
3. 1을 뺀다.

어떤 정수 N 에 위의 연산중 하나를 선택해서 1을 만드려고 한다. 연산을 사용하는 횟수의 최소값을 구하는 문제

이렇게 생각할 수 있다. 

→ N을 작게 만드는 것이 최종 목적이다. → 2와 3중에서 3으로 나누는 것이 수를 빠르게 작게 만든다. 

하지만 이렇게 적용해서 풀게 되면 10→ 5 → 4→ 2→1 이렇게 되는데 

사실은 10→9→3→1 의 과정을 거쳐 더 빠른 방법으로 연산을 수행할 수 있다. **(반례)**

단순히 그리디처럼 그 때 그 때 더 빠른 방법을 찾아서 연산을 하는 것은 문제를 푸는 법이 될 수 없다. 

그럼 어떤 것이 좋은 방법이 될 수 있을까?

결국은 N-1 , 3의 배수일 경우, 2의 배수일 경우 이렇게 3가지를 모두 수행하여 가장 적은 값을 추출해낼 수 있는 것이 정답인 것이다. 

```java
D[N] = min(D[N/3],D[N/2],D[N-1]) + 1
```

- top-down

```java
public class Dynamic {
    public static int[] d;
    public static int go(int n) {
        if (n == 1) {
            return 0;
        }
        if (d[n] > 0) {
            return d[n];
        }
        d[n] = go(n-1) + 1;
        if (n%2 == 0) {
            int temp = go(n/2)+1;
            if (d[n] > temp) {
                d[n] = temp;
            }
        }
        if (n%3 == 0) {
            int temp = go(n/3)+1;
            if (d[n] > temp) {
                d[n] = temp;
            }
        }
        return d[n];
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        d = new int[n+1];
        System.out.println(go(n));
    }
}
```

- bottom up

```java
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] d = new int[n+1];
        d[1] = 0;
        for (int i=2; i<=n; i++) {
            d[i] = d[i-1] + 1;
            if (i%2 == 0 && d[i] > d[i/2] + 1) {
                d[i] = d[i/2] + 1;
            }
            if (i%3 == 0 && d[i] > d[i/3] + 1) {
                d[i] = d[i/3] + 1;
            }
        }
        System.out.println(d[n]);
    }
}
```

소스만 보는 것이 아니라 개념을 깊게 이해하는 것이 중요하다.
코드를 작성하는 것은 기술적인 영역이지만 알고리즘을 이해하고 적용하는 것이 알고리즘 이해의 본질이기 때문이다. 

## 1,2,3 더하기

정수 n 을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 문제
예시로 4를 들어보자
총 경우의 수를 구하게 된다면 

1 + 1 + 1 + 1
1+ 1 + 2
1 + 2 + 1
2 + 1 + 1
2 + 2
1 + 3
3 + 1

이런 경우의 수들이 있다.
맨 처음에 1로 2로, 3으로 시작하게 되는 경우의 수들로 쪼개 생각해 보게 된다면

...(n-1) + 1 = n
...(n-2) + 2 = n
... (n-3) + 3 = n

이런 식으로 진행되게 된다. 
수열로 만들어서 풀이를 해본다고 생각하면 (종이에 써보자)

```java
public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int[] d = new int[11]; // 문제의 조건 (최대 10)
        d[0] = 1;
        for (int i=1; i<=10; i++) { // 최대 값까지의 결과를 담아줄 
            for (int j=1; j<=3; j++) {
                if (i-j >= 0) {
                    d[i] += d[i-j];
                }
            }
        }
            n일때 어떤 경우의 수가 들어가는 지 계산하기.
			1 ->	1
			2 ->	1 + 1 / 2
			3 ->	1 + 1 + 1/ 2 + 1/ 1 + 2/ 3
			4	->  1 + 1 + 1 + 1 / 2 + 1 + 1/ 1 + 2 + 1 /
			....
	    }
```

경우의 수를 쭉 풀어서 해결하는 부분을 배열을 이용하여 계속 이전값을 참조해 더 해나가며 이 전의 연산했던 것을 갖고 오고, 
새로운 수에 적용하며 풀이한다.