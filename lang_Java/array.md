# array

>같은 형태의 값들을 나열하여 메모리에 정해준 만큼 할당

`{val1, val2 ...}`

- 방법 1

    ```java
    int [] a ; //int 형 값을 여러개 담을 수 있다. 
    a = new int[5];
    a[0] = 1;
    ```

- 방법 2

    ```java
    //방법 2
    int[]b = new int[] {5,4,3,2,1}; // 선언 정의 초기
    ```

- 방법 3

    ```java
    //방법 3 static 방법으로 배열을 만든다.
    int [] c = {6,7,8,9,10};// 선언 초기화
    ```

- 출력

    ```java
    System.out.println((a[0] + b[1] + c[2]));
    System.out.println(c); // 주소
    System.out.println(Arrays.toString(c)); // 출력문
    ```

  ### 2차원배열

  : int[][] a = new int[x][y];

    - 방법 1

        ```java
        int[][] a = new int[3][2];
        		a[0][0] = 1;
        		a[0][1] = 2;
        		a[1][0] = 3;
        		a[1][1] = 4;
        		a[2][0] = 5;
        		a[2][1] = 6;

        //		System.out.println(Arrays.toString(a)); 이렇게 하면 주소값이 나와서 안됨
        		System.out.println(Arrays.deepToString(a));
        ```

    - 방법 2

        ```java

        		int[][] b = new int[3][];
        		b[0] = new int[3];
        		b[1] = new int[5];
        		b[2] = new int[1];
        ```

    - 방법 3

        ```java
        int[][] c = new int[][] { { 1, 2 }, { 3, 4, 5 }, { 6, 7, 8, 9 }, { 10 } };
        ```

    - 방법 4

        ```java
        int[][] d = { { 1, 2, 3, 4 }, { 5 }, { 6, 7, 8 }, { 9, 10 } };
        ```

  ## 응용

  ### abcd....

    ```java
    /**
    	 * 1) a b c d e f g h i j k
    	 * 
    	 * 
    	 * 
    	 * 일차원배열 (char[])에 반복문을 사용하여알파벳을 저장한 후에 출력
    	 * 
    	 */

    	public static void main(String[] args) {
    		char[] arr = new char[26];
    		System.out.println((int) 'A');
    		System.out.println((char) 97);
    		for (int i = 0; i < arr.length; i++) {
    			arr[i] = (char) ('a' + i); //
    			System.out.print(arr[i]);
    		}
    		//출력끝
    		
    		System.out.println();
    //		for(int i = arr.length ;  i > 0 ; i --)
    //		{
    //			System.out.print(arr [i-1]);
    //		}
    		
    		int tmp = 1;
    		for ( int i =arr.length; i > 0 ; i --)
    		{
    			System.out.printf("%s", arr[i - 1]);
    			if(tmp % 6 == 0)
    			{
    				System.out.println();
    			}
    			tmp++;
    		}
    		//
    		System.out.println();
    		for (int i = 0; i < arr.length; i++) {
    			char c = (char)((int) (arr[i]) - 32);
    			System.out.print(c );
    		}
    	}
    ```

  ## 얕은 복사 (Shallow copy)

  객체의 주소를 복사한다. 복사본을 수정하면 원본도 같이 수정된다.

    ```java
    int [] original = {10, 20, 30, 40, 50};
    int [] copy = original;

    System.out.println(Arrays.toString(original));
    System.out.println(Arrays.toString(copy));
    		
    System.out.println(original); //[I@1c4af82c 
    System.out.println(copy); //[I@1c4af82c

    //같은 주소가 복사되었다. 
    System.out.println(original == copy); // true
    ```

  ## 깊은 복사 (Deep copy)

  객체의 값을 복사한다. 복사본을 수정해도 원본이 수정되지 않는다.

  새로운 객체를 생성해서 , 값만 복사해오는 개념

    ```java
    int[] original = { 10, 20, 30, 40, 50 };
    int[] copy01 = new int[original.length]; 
    		/// 이게 중요~
    for (int i = 0; i < original.length; i++) {
    	copy01[i] = original[i];
    }

    //========출력===========//
    System.out.println(Arrays.toString(original));
    System.out.println(Arrays.toString(copy01));
    System.out.println(original);
    System.out.println(copy01);

    System.out.println(original == copy01); //  false

    ```

    1. 객체 생성해서 값을 복사해서 직접 넣어줌~    
       `**copy01[i] = original[i];**`
    2. original에게 요청하여 복사
       `**int[] copy02 = original.clone();**`
    3. System.arraycopy 사용
       `System.arraycopy` //(원본, 시작idx , 복사본, 복사본 시작 idx(이거 포함부터) , 갯수 )

    ```java
    int[] systemArr = new int[10];
    Arrays.fill(systemArr, 100);
    System.out.println(Arrays.toString(systemArr));

    // 원본, 시작, 복사본, 시작, 갯수
    System.arraycopy(original, 0 , systemArr , 1, 3);
    System.out.println(Arrays.toString(systemArr)); //[100, 10, 20, 30, 100, 100, 100, 100, 100, 100]
    ```