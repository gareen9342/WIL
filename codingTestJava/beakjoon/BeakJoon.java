package beakjoon;

import java.util.Arrays;
import java.util.Scanner;

public class BeakJoon {
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
