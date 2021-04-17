# 동적 프로그래밍 문제 풀이

## RGB 거리
<https://www.acmicpc.net/problem/1149>
계속 메모이제이션을 하며 최솟값을 찾아 최적의 조합을 만드는 식으로 풀이

 ```java
    
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        int[][] colors = new int [N][3];
        for(int i = 0; i < N ; i++){
            for(int k = 0; k < 3 ; k++){
                colors[i][k] = sc.nextInt();
            }
        }
        int[][] d = new int [N][3];
        d[0] = colors[0];
        // 수 세팅 끝
        for (int i=1; i<N; i++) {
            d[i][0] = Math.min(d[i-1][1], d[i-1][2]) + colors[i][0];
            d[i][1] = Math.min(d[i-1][0], d[i-1][2]) + colors[i][1];
            d[i][2] = Math.min(d[i-1][0], d[i-1][1]) + colors[i][2];
        }

        // get min val
        System.out.println(Math.min(Math.min(d[N-1][0],d[N-1][1]),d[N-1][2]));

    }
```

## 연속합

```java
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] a = new int [n];
        for(int i = 0; i< n ; i++){
            a[i] = sc.nextInt();
        }
        int[] d = new int[n];
        for( int i = 0 ; i < n; i++){
            d[i] = a[i];
            if(i == 0 )
                continue;

            d[i] = Math.max(d[i - 1] + a[i], a[i]);
        }
        int max = 0;
        for(int i = 0; i < n ; i++ ){
            if(i == 0 ){
                max = d[i];
            }
            max = max > d[i] ? max : d[i];
        }
        System.out.println(max);
    }
```

## 신나는 함수 실행

문제에서 대놓고 메모이제이션을 하라고 주어졌는데 중간에 조건문 순서를 바꿔써서 계속 헤맸다 ;0;그래서 시간을 좀 까먹었지만 성공~

```java

public class Dynamic2 {
    public static int[][][] d = new int[21][21][21];
    public static boolean[][][] k = new boolean[21][21][21];



   //==== 신나는 함수 실행 ==== //
   public static void main(String[] args) throws IOException {
       BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
       BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

       String input ="";
       while(!(input = br.readLine()).equals("-1 -1 -1")){
           String[] arr = input.split(" ");

           int a = Integer.parseInt(arr[0]);
           int b = Integer.parseInt(arr[1]);
           int c = Integer.parseInt(arr[2]);
           bw.write("w("+a+", "+b+", "+c+") = "+ w(a,b,c) + "\n");
       }

       bw.flush();

       bw.close();
       br.close();
   }
    public static int w(int a , int b, int c ){

        if(a <= 0 || b <= 0 || c <= 0 ){
            return 1;
        }

        if(a > 20 || b > 20 || c > 20) {
            a = 20;
            b = 20;
            c = 20;
        }

        if(k[a][b][c]){
            return d[a][b][c];
        }

        if(a < b && b < c){

            if(!k[a][b][c-1]){
                d[a][b][c-1] = w(a, b, c-1);
            }
            if(!k[a][b-1][c-1]){
                d[a][b-1][c-1] = w(a,b-1,c-1);
            }
            if(!k[a][b-1][c]){
                d[a][b-1][c] = w(a,b-1,c);
            }
            k[a][b][c] = true;
            d[a][b][c] = d[a][b][c-1] +  d[a][b-1][c-1] - d[a][b-1][c];

        }else{
            if(!k[a-1][b][c]){
                d[a-1][b][c] = w(a-1, b, c);
            }
            if(!k[a-1][b-1][c]){
                d[a-1][b-1][c] = w(a-1,b-1,c);
            }
            if(!k[a-1][b][c-1]){
                d[a-1][b][c-1] = w(a-1, b, c-1);
            }
            if(!k[a-1][b-1][c-1]){
                d[a-1][b-1][c-1] = w(a-1,b-1,c-1);
            }
            k[a][b][c] = true;
            d[a][b][c] = d[a-1][b][c] + d[a-1][b-1][c] + d[a-1][b][c-1] - d[a-1][b-1][c-1];
        }

        return d[a][b][c];
    }
}
```

## 2 * n 타일링 (백준)

이 문제 백준이랑 프로그래머스에도 있었다. 이 전의 값을 가져와서 d[n] = d[n-1] (끝이 세로 모양 타일이 올 떄) + d[n-2] 끝이 가로 모양 타일이 올 떄)
이렇게 두 가지를 더해서 저장하며 연산

```java
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] d = new int[n + 1];
        d[0] = 1;

        for(int i = 1; i <= n ; i++){
            d[i] = i == 1 ? d[0] : d[i-1] + d[i-2];
            d[i] %= 10007;
        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        bw.write(d[n]+"");
        bw.flush();
        bw.close();
        br.close();
    }
```

## 123더하기

<https://www.acmicpc.net/problem/15988>
메모이제이션을 이용하였다. 

```java
public class Dynamic5 {

    static final long mod = 1000000009L;

    public static void main(String[] args) {
        long[] d = new long[1000001];
        d[1] = 1;
        d[2] = 2;
        d[3] = 4;

        for(int i = 4 ; i <= 1000000; i++){
            d[i] = d[i-1] + d[i-2] + d[i-3];
            d[i] %= mod;
        }

        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while( t-- > 0){
            int n = sc.nextInt();
            System.out.println( d[n]);
        }
    }
}
```

## 동물원
https://www.acmicpc.net/problem/1309    
현재 칸에서 왼쪽, 오른쪽, 둘 다 아닐 떄의 경우의 수일 떄를 2차원 배열에 메모하여 모든 경우의 수를 구하는 방식으로 구한다.
틀린 이유: mod연산이 너무 어려웠다... 매번 값을 낼 때 나눠주고 마지막에 모든 합을 구할 때도 나눠줬어야 했다.


```java
    static final int mod = 9901;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] d = new int[n + 1][3];

        d[1][0] = 1;
        d[1][1] = 1;
        d[1][2] = 1;
        for( int i = 2 ; i <= n; i++ ){
            d[i][0] = (d[i - 1][1] + d[i - 1][2]) % mod;
            d[i][1] = (d[i - 1][0] + d[i - 1][2]) % mod;
            d[i][2] = (d[i - 1][0] + d[i - 1][1] + d[i - 1][2]) % mod;
        }

        System.out.println((d[n][0] + d[n][1] + d[n][2]) % mod );
    }
```