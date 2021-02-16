// function solution(progresses, speeds) {
//   const daysArr = progresses.map((x, i) =>
//     (100 - x) % speeds[i]
//       ? Math.floor((100 - x) / speeds[i]) + 1
//       : (100 - x) / speeds[i]
//   );
//   // console.log("days=", daysArr);
//   let answer = [];
//   let cnt = 0;
//   let maxNum;
//   for (let i = 0; i < daysArr.length; i++) {
//     if (i === 0) {
//       maxNum = daysArr[i];
//       // cnt++;
//     }
//     if (maxNum < daysArr[i]) {
//       maxNum = daysArr[i];
//       answer.push(cnt);
//       cnt = 1;
//     } else {
//       cnt++;
//     }
//     if (i === daysArr.length - 1) {
//       answer.push(cnt);
//     }
//   }

//   return answer;
// }
// function solution(n) {
//   let answer = "";

//   let num = 0;

//   while (n !== 0) {
//     num = n % 3;
//     n = Math.floor(n / 3);

//     if (num == 0) {
//       n = n - 1;
//       num = 4;
//     }

//     answer = num + answer;
//   }

//   return answer;
// }
// console.log(solution([93, 30, 55], [1, 30, 5])); //2,1
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //1,3,2
// console.log(solution([5, 5, 5], [21, 25, 20])); //3
// console.log(solution([99, 1, 99, 1], [1, 1, 1, 1])); //3

// console.log(solution(1)); // 14
// console.log(solution(2)); // 14
// console.log(solution(3)); // 14
// console.log(solution(7)); // 21
// console.log(solution(8)); // 22
// console.log(solution(10)); // 41
// console.log(solution(15)); // 114
// console.log(solution(19)); // 114
// console.log(solution(513)); // 124224

// function solution(priorities, location) {
//   const entPri = priorities.map((x, idx) => [idx, x]);
//   let answer = [];
//   while (entPri.length) {
//     let temp = entPri[0];
//     console.log("temp=", temp);
//     let isExistBigger = false;
//     for (let i = 1; i < entPri.length; i++) {
//       if (temp[1] < entPri[i][1]) {
//         entPri.splice(0, 1);
//         entPri.push(temp);
//         isExistBigger = true;
//         break;
//       }
//     }
//     answer.push(temp);
//     console.log(isExistBigger);
//     if (isExistBigger) {
//       entPri.splice(0, 1);
//     }
//     // console.log(entPri.map((x) => x[1]));
//   }
//   return answer;
// }

// function solution(priorities, location) {
//   const pArr = priorities.map((idx, x) => [x, idx]);

//   let count = 0;
//   while (pArr.length > 0) {
//     const temp = pArr[0];
//     const isBiggerExist = pArr.find((x) => x[1] > temp[1]);
//     if (!!isBiggerExist) {
//       pArr.push(temp);
//     } else {
//       count++;
//       if (temp[0] === location) {
//         return count;
//       }
//     }
//     pArr.shift();
//     // console.log(pArr[0]);
//   }
// }

// console.log(solution([1, 1, 9, 1, 1, 1], 0));
// // console.log(solution([1, 1, 1, 1, 1], 0));
// function solution(bridge_length, weight, truck_weights) {
//   let done = [];
//   let passing = [];
//   let idx = 0;
//   let sec = 0;
//   let tempsec = 0;
//   let curWeight = weight;

//   while (truck_weights.length) {
//     if (curWeight - truck_weights[idx] >= 0) {
//       //

//       if (passing.length < bridge_length) {
//         //
//         if (bridge_length > tempsec) {
//           tempsec++;
//           sec++;
//         } else {
//         }
//         passing.push(truck_weights[idx]);

//         idx++;
//         // sec ++
//         curWeight = weight;
//       } else {
//         done.push(passing[0]);
//       }
//       curWeight -= truck_weights[idx];
//     } else {
//     }
//   }
//   var answer = 0;
//   return answer;
// }
// console.log(solution(2, 10, [7, 4, 5, 6]));
/**
 * 
 * 문제 설명
서버 n개가 있는 온라인 RPG 게임을 이용하는 한 유저가 각 서버에 새 캐릭터를 생성하려 합니다. 캐릭터 생성 규칙은 다음과 같습니다.

각 서버에는 1부터 n까지 번호가 하나씩 붙어 있습니다.
서버별로 캐릭터는 최대 5개까지 생성 가능합니다.
캐릭터가 이미 5개인 서버에 새 캐릭터를 생성하면, 해당 서버에서 가장 오래된 캐릭터 하나를 삭제하고 빈자리에 캐릭터가 생성됩니다.
해당 서버에 이미 같은 닉네임이 있는 경우 캐릭터가 생성되지 않습니다.
4-1. 서로 다른 서버에는 닉네임이 같은 캐릭터를 만들 수 있습니다.
단, 다른 유저가 생성한 캐릭터들의 닉네임은 고려하지 않는다고 가정합니다.

서버 개수 n, 유저가 새 캐릭터를 생성한 기록이 담긴 배열 record가 매개변수로 주어집니다. 이때, 각 서버별로 어떤 캐릭터들이 생성됐는지 닉네임을 문자열 배열 형태로 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 9 이하인 자연수입니다.
record는 캐릭터의 생성 기록이 시간 순서대로 담긴 문자열 배열입니다.
record의 길이(=캐릭터 생성 기록 개수)는 1 이상 1,000 이하입니다.
record의 각 원소는 캐릭터 생성 기록을 나타냅니다.
캐릭터 생성 기록은 N nickname 형태입니다.
N은 서버 번호를 나타내며 n(서버 개수) 이하인 한 자리 자연수입니다.
nickname은 해당 서버에 생성한 캐릭터의 닉네임을 나타냅니다.
N과 nickname은 공백(스페이스) 하나로 구분되어 있습니다.
닉네임의 길이는 1 이상 6 이하이며 알파벳 소문자로만 이루어져 있습니다.
return 하는 문자열 배열은 서버별 닉네임을 다음 기준에 따라 정렬해 return 해주세요.
번호가 더 작은 서버에 있는 닉네임이 더 앞에 옵니다.
서버 번호가 같을 경우 해당 서버에서 더 오래된 닉네임이 더 앞에 옵니다.
캐릭터가 하나도 생성되지 않은 서버는 무시해도 됩니다.
 * 
 * 
 * 
 */

// function solution(n, record) {
//   let Arr = new Array(n);
//   for (let i = 0; i < n; i++) {
//     Arr[i] = [];
//   }
//   let countArr = new Array(n).fill(0);

//   record.map((x, idx) => {
//     const tempArr = x.split(" ");
//     const cidx = +tempArr[0] - 1;
//     countArr[cidx] = countArr[cidx] += 1;
//     const isExist = Arr[cidx].find((x) => x[0] === tempArr[1]);

//     if (!isExist) {
//       if (Arr[cidx].length >= 5) {
//         Arr[cidx].shift();
//       }
//       Arr[cidx].push([tempArr[1], idx]);
//     }
//   });
//   //   console.log(Arr);
//   let arr = [];
//   for (let i = 0; i < Arr.length; i++) {
//     for (let j = 0; j < Arr[i].length; j++) {
//       arr.push([i, ...Arr[i][j]]);
//     }
//   }
//   return arr
//     .sort((a, b) => {
//       if (a[0] < b[0]) {
//         return -1;
//       } else if (a[0] > b[0]) {
//         return 1;
//       } else {
//         if (a[2] < b[2]) {
//           return -1;
//         } else if (a[2] > b[2]) {
//           return 1;
//         } else {
//           return 0;
//         }
//       }
//     })
//     .map((x) => x[1]);
// }
// console.log(
//   solution(1, [
//     "1 fracta",
//     "1 sina",
//     "1 hana",
//     "1 robel",
//     "1 abc",
//     "1 sina",
//     "1 lynn",
//   ])
// );
// console.log(
//   solution(4, [
//     "1 a",
//     "1 b",
//     "1 abc",
//     "3 b",
//     "3 a",
//     "1 abcd",
//     "1 abc",
//     "1 aaa",
//     "1 a",
//     "1 z",
//     "1 q",
//     "3 k",
//     "3 q",
//     "3 z",
//     "3 m",
//     "3 b",
//   ])
// );
// function solution(m, v) {
//   const stack = [];
//   v.map((x, idx) => {
//     let isExist = false;
//     for (let i = 0; i < stack.length; i++) {
//       if (stack[i][x - 1] === 1 || stack.length < 1) {
//         // console.log(stack[i][x - 1]);
//         isExist = true;
//         const temp = new Array(v).fill(1);
//         stack.push(temp);
//         console.log(stack);
//         break;
//       }
//     }

//     if (!isExist) {
//       for (let i = 0; i < stack.length; i++) {
//         if (m - stack[i].length >= v) {
//           stack[i].push(1);
//           break;
//         }
//       }
//     }
//   });

//   return stack.length;
// }

// console.log(solution(4, [2, 3, 1]));
// 1 -
// function solution(n, record) {
//   const answer = Array(n)
//     .fill()
//     .map((_) => Array());

//   console.log(answer);
//   const rLength = record.length;

//   for (let i = 0; i < rLength; i++) {
//     const splitTemp = record[i].split(" ");
//     const indexTemp = splitTemp[0] - 1;

//     if (answer[indexTemp].indexOf(splitTemp[1]) === -1)
//       answer[indexTemp].push(splitTemp[1]);
//     if (answer[indexTemp].length === 6) answer[indexTemp].shift();
//   }

//   return answer.reduce((r, c, i) => [...r, ...c], []);
// }

// console.log(
//   solution(1, [
//     "1 fracta",
//     "1 sina",
//     "1 hana",
//     "1 robel",
//     "1 abc",
//     "1 sina",
//     "1 lynn",
//   ])
// );

// 2 -
// function solution(m, v) {
//   const field = [m];

//   for (let i = 0; i < v.length; i++) {
//     let fieldIndex = field.length - 1;

//     console.log(field);
//     for (fieldIndex; fieldIndex > 0; fieldIndex--) {
//       if (v[i] > field[fieldIndex]) break;
//     }

//     if (field[fieldIndex] >= v[i]) {
//       field[fieldIndex] -= v[i];
//     } else {
//       if (field[fieldIndex + 1]) field[fieldIndex + 1] -= v[i];
//       else field.push(m - v[i]);
//     }
//   }

// //   return field.length;
// // }

// // console.log(solution(3, [3, 1, 3, 2]));

// function solution(bridge_length, weight, truck_weights) {
//   let weightLeft = weight;
//   let passing = [];
//   let sec = 0;
//   while (truck_weights.length) {
//     if (weightLeft >= truck_weights[0]) {
//       weightLeft -= truck_weights[0];
//       passing.push(truck_weights[0]);
//       truck_weights.shift();
//       sec++;
//       if (passing.length > bridge_length) {
//         passing.shift();
//       }
//     } else {
//       sec += bridge_length - passing.length;
//       weightLeft += passing[0];
//       passing.shift();
//     }
//   }
//   return sec;
// }
// console.log(solution(2, 10, [7, 4, 5, 6]));
// console.log(solution(100, 100, [10]));
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));

// function solution(skill, skill_trees) {
//   var answer = 0;
//   const skillArr = skill.split(""); //B,C,D
//   let tempRegex = "";

//   let tempArr = [];
//   let word = "";
//   for (let i = 0; i < skillArr.length; i++) {
//     word += skillArr[i];
//     tempRegex += `^|${skillArr[i]}`;
//     tempArr.push(word);
//   }

//   const regex = new RegExp(`[${tempRegex}]`, "gi");

//   // console.log(tempArr);
//   for (let i = 0; i < skill_trees.length; i++) {
//     const skillItem = skill_trees[i].replace(regex, "");

//     if (skillItem) {
//       for (let item of tempArr) {
//         if (skillItem === item) {
//           answer++;
//           break;
//         }
//       }
//     } else {
//       answer++;
//     }
//   }
//   return answer;
// }

// console.log(solution("CBD", ["BACDEBB", "CBADF", "AECB", "BDA"]));
// console.log(solution("CBD", ["CAD"])); // 0
// console.log(solution("CBD", ["AEF", "ZJW"])); // 2
// function solution(s) {
// console.log();
// temp.toString();
// console.log(Number.toString(temp, 2));
// console.log(s.match(/[0]/gi));
// while (s === "1") {
//   const temp = s.replace(/[^1]/gi, "").length;
//   console.log(temp.toString(2));
//   s = "1";
// }
// var answer = [];
// return answer;
// }
// function solution(s) {
//   var answer = [0, 0];

//   while (s !== "1") {
//     const temp = s.split("").sort((a, b) => b - a);
//     const xIdx = temp.indexOf("0");

//     answer[1] += xIdx !== -1 ? s.length - xIdx : 0;
//     answer[0]++;
//     if (xIdx !== -1) {
//       s = temp.splice(0, xIdx).length.toString(2);
//     } else {
//       s = s.length.toString(2);
//     }
//   }

//   return answer;
// }

// console.log(solution("110010101001"));
// console.log(solution("110010101001"));
// console.log(solution("1111111"));

// function solution(w, h) {
//   function gcd(min, max) {
//     return min % max === 0 ? max : gcd(max, min % max);
//   }

//   const min = w > h ? h : w;
//   const max = w > h ? w : h;

//   return w * h - (w + h - gcd(min, max));
// }

// console.log(solution(2, 3));
// console.log(solution(8, 12));

// console.log("temp", temp);
// if (x.startsWith(character)) {
//   temp.push(x);
//   // console.log("startsWith", character, "x=", x, i);
// }
// let setTemp = new Set(charArr);
// charArr = [...setTemp];
//   console.log("numbers = ", numbers);
//   console.log(charArr);

//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i].startsWith(temp[0]);
//   }
// }

// function solution(s) {
//     const length = s.length; // 3
//     let answer = length; // 3

//     for (let i = 1; i <= length / 2; i++) {
//         const dupli = [];
//         let dupliLength = 0;

//         for (let j = 0; j < length; j += i) {
//             const str = s.slice(j, j + i)
//             if (dupli[dupli.length - 1] && dupli[dupli.length - 1][0] === str) {
//                 dupli[dupli.length - 1][1]++;
//             } else {
//                 dupli.push([str, 1]);
//             }
//         }

//         for (const j of dupli) {
//             dupliLength += j[1] > 1 ? j[0].length + (j[1] + '').length : j[0].length;
//         }
//         // console.log(dupliLength);

//         answer = dupliLength < answer ? dupliLength : answer;
//     }

//     return answer;
// }
// const regex = new RegExp(`^[1-9].*(0$)|^[1-9].*(00$)`);

// function solution(numbers) {
//   function sorting() {
//     for (let i = 0; i < numbers.length - 1; i++) {
//       if (
//         +(numbers[i] + "" + numbers[i + 1] + "") <
//         +(numbers[i + 1] + "" + numbers[i] + "")
//       ) {
//         let temp = numbers[i];
//         numbers[i] = numbers[i + 1];
//         numbers[i + 1] = temp;
//         sorting();
//       }
//     }
//   }
//   sorting();
//   return (
//     +numbers.reduce((x, y) => {
//       return x + y;
//     }, "") + ""
//   );
//   // return +numbers.join("") + "";
// }

// function solution(numbers) {
//   const answer = numbers
//     .map((i) => i + "")
//     .sort((a, b) => b + a - (a + b))
//     .join("");

//   return answer[0] === "0" ? "0" : answer;
// }
// console.log(solution([0, 0, 0, 0]));
// console.log(solution([21, 212]));
// console.log(solution([0, 5, 10, 15, 20]));
// console.log(solution([1000, 1, 0, 5, 99, 100]));
// console.log(solution([3, 30, 34, 5, 9]));

// numbers.map((x, i) => {
//     if (/^[^0]*/g.test(x) && x[x.length - 1] === "0") {
//       // console.log(x.match(/^[^0]*/g), "x", x);
//       if (character !== x.match(/^[^0]*/g)[0]) {
//         if (x.match(/^[^0]*/g)[0] !== "") {
//           character = x.match(/^[^0]*/g)[0];
//           charArr.push(x.match(/^[^0]*/g)[0]);
//         }
//       }
//       temp.push(x);
//     }
//   });

/**
 *
 *
 *
 */




// function solution (arr){
//     let baesu ; 
//     if(arr.length ===1  ){
//       return  arr[0]
//     }
//     for(let i =0; i < arr.length - 1; i ++){
//     //  const yaksu = gcd(i === 0  ?Math.min(arr[i], arr[i+1]) : baesu, Math.max(arr[i], arr[i+1]))
//      baesu = lcm(( i === 0  ?  arr[i] :  baesu) , arr [ i + 1])
//     }

//     function gcd(minNum, maxNum){
//       return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
//     }
//     function lcm (m,n){
//       return m * n / gcd (m,n)
//     }
//     return baesu
// }

// console.log(solution([2,4,6,8,14]))
// console.log(solution([14,2,4,6,8]))
// console.log(solution([1,2,3]))
// console.log(solution([2,7]))
// console.log(solution([3,4,9,16] ))//144
// console.log(solution([2, 3, 4] ))//12
// console.log(solution([14, 2, 7]  ))//
// console.log(solution([14
// ]  ))//

// function solution(s){
//   // var answer = true;
//   let sum = 0;
//   // s=s.split('')
//   for(let i = 0; i< s.length; i++){
//     if(s[i] === '('){
//       sum += 1
//     }else{
//       sum -= 1
//     }
//     if(sum < 0) {
//       return false
//     }
//   }
//   return sum == 0
// }

// console.log(solution("()()"))
// console.log(solution("(())()"))
// console.log(solution(")()("))
// console.log(solution("(()("))



function solution(clothes) {
  // var answer = 0;

  let temp ={}
  clothes.map( x => {
    if(!!temp[x[1]]){
      temp[x[1]].push(x[0]) 
    }else{
      temp[x[1]] = [x[0]]
    }
    
  })

  let numTemp =0;
  for(let key in temp){
    if(numTemp === 0){
      numTemp += temp[key].length;
    }else{
      numTemp += temp[key].length + (numTemp * temp[key].length)
      // answer+=numTemp
    }
    // answer+=temp[key].length
    // console.log(numTemp)
  }

  return numTemp;
}

/**
 * 
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}
 * 
 * 
 * 
 */
// console.log("solution=",solution(
//   [['yellow_hat', 'headgear'],
//     ['blue_sunglasses', 'eyewear'],['dsdblue_sunglasses', 'eyewear'],['blue_sunglaasses', 'eyewear'], 
//   ['red_pants', 'bottom'],['green_turban', 'headgear'],
//   ['red_pants', 'bottom'],
//   ['asdf', 'hand'],['asdf', 'hand'],['asdf', 'hand']
//   ]
// ))

// console.log("solution=",solution(
//   [['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']]
// ))


// function solution (number, k){
  
// }


// console.log(solution("1924", 2))



function solution(k,n){
  const firstRow = new Array(n).fill(0).map((x,idx)=>idx + 1)
  // console.log(firstRow)
  const basket = [firstRow]
  // console.log(basket)
  for(let i = 0 ;i<k; i++){
    let row = []
    for(let j = 1; j<=n; j++){
      // row.push(j)
      row.push(basket[i].slice(0,j).reduce((x,y) => x+y))
      
      // console.log('i=',i,'j=', j, basket[i].slice(0,j).reduce((x,y) => x+y))
      // .reduce((x,y)=>x+y)
    }
    basket.push(row)
  }

  return basket[k][n - 1]
}




// function solution(s){
//   const arr= s.split(' ')
//   return `${Math.min(...arr)} ${Math.max(...arr)}`
// }
// function factorial( num){
//   if(num == 1)
//       return 1;
//   else{
//       return num * factorial(num - 1);
//   }
// }

// function fibonacci(num){
//   if(num > 0){
//     return num === 1 ?  1 : fibonacci(num - 1) + fibonacci(num - 2)
//   }else{
//     return 0
//   }
// }



// function fibonacci(num){
//   let x = 1;
//   let y = 1;
//   let sum = 0;

//   for(let i = 0; i < num; i++){
//     if (i <= 1) {
//       sum = 1;
//     } else {  
//       sum =( x + y) % 1234567;
//       x = y;
//       y = sum;
//     }
//   }
//   return sum;
// }

// console.log(fibonacci(5))
// console.log(solution("1 2 3 4"))
// console.log(solution("-1 -2 -3 -4"))


// function solution(number, k){
//   number = number.split("");
  
//   getBigger();

//   if(k>0){
//     return number.slice(0,number.length-k).join('')
//   }
//   return number.join("")
//   function getBigger(){
//     let temp = [number[0],0];
//     for (let i = 0; i< number.length; i++){
//       if( temp[0] < number[i] ){
//         if(k>0){
//           number.splice(temp[1],1)
//           k--
//           getBigger();
//         }
//       }else if( temp[0] > number[i]){
//         temp = [number[i], i];

//       }
//     }
//   }
// }


// function solution(number, k){
//   number = number.split("");
//   let temp = "";
//   let res = ""
//   for ( let i = 0; i < number.length - 1 ; i++ ){
//     const curVal = number[i];
//     const nextVal = number[i + 1];

//     temp = curVal < nextVal ? nextVal : curVal;

    
    
//   }
//   // if(k>0){
//   //   return number.slice(0,number.length-k).join('')
//   // }
  
  
// }
// console.log(solution("1924", 2))
// console.log(solution("1231234", 3))
// console.log(solution("", 4))


// function solution(A,B){
  
//   A = A.sort((a,b) => a-b);
//   B = B.sort((a,b) => b-a);

//   let result = 0;
//   A.map((x,idx) => {
//     result += x * B[idx]
//   });

//   return result;

// }
// C[i][j] = A[i][1]B[1][j] + A[i][2]B[2][j] + ... + A[i][n]*B[n][j]
function solution(arr1, arr2) {
  


  const answer = new Array(arr1.length).fill().map(x=>new Array(arr2[0].length))

  for( let i = 0; i < answer.length ; i++ ){
    for(let j = 0; j < answer[i].length; j++ ){
      let temp = 0;
      for(let n = 0; n < arr1[i].length; n++){
        temp += arr1[i][n] * arr2[n][j];
      }
      answer[i][j] = temp;
      // console.log(temp, i,j)
    }
  }

  return answer;
}

console.log(solution(
  [[1,2,3],[4,5,6]]
  ,
  [[1,4],[2,5],[3,6]]
  ))

console.log(solution(
  [[1,4],[3,2], [4,1]]
  ,
  [[3,3], [3,3]]
  ))
// console.log(solution([1,4,2],[5,4,4]))