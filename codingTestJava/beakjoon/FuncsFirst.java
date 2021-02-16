package beakjoon;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Stream;

public class FuncsFirst {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int count = 0;

        for(int i = 1; i <= N ; i++){
            if(isHan(i)){
                count++;
            }
        }

        System.out.println(count);
    }
    public static boolean isHan ( int n ){
        // 1보다 크거나 같고 n보다 작거나 같은 한수의 개수
        int before = 0;
        int comparedBefore = 0;
        boolean isFirst = true;
        boolean getAnswer = false;

        if((n+"").length() < 3){
            return true;
        }

        while(n > 0){
            int cur = n % 10;

            if(isFirst == true){
                before = cur;
                isFirst = false;
            }else{
                if(getAnswer == false){
                    getAnswer = true;
                }else{
//                    System.out.println(( before - cur ) + " comparedBefore ="+ comparedBefore);
                    if(before - cur != comparedBefore){
                        return false;
                    }
                }
                comparedBefore = before - cur;
                before = cur;
            }
            n /= 10;
        }
        return true;
    }
}
/**
 *  public static void main(String[] args) {
 *         long result = sum(new int[]{1, 12, 3, 4, 8, 5});
 *         System.out.println("result = " + result);
 *     }
 *
 *     public static long sum (int [] a){
 *         long result = 0;
 *         for(int i =0; i<a.length; i++){
 *             result += a[i];
 *         }
 *         return result;
 *     }
 *
 */

/*
*
*  public static void main(String[] args) {

        int [] arr = (Stream.iterate(0, n -> n+1)
                    .limit(10001))
                    .mapToInt(i -> i)
                    .toArray();

        Arrays.fill(arr, 1); // 0~10000 // 0은 넘기고 1~10000부터 추릴거임

        int num  = 1;

        while(num < 10000){
            int  temp = sumEach(num);
            System.out.println("temp = " + temp);
            if(temp <= 10000){
                arr[temp] = 0;
            }
            num ++;
        }

        for(int i = 1; i<arr.length; i++){
            if(arr[i] == 1){
                System.out.println(i);
            }
        }
    }


    public static int sumEach(int n){
        int result = n;
        int num = n;
        while (num >0) {
            result += num%10;
            num /= 10;
        }
        return result;
    }
*
*
*
*
* */