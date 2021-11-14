# 브루트포스 문제풀이

## 날짜계산
https://www.acmicpc.net/problem/1476

```java
    public static void main(String[] args) {
        int answer = 0;
        Scanner sc = new Scanner(System.in);
        int E = sc.nextInt() - 1;
        int S = sc.nextInt() - 1;
        int M = sc.nextInt() - 1;
        while(!(answer % 15 == E && answer % 28 == S && answer % 19 == M)){
            answer ++;
        }

        System.out.println(answer + 1);
    }
```

## 일곱난쟁이
https://www.acmicpc.net/problem/2309


```java
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] heights = new int[9];
        int sum = 0;
        for(int i = 0 ;  i< 9; i++){
            int temp = sc.nextInt();
            heights[i] = temp;
            sum += temp;
        }
        Arrays.sort(heights);

        for(int i = 0 ; i < 9 ; i++){
            for(int k = i + 1; k < 9 ; k++ ){
                if( sum - heights[i] -  heights[k] == 100 ){
                    for (int j=0; j<9; j++) {
                        if (i == j || k == j) continue;
                        System.out.println(heights[j]);
                    }
                    System.exit(0);
                }
            }
        }
    }
```

## 카잉달력

```java

import java.io.*;


public class Main {
    //============== 카잉달력 ==============//
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());

        while(T>0){
            int result = getAnswer(br.readLine());
            bw.write(result+"\n");
            T--;
        }

        bw.flush();
    }

    public static int getAnswer (String str){

        String [] strArr = str.split(" ");

        int m = Integer.parseInt(strArr[0]);
        int n = Integer.parseInt(strArr[1]);
        int x = Integer.parseInt(strArr[2]) - 1;
        int y = Integer.parseInt(strArr[3]) - 1;

        for(int k = x; k < m * n ; k += m){
            if( k % n == y){
                return k + 1;
            }
        }

        return -1;
    }

}
```

## 집합

https://www.acmicpc.net/problem/11723

기억해야 할 점 : (1 << 20) - 1 하게 될 경우 2진수 변환시 (Integer.toBinaryString이용) 1 이 1의 자리 부터 20번쨰 자리까지 생성인데    
1 << n으로 계산을 하게 될 경우 0의 자리가 있다고 생각하고 계산을 하게 된다 (0의 자리 까지 있는 집합으로 표현이 된다.)   
그렇기 때문에 입력을 받을 때 1을 빼주거나, 아니면 (1 << 21) - 1로 바꿔야 하는데 여기 문제에서는 1~20 의 집합이란 조건이었기 때문에 바꿔주었다.   

```java

public class BitMask {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int M = Integer.parseInt(br.readLine());
        int S = 0;

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        while( M > 0 ){
            String [] str = br.readLine().split(" ");
            String inpt = str[0];

            switch (inpt){
                case "add" :{
                    int n = Integer.parseInt(str[1]) - 1;
                    S |= (1 << n);
                    break;
                }
                case "check" : {
                    int n = Integer.parseInt(str[1]) - 1;
                    String s = (S & (1 << n)) > 0 ? "1\n" : "0\n";
                    bw.write(s);
                    break;
                }
                case "remove" : {
                    int n = Integer.parseInt(str[1]) - 1;
                    S &= ~(1 << n);
                    break;
                }
                case "toggle" : {
                    int n = Integer.parseInt(str[1]) - 1;
                    S ^= (1 << n);
                    break;
                }
                case "all" : {
                    S = (1 << 20) - 1;
                    break;
                }
                case "empty" : {
                    S = 0;
                    break;
                }
                default :
                    break;
            }


            M--;
        }

        bw.flush();
    }
}

```

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

## 1로 만들기 


```java
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] d = new int[n + 1];
    d[1] = 0;
    for(int i=2; i<n+1; i++){
        d[i] = d[i-1] + 1;
        // 2의 배수이면서 이전에 1을 뻈을 때 연산한 값보다 지금 이 값이 작을 떄
        if(i % 2 == 0 && d[i] > d[i/2]+1){
            d[i] = d[i/2] + 1;
        }
        if(i % 3 == 0 && d[i] > d[i/3] + 1){
            d[i] = d[i/3] + 1;
        }

    }

    System.out.println(d[n]);
}
```

# 스택

## 오큰수

```java
public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine()); // n을 입력 받는다.
        String [] strArr = br.readLine().split(" "); // 수열에 담을 String 입력받는다.

        int[] inputArr = new int[n]; // 수열
        for( int i = 0; i < n; i++ ){
            inputArr[i] = Integer.parseInt(strArr[i]);
        }
        //======= 입력 끝 =======//
        Stack<Integer> basket = new Stack<>();
        int[] resultArr = new int[n];

        basket.push(0);// 0번째 인덱스 부터 판별한다.

        for(int j = 1; j < n; j++){ //1~n을 검사
            if(basket.empty()){
                basket.push(j);
            }
            while(!basket.empty() && inputArr[basket.peek()] < inputArr[j]){ // 4 < 6
                resultArr[basket.pop()] = inputArr[j];
            }
            basket.push(j);
        }

        while(!basket.empty()){
            resultArr[basket.pop()]= -1;
        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        for(int item : resultArr){
            bw.write(item + " ");
        }
        bw.write("\n");
        bw.flush();
    }
```

## 스택수열

```java
public static void solve(int[] a) {
        int n = a.length;
        Stack<Integer> stack = new Stack<Integer>();
        int m = 0;
        StringBuilder sb = new StringBuilder();
        for(int x : a) {
            if (x > m) {
                while (x > m) {
                    stack.push(++m);
                    sb.append("+\n");
                }
                stack.pop();
                sb.append("-\n");
            } else {
                if (stack.peek() != x) {
                    System.out.println("NO");
                    return;
                }
                stack.pop();
                sb.append("-\n");
            }
        }
        System.out.println(sb);
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i=0; i<n; i++) {
            a[i] = sc.nextInt();
        }
        solve(a);
    }
```

## 균형잡힌 세상


```java
import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        boolean isLast = false;
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        while(!isLast){
            String str = br.readLine();

            if(str.equals(".")){
                isLast = true;
            }else{
                bw.write(isBalanced(str));
            }
        }

        bw.flush();
        bw.close();
        br.close();
    }
    public static String isBalanced (String s){
        String[] sArr = s.split("");
        Stack<String> gualhos = new Stack<>();

        for(String item : sArr){
            if(item.equals("(") || item.equals("[")){
                gualhos.push(item);
            }else if(item.equals(")")){
                if(!gualhos.empty() && gualhos.peek().equals("(")){
                    gualhos.pop();
                }else{
                    return "no\n";
                }
            }else if(item.equals("]")){
                if(!gualhos.empty() && gualhos.peek().equals("[") ){
                    gualhos.pop();
                }else{
                    return "no\n";
                }
            }
        }

        if(gualhos.empty()){
            return "yes\n";
        }else{
            return "no\n";
        }
    }
}
```

# 함수

## 달팽이는 올라가고 싶다

```java
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer stringTokenizer = new StringTokenizer( br.readLine());
        int A = Integer.parseInt(stringTokenizer.nextToken());
        int B = Integer.parseInt(stringTokenizer.nextToken());
        int V = Integer.parseInt(stringTokenizer.nextToken());

        int res = (int) Math.ceil((V - B) / (double)(A - B));
        System.out.println(res);
    }
}
```

## 부녀회장이 될테야 
```java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();


        int [][] basket = new int [15][14]; // 0층부터 14층까지
        int [] firstRow = {1,2,3,4,5,6,7,8,9,10,11,12,13,14}; // 찻째줄
        basket[0] = firstRow;

        for(int i = 1 ; i <= 14 ; i++){
            for(int j =0; j < 14; j++){
                basket[i][j]  = j == 0 ? 1 : basket[i-1][j] + basket[i][j-1];
            }
        }


        for(int i = 0; i<T; i++){
            int k = sc.nextInt();
            int n = sc.nextInt();
            System.out.println(basket[k][n-1]);
        }
    }
}
```


## 벌집

```java
import java.io.*;
public class Main{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        n = (int)Math.ceil((double)(n - 1) / 6);

        int idx = 0;
        int increasing = 0;

        while(n > increasing){
            idx ++;
            increasing += idx;
        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        bw.write(1+idx+"");
        bw.flush();
        bw.close();
        br.close();
    }
}
```

## 손익분기점

```java
import java.io.*;

public class Main{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String [] inputs = br.readLine().split(" ");

        int quantity = 1;
        long A = (long)Integer.parseInt(inputs[0]);
        long B = (long)Integer.parseInt(inputs[1]);
        long C = (long)Integer.parseInt(inputs[2]);

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
       bw.write(B >= C ? (-1+"") : ((A/(C-B)) + 1 +""));
        bw.flush();
        bw.close();
        br.close();
    }
}
```