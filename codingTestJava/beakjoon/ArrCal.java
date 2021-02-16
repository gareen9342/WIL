package beakjoon;

import java.io.*;
import java.util.*;

public class ArrCal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int C = Integer.parseInt(sc.nextLine());
        // 각 줄 순회
        for(int i = 0; i < C; i++){
            String row = sc.nextLine();
            String []  strArr = row.split(" ");

            List<Integer> list = new ArrayList<>(); // 점수 리스트
            int sum = 0; //함계
            for( int x = 1;  x< strArr.length; x++){
                int num = Integer.parseInt(strArr[x]) ;//숫자 값 가져오기
                sum += num;
                list.add(num);
            }

            double avg = sum / list.size();
            double result = (double)(list.stream().filter( x ->  x > avg ).count()) / (double) (list.size());
            System.out.println(String.format("%.3f", result * 100)+"%");
        }
    }
}


/**
 *  public static void main(String[] args) {
 *         Scanner sc = new Scanner(System.in);
 *         int n =sc.nextInt();
 *
 *         for(int i = 0; i < n ; i++ ){
 *             String [] quiz = sc.next().split("");
 *
 *             int result = 0;
 *             int acc = 0;
 *
 *             for(String s : quiz){
 *                 if(s.equals("O")){
 *                     acc++;
 *                     result +=acc;
 *                 }else{
 *                     acc = 0;
 *                 }
 *             }
 *             System.out.println(result);
 *         }
 *
 *     }
 *
 *
 */
/**
 *     public static void main(String[] args) {
 *         List<Integer> arr = new ArrayList<Integer>();
 *         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 *         BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
 *         try{
 *             for( int i = 0; i < 10 ; i++ ){
 *                 arr.add(Integer.parseInt(br.readLine()));
 *             }
 *             Integer [] resultArr = new Integer [42]; // 0 ~ 41
 *             Integer 로 받을지 int로 받을지 약간 고민했다 ; 0;
 *Arrays.fill(resultArr,0);
         *
         *arr.forEach(x->{
         *resultArr[x%42]+=1;
         *});
         *             // Stream 내장함수로 한 번 써보고 싶어서 이렇게 만들었는데 포문이 더 효율이 좋을 것 같다.
         *long result=Arrays.asList(resultArr).stream().filter(x->x>0).count();
         *bw.write(result+"");
         *
         *bw.flush();
         *bw.close();
         *br.close();
         *
         *}catch(Exception e){
         *e.printStackTrace();
         *}
         *
         *
         *
         *}
 *
 *
 */
/**
 *  public static void main(String[] args) {
 *         BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 *         BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
 *
 *         try{
 *             int [] result = {0,0,0,0,0,0,0,0,0,0};
 *             int A = Integer.parseInt(br.readLine());
 *             int B = Integer.parseInt(br.readLine());
 *             int C = Integer.parseInt(br.readLine());
 *
 *             String []  strArr = ((A*B*C)+"").split("");
 *
 *             for( String s : strArr){
 *                 result[Integer.parseInt(s)] += 1;
 *             }
 *
 *             for(int val : result ){
 *                 bw.write(val+"\n");
 *             }
 *
 *             bw.flush();
 *             bw.close();
 *             br.close();
 *
 *         }catch(Exception e){
 *             e.printStackTrace();
 *         }
 *     }
 *
 */
/*
*
    public static void main(String[] args) {

        int [] arr = new int [9];
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < 9; i++ ){
            arr[i] = sc.nextInt();
        }

        int [] res = { 0, 0 } ; // val, index

        for(int i = 0 ; i< arr.length; i++){
            if(res[0] < arr[i]){
                res[0] = arr[i];
                res[1] = i;
            }
        }
        System.out.println(res[0]);
        System.out.println(res[1]+1);
    }
*
* */

/**
 *
 * max, min 구하기
 * Scanner sc = new Scanner(System.in);
 *         String N = sc.nextLine();
 *         String input = sc.nextLine();
 *
 *         StringTokenizer stringTokenizer = new StringTokenizer(input);
 *         int [] result = {1000000, -1000000}; // min, max
 *
 *         while(stringTokenizer.hasMoreTokens()){
 *             int token = Integer.parseInt(stringTokenizer.nextToken());
 *
 *             if( result[0] > token ){
 *                 result[0] = token;
 *             }
 *             if( result[1] < token ){
 *                 result[1] = token;
 *             }
 *         }
 *
 *         System.out.println(result[0] + " " + result[1]);
 *     }
 *
 */

