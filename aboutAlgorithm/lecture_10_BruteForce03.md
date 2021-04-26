# 브루트 포스 (BruteForce) - N과 M

브루트포스에서 방법을 만드는 경우의 수는 크게 총 세 가지 

1. 재귀
2. 순열
3. 비트마스크

이 중 재귀가 가장 중요하다. 이유는 순열, 비트마스크 전부 재귀로 해결이 가능하기 때문이다. 

재귀를 연습하기 위해 N과 M문제를 풀기

재귀를 이용하는 방법을 이용하는 방법에는 주로 순서와 선택과 관련된 문제를 알아볼 수 있다.

## N 과 M (1)

1부터 N까지의 자연수 중에서 **중복 없이** **M**개를 고른 수열을 모두 구하는 문제   
'중복 없이' 'M개를' 고른 다는 것이 가장 중요한데 이 문제는 순서와 관련된 문제라고 볼 수 있다.    
3개의 빈 칸이 있다고 가정해보자.     
우리는 가장 앞에 부터 수를 하나씩 넣어보겠다고 치면   
맨 앞에는 5가지 / 그 다음에는 맨 처음에 넣은 수를 제외한 4가지 / ...   
우리는 중복된 수를 넣지 않기 위해서 이를 기록하는 배열 check를 만들어 준다.    
1~N까지 중 check[i] true →  사용한 수 check[i] → false      
체크된 지 확인 후 사용된 것 이면 넘어가고 이 재귀호출이 끝나면 다시 그 체크 된 것을 false로 변경, 이전 재귀 호출로 넘어가게 한다. 

```cpp
bool c[10]; //  사용했으면 true, 아니면 false
int a[10]; // 결과를 저장하는 배열
// n과 m은 단순히 입력을 의미한다. 
void go(int index, int n, int m) { // 여기서 인덱스는 인덱스 번째를 채우려고 한다를 의미한다 (가장 중요!)
	if (index == m) { // 수열을 출력
			return;
   }
    for (int i=1; i<=n; i++) {
        if (c[i]) continue; // 이미 사용되어 진 것이면 넘어감
        c[i] = true; a[index] = i; // 체크해주고, index번째에 i를 넣어준다. 
        go(index+1, n, m);
        c[i] = false;
    }
}
```

## N 과 M (2) - 가장 중요

이번에는 N 개 중 M개를 고르는 것은 같지만 오름차순

1~N 중에서 앞에서 사용하지 않은 수가 index번째에 와야 함은 같은데, 이전에 사용하지 않은 수로 하는 것이 아니라 하나 큰 수로   
이전에는 c 배열이 중복을 제거하기 위한 배열로 사용되었는데 현재 문제에서는 그럴 필요가 없기 때문에 c배열을 사용하지 않아도 문제를 풀 수 있다. 

```java
public class NandM2 {
    static boolean[] c = new boolean[10];
    static int[] a = new int[10];
    static void go(int index, int start, int n, int m) {
        if (index == m) {
            for (int i=0; i<m; i++) {
                System.out.print(a[i]);
                if (i != m-1) System.out.print(' ');
            }
            System.out.println();
            return;
        }
        for (int i=start; i<=n; i++) {
//            if (c[i]) continue;
//            c[i] = true;
            a[index] = i;
            go(index+1, i+1, n, m);
//            c[i] = false;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        go(0,1,n,m);
    }
}
```

이 방법은 각각의 자리에 어떤 수를 추가할 건지에 대한 접근이고, 어떤 수가 들어갈지 결정할 것인가에 대한 관점으로 접근할 수도 있다.   
여기서의 index는 index라는 수를 각각의 자리에 추가할지, 하지 않을 지 결정하기 위한 것이고   
selected는 지금까지 선택한 수의 개수이다. 

```cpp
int a[10];
void go(int index, int selected, int n, int m) {
	if (selected == m) { // 수열 출력
		return;
	 }
    if (index > n) return; // 이 문제의 경우 이런 순간이 올 수 있다. 
		// ========== 인덱스를 결과에 추가하는 부분 ========== //
    a[selected] = index;
    go(index+1, selected+1, n, m); // 추가했으니 selected에 1을 더해 다음 수로 넘어가게 한다. 

		// ========== 인덱스를 결과에 추가하지 않는 부분 ========== //
    a[selected] = 0;
    go(index+1, selected, n, m);
		//이 두 개의 순서를 바꾸게 된다면 답을 구할 수 없다. 지금 이 문제의 경우에는 사전순으로 구하라는 조건이 있기 때문에 신경써야 한다. 
}
// go(1, 0, n, m);
```

## N 과 M (3)

1부터 N까지의 자연수 중에서 M개를 고르면서 중복이 가능

N과 M문제 1에서 중복을 제거하는 부분을 제거한다. 

## N 과 M (4)

1부터 N까지 자연수 중에서 M개를 고른 수열을 모두 구하는 문제 ( 중복 선택 가능, 비내림차순 )    
N과 M(2)에서 중복 선택 가능만 추가된 부분    
N과 M2는 두 가지로 풀었다.     
하나는 순서를 기준으로 선택, 하나는 선택을 할지에 대해서 선택하는 방법   
순서를 기준으로 할 때에는 원래 시작값을 넘길때에 중복이 가능하게 넘기기만 하면 된다.   
각각의 자연수를 선택하는 경우와, 선택하지 않는 경우가 있다.   
하지만, 중복 선택이 가능하기 때문에, 선택하는 경우를  i개 선택하는 경우로 세분화해야 한다. 

```cpp
int cnt[10];
////====== index : 수 / selected : 선택한 수의 개수 / m  : M개를 선택 
void go(int index, int selected, int n, int m) {
	if (selected == m) { // 수열 출력
		return; 
	}
	if (index > n) return;
// ========= 선택한가면 몇 개를 선택할지 알아야 하는데 
  for (int i=m-selected; i>=1; i--) { // 선택할 수 있는 수의 최대 개수부터 
    cnt[index] = i; // cnt[i] = 수 i를 몇 번 포함하는 지
    go(index+1, selected+i, n, m);
  }

//감소하는 순으로 만든 이유 ? 문제의 조건 떄문에 
//============= 선택 x =============//
  cnt[index] = 0;
  go(index+1, selected, n, m);
}
```