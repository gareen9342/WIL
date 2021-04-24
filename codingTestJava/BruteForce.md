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