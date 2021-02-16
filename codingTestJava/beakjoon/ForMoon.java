package beakjoon;

import java.io.*;
import java.util.Scanner;
import java.util.StringTokenizer;

public class ForMoon {
    public static void main(String[] args) {
        try{
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
            StringTokenizer strk = new StringTokenizer(br.readLine());
            strk.nextToken(); // N은 그냥 넘김 (tokenizer쓸걱라)
            int X = Integer.parseInt(strk.nextToken());

            StringTokenizer strA = new StringTokenizer(br.readLine());

            String result = "";
            while(strA.hasMoreTokens()){
                int token = Integer.parseInt(strA.nextToken());
                if(token < X){
                    result += token;
                    result += " ";
                }
            }
            bw.write(result);

            bw.flush();
            bw.close();
            br.close();
        }catch(Exception e ){
            e.printStackTrace();
        }
    }
}



//==========================//
/**
 *  public static void main(String[] args) {
 *         try{
 *             BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 *             BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
 *             int T = Integer.parseInt(br.readLine());
 *
 *
 *             for(int i =0; i<T; i++){
 *                 StringTokenizer stknr = new StringTokenizer(br.readLine() , " ");
 *                 int A = Integer.parseInt(stknr.nextToken());
 *                 int B = Integer.parseInt(stknr.nextToken());
 *                 bw.write("Case #"+(i+1)+": "+A+" + "+ B +" = "+ (A+B) + "\n");
 *             }
 *
 *             br.close();
 *             bw.flush();
 *             bw.close();
 *         }catch( Exception e ){
 *             e.printStackTrace();
 *         }
 *
 *     }
 *
 *
 */
//==========================//
/**
 *     public static void main(String[] args) {
 *         Scanner sc = new Scanner(System.in);
 *
 *         int N  = sc.nextInt();
 *
 *         for(int i = 1; i <= N; i++){
 *             System.out.println(i);
 *         }
 *         sc.close();
 *     }
 *
 *
 */
//==========================//
/**
 * @ 빠른 A+B
 * public static void main(String[] args) {
 *         try{
 *                  BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 *                  BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
 *                  int T = Integer.parseInt(br.readLine());
 *
 *                  for(int i = 0 ; i< T ; i++){
 *                  String str = br.readLine();
 *                  StringTokenizer stknzr = new StringTokenizer(str);
 *                  int A = 0;
 *                  int B = 0;
 *                  while(stknzr.hasMoreTokens()){
 *                      A = Integer.parseInt(stknzr.nextToken());
 *                      B = Integer.parseInt(stknzr.nextToken());
 *                  }
 *                  bw.write(A+B + "\n");
 *
 *             }
 *
 *             br.close();
 *             bw.flush();
 *             bw.close();
 *         }catch(IOException e){
 *             e.printStackTrace();
 *             System.out.println(e.getMessage());
 *         }
 *     }
 *
 */
//====================//
/**
 *  public static void main(String[] args) {
 *         Scanner sc = new Scanner(System.in);
 *         int num = sc.nextInt();
 *         int res = 0;
 *         for (int i = 1 ; i <= num; i++ ){
 *             res += i;
 *         }
 *         System.out.println(res);
 *     }
 *
 */
// ===================== //
/*public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        for(int i = 1; i <= 9 ; i++ ){
            System.out.println(num + " * " + i + " = " + num * i );
        }
    }
*
* */

