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