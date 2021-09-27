# JOIN
> 테이블과 테이블을 연결

## 종류
- INNER JOIN
- CROSS JOIN
- OUTER JOIN
- NONEQUI JOIN
- SELF JOIN

## INNER JOIN
교집합, 두 개의 테이블중 버리는 값이 없는 의미있는 값들만 추출하는 개념   
`SEKECT * FROM M INNER JOIN S ON M1 = S1`

## CROSS JOIN
두 테이블의 모든 조합을 다 만들어 내는 것 
`SELECT FROM M CROSS JOIN S`   
`SELECT FROM M, S`   

## OUTER JOIN
LEFT 혹은 RIGHT쪽의 모든 결과를 보여준 후 반대쪽에 대해는 매칭 값이 없얻 보여주는 JOIN을 의미   

`SELECT * FROM M LEFT OUTER JOIN S ON M1 = S1;`   
`SELECT * FROM M, S WHERE M1 = S1(+);`   
`SELECT * FROM M RIGHT OUTER JOIN S ON M1 = S1;`
`SELECT * FROM M, S WHERE (+) M1 = S1;`   

## NON EQUI JOIN   
- 테이블의 어떤 컬럼도 JOIN할 테이블의 컬럼과 일치하지 않을 때      
`SELECT ENAME, SAL, GRADE FROM EMP JOIN SALGRADE ON (SAL BETWEEN LOSAL AND HISAL)`

## SELF JOIN
모든 사원의 사번, 이름, 관리자의 사번, 관리자의 이름을 출력하자.

`SELECT 사원.EMPNO, 사원.ENAME, 관리자.EMPNO, 관리자.ENAME
FROM EMP 사원, EMP 관리자
WHERE 사원.MGR = 관리자.EMPNO;`

참고링크 :  https://kanetami.tistory.com/51