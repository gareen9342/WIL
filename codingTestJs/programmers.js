/**
 * 
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 
 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 2에서 나온 배열의 3번째 숫자는 5입니다.
 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
  commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */
// function solution(array, commands) {
//   let answer = [];

//   for (let i = 0; i < commands.length; i++) {
//     let splicedArr = [];
//     if (commands[i][0] !== commands[i][1]) {
//       splicedArr = array
//         .slice(commands[i][0] - 1, commands[i][1])
//         .sort((a, b) => a - b);
//       answer.push(splicedArr[commands[i][2] - 1]);
//     } else {
//       splicedArr = [array[commands[i][0] - 1]];
//       answer.push(splicedArr[0]);
//     }
//   }

//   return answer;
// }

// const answer = solution(
//   [1, 5, 2, 6, 3, 7, 4],
//   [
//     [2, 5, 3],
//     [4, 4, 1],
//     [1, 7, 3],
//   ]
// );
// console.log("answer=", answer);

/**
 * 
 수포자는 수학을 포기한 사람의 준말입니다. 
 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */

/*
function solution(answers) {
  const patternA = [1, 2, 3, 4, 5];
  const patternB = [2, 1, 2, 3, 2, 4, 2, 5];
  const patternC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countA = 0,
    countB = 0,
    countC = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === patternA[i % patternA.length]) {
      countA++;
    }
    if (answers[i] === patternB[i % patternB.length]) {
      countB++;
    }
    if (answers[i] === patternC[i % patternC.length]) {
      countC++;
    }
  }
  const resultArr = [countA, countB, countC];
  // [2,2,2] -> max -> max ->[]idx + 1
  let tempArr = [];
  let max = 0;
  for (let i = 0; i < resultArr.length; i++) {
    if (max === resultArr[i]) {
      tempArr.push(i + 1);
    } else if (max < resultArr[i]) {
      max = resultArr[i];
      tempArr = [i + 1];
    }
  }
  // const result = resultArr.reduce((accVal, curVal, idx, src) => {
  //   console.log(accVal, curVal, idx, src);
  //   // console.log(src[idx], src[idx - 1]);

  //   if (idx > 0) {
  //     src[idx]
  //   }
  //   return accVal;
  // }, []);
  // console.log(result);
  return tempArr;
}*/

// solution([1, 3, 2, 4, 2]);

/**
 * 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
 * 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
 *  학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 
 * 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
 * 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
 * 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

 제한사항
 전체 학생의 수는 2명 이상 30명 이하입니다.
 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은  체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
 * 
 * 
 * 
 */

// 전체 학생의 수 n / 체육복을 도난당한 학생들의 번호가 담긴 배열 / 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

// 2 <= n <= 30
// [2,3,6,8,7]
//
// function solution(n, lost, reserve) {
//   let answer = 0;
//   for (let i = 1; i <= n.length; i++) {
//     let count = 0;
//     let idxR = 0;
//     let temp = 0
//     if (i === reserve[idxR]) {
//       temp = reserve[idxR];
//       idxR++;
//     }
//     let idxL = 0;

//     if(i === lost[idxL]){
//       count --;
//       if( Math.abs(temp  - lost[idxL]) == 1){
//         count ++;
//       }
//     };

//   }

//   return answer;
// }

// function solution(n, lost, reserve) {
//   for (let i = lost.length - 1; i > -1; i--) {
//     const prevIdx = reserve.indexOf(lost[i] - 1);
//     const curIdx = reserve.indexOf(lost[i]);
//     const nextIdx = reserve.indexOf(lost[i] + 1);

//     if (curIdx > -1) {
//       reserve.splice(curIdx, 1);
//       continue;
//     }
//     if (nextIdx > -1) {
//       reserve.splice(nextIdx, 1);
//       continue;
//     }
//     if (prevIdx > -1 && !lost.includes(lost[i] - 1)) {
//       reserve.splice(prevIdx, 1);
//       continue;
//     }

//     n--;
//   }
//   return n;
// }
// console.log(solution(5, [2, 4], [1, 3, 5])); //expexted 5
// console.log(solution(5, [2, 4], [3])); // expected 4
// console.log(solution(3, [3], [1])); // expected 2
// console.log(solution(3, [1, 2], [2, 3])); // expected 2
// console.log(solution(5, [2, 3, 4], [3, 4, 5])); // expected 4
// console.log(solution(5, [3, 4, 5], [2, 3, 4])); // expected 4
// console.log(solution(5, [1, 2], [1, 2, 3])); // expected 5
// console.log(solution(5, [], [1, 5])); // expected 2

/**
 *
 * 정수 배열 numbers가 주어집니다.
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수
 * 있는 모든 수를 배열에 오름차순으로 담아
 * return 하도록 solution 함수를 완성해주세요
 */

// function solution(numbers) {
//   var answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       const num = numbers[i] + numbers[j];
//       if (!answer.includes(num)) {
//         answer.push(num);
//       }
//     }
//   }
//   answer.sort((a, b) => a - b);
//   return answer;
// }

// console.log(solution([2, 1, 3, 4, 1]));
// console.log(solution([5, 0, 2, 7]));
/**
 * 
 * 
 * 잘 푼 사람 거 
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
 */

/**
 *
 * 인형뽑기 게임
 *
 */

// function solution(board, moves) {
//   let basket = [];
//   let count = 0;
//   board = board.map((arr) => arr.filter((x) => x !== 0));
//   for (let i = 0; i < moves.length; i++) {
//     if (!!board[moves[i] - 1] && board[moves[i] - 1].length > 0) {
//       const picked = board[moves[i] - 1].pop();
//       if (basket[basket.length - 1] === picked) {
//         basket.pop();
//         count += 2;
//       } else {
//         basket.push(picked);
//       }
//       // console.log(basket);
//     }
//     console.log(moves[i], "basket = ", basket);
//   }
//   return count;
// }

// function solution(board, moves) {
//   let basket = [];
//   let count = 0;
//   for (let i = 0; i < moves.length; i++) {
//     for (let r = 0; r < board.length; r++) {
//       const number = board[r][moves[i] - 1];
//       if (number !== 0) {
//         board[r][moves[i] - 1] = 0;
//         // console.log(number, "basket=", basket);
//         if (basket[basket.length - 1] === number) {
//           basket.pop();
//           count += 2;
//         } else {
//           basket.push(number);
//         }
//         break;
//       }
//     }
//   }
//   return count;
// }

// board.map((row) => {
//   const number = row[moves[i] - 1];
//   if (number !== 0) {
//     row[moves[i] - 1] = 0;
//     // contibue

//     if (basket[basket.length - 1] === number) {
//       basket.pop();
//       count += 2;
//     } else {
//       basket.push(number);
//     }
//   }

// console.log("-----------");
// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// ); //expected 4

// console.log(
//   solution(
//     [
//       [0, 2, 0],
//       [1, 2, 0],
//       [2, 2, 1],
//     ],
//     [1, 2, 2, 2, 1, 3]
//   )
// ); // expected 6

// function solution(participant, completion) {
//   var answer = "";
//   participant.sort();
//   completion.sort();
//   // console.log(participant, completion);
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) {
//       // console.log(participant[i]);
//       // console.log(participant[i], completion[i]);
//       answer = participant[i];
//       break;
//     }

//   }
//   return answer;
// }
// solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
// solution(
//   ["marina", "josipa", "nikola", "vinko", "filipa"],
//   ["josipa", "filipa", "marina", "nikola"]
// );
// console.log(
//   solution(["mislav", "stanko", "mislav", "ana"], ["mislav", "stanko", "ana"])
// );

// function solution(month, day) {
//   let days = 0;

//   //5월이면
//   const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   for (let i = 0; i < month - 1; i++) {
//     days += daysOfMonth[i];
//   }
//   days += day;
//   switch (days % 7) {
//     case 0:
//       return "THU";
//     case 1:
//       return "FRI";
//     case 2:
//       return "SAT";
//     case 3:
//       return "SUN";
//     case 4:
//       return "MON";
//     case 5:
//       return "TUE";
//     case 6:
//       return "WED";
//   }
// }
// console.log(solution(1, 1));
// console.log(solution(5, 5));
// console.log(solution(5, 5));

// function solution(n) {
//   const num = n.toString(3).split("").reverse().join("");

//   return parseInt(num, 3);
// }
// var value = 30;
// console.log([1, 2, 3, 4].reverse());
// solution(45);
// console.log(typeof );

// function solution(s) {
//   s = s.split("");
//   if (s.length % 2 == 0) {
//     s = s[s.length / 2 - 1] + s[s.length / 2];
//   } else {
//     s = s[Math.floor(s.length / 2)];
//   }
//   return s;
// }
// solution("abced");
// console.log(solution("qwer"));
// console.log(solution("abcde"));
// function solution(a, b) {
//   var answer = 0;
//   if (a > b) {
//     let temp = b; // temp = 5
//     b = a; // b= 3
//     a = temp; // a = 5
//   }
//   for (let i = a; i <= b; i++) {
//     answer += i;
//   }
//   return answer;
// }
/**
 * 
 * function adder(a, b){
    var result = 0
    //함수를 완성하세요


    return (a+b)*(Math.abs(b-a)+1)/2;
}

 */
// const arr = [1, 1, 3, 3, 0, 1, 1];
// console.log(solution(3, 5));
// console.log(solution(3, 3));
// console.log(solution(5, 3));
// console.log(new Set(arr));
// function solution(arr) {
//   return arr.filter((x, idx) => x != arr[idx - 1]);
// }

// function solution(arr, divisor) {
//   const answer = arr.filter((x) => x % divisor == 0);
//   return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
// }
// n번째 문자 기준으로 문자열 정렬하기
// function solution(strings, n) {
//   return strings.sort((a, b) => {
//     if (a[n] < b[n]) {
//       return -1;
//     }
//     if (a[n] > b[n]) {
//       return 1;
//     } else {
//       if (a < b) {
//         return -1;
//       }
//       if (a > b) {
//         return 1;
//       }
//       return 0;
//     }
//   });
// }
// console.log(solution(["afs", "asdf", "gfdss"], 0));
// console.log(solution(["abce", "abcd", "cdx"], 2));
// function solution(s) {
//   s = s.split("");
//   let countP = 0;
//   let countY = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "p" || s[i] === "P") {
//       countP++;
//     }
//     if (s[i] === "y" || s[i] === "Y") {
//       countY++;
//     }
//   }
//   return countP === countY ? true : false;
// }

/**
 * 
 * 
 * function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}

*/

// function solution(s) {
//   if (s.length === 4 || s.length === 6) {
//     for (let c of s.split("")) {
//       if (!Number.isInteger(+c)) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// }

// function solution(s) {
//   return s
//     .split("")
//     .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
//     .join("");
// }

// function solution(seoul) {
//   for (let i = 0; i < seoul.length; i++) {
//     if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
//   }
// }
/**
 * 
 * function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}
 */

// function solution(n) {
//   let answer = "";
//   for (let i = 1; i <= n; i++) {
//     answer += i % 2 ? "수" : "박";
//   }
//   return answer;
// }
// console.log(solution(["Jane", "Kim"])); //gfedcbZ
// console.log(solution(3));
// function solution(n) {
//   let arr = new Array(n + 1);
//   let c = 0;
//   for (let i = 2; i <= n; i++) {
//     arr[i] = i;
//   }

//   let Sqrt = Math.floor(Math.sqrt(n));
//   for (let i = 2; i <= Sqrt; i++) {
//     if (arr[i] == 0) {
//       continue;
//     }
//     for (let j = i + i; j <= n; j += i) {
//       arr[j] = 0;
//     }
//   }
//   for (let i = 2; i <= n; i++) {
//     if (arr[i] != 0) {
//       c++;
//     }
//   }
//   return c;
// }
// function solution(s) {
//   return [...(s + "")].reverse().map((x) => x / 1);
// }
// console.log(solution(12345));
// console.log(solution(1234));
/**
 * 
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
 */
// function solution(s, n) {
//   const str = s;
//   return str
//     .split("")
//     .map((s) => {
//       if (s === " ") {
//         return s;
//       }
//       const charcodeWn = s.charCodeAt(0) + n;
//       if (s.toUpperCase() === s) {
//         return charcodeWn > 90
//           ? String.fromCharCode(charcodeWn - 26)
//           : String.fromCharCode(charcodeWn);
//       } else {
//         return charcodeWn > 122
//           ? String.fromCharCode(charcodeWn - 26)
//           : String.fromCharCode(charcodeWn);
//       }
//     })
//     .join("");
// }

// console.log("abcdefghijklmnopqrstuvwxyz".length);
// console.log(String.fromCharCode("A"), String.fromCharCode("a"));

// console.log(solution("ZaF", 2));
//내적
// function solution(a, b) {
//   let answer = 0;
//   a.map((x, idx) => (answer += x * b[idx]));
//   return answer;
// }

// function solution(s) {
//   return s
//     .split(" ")
//     .map((str) => {
//       return str
//         .split("")
//         .map((c, idx) => (idx % 2 ? c.toLowerCase() : c.toUpperCase()))
//         .join("");
//     })
//     .join(" ");
// }
// function solution(n) {
//   const nArr = (n + "").split("");
//   let answer = 0;
//   nArr.map((x) => (answer += +x));
//   return answer;
// }
/**
 * 
 * function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

 */
// function solution(n) {
//   return (n + "")
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//}

// function solution(x) {
//   const xSqrt = Math.sqrt(x);
//   return xSqrt - Math.floor(xSqrt) ? -1 : (xSqrt + 1) * (xSqrt + 1);
// }
// console.log(solution(121));
// function argMax(array) {
//   return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
// }
// function argMax(array) {
//   return array.reduce((r, a) => (a > r ? r : a));
// }
// function solution(arr) {
//   const min = Math.min(...arr);

//   return arr.length === 1 ? [-1] : arr.filter((x) => x !== min);
// }
// console.log(solution([4, 3, 2, 1]));
// console.log(solution([10, 20]));
// console.log(solution([-10]));

//8,3, 2
// function solution(numbers, hand) {
//   hand = hand === "left" ? "L" : "R";
//   let lH, rH;
//   let answer = numbers.map((x, idx) => {
//     if (x % 3 === 1) {
//       lH = x;
//       return "L";
//     }
//     if (x % 3 === 0 && x !== 0) {
//       rH = x;
//       return "R";
//     }
//     lH = lH === undefined ? 10 : lH;
//     rH = rH === undefined ? 12 : rH;
//     const lPos = [
//       Math.floor((lH === 0 ? 10 : lH - 1) / 3),
//       (lH === 0 ? 10 : lH - 1) % 3,
//     ];
//     const rPos = [
//       Math.floor((rH === 0 ? 10 : rH - 1) / 3),
//       (rH === 0 ? 10 : rH - 1) % 3,
//     ];
//     const xPos = [
//       Math.floor((x === 0 ? 10 : x - 1) / 3),
//       (x === 0 ? 10 : x - 1) % 3,
//     ];
//     const lPosFromX = Math.abs(xPos[0] - lPos[0]) + Math.abs(xPos[1] - lPos[1]);
//     const rPosFromX = Math.abs(xPos[0] - rPos[0]) + Math.abs(xPos[1] - rPos[1]);
//     if (lPosFromX > rPosFromX) {
//       rH = x;
//       return "R";
//     } else if (lPosFromX < rPosFromX) {
//       lH = x;
//       return "L";
//     } else {
//       if (hand === "R") {
//         rH = x;
//         return "R";
//       } else {
//         lH = x;
//         return "L";
//       }
//     }
//   });

//   return answer.join("");
// }
// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // expected LRLLLRLLRRL
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); //expected LRLLRRLLLRR
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //expected LLRLLRLLRL

// console.log();
// console.log("lH =", lH, "rH=", rH, x);
//1 1
// console.log(Math.abs(x - lH) > Math.abs(x - rH));
// console.log(
//   Math.abs(x - lH) > Math.abs(x - rH)
//     ? "R"
//     : Math.abs(x - lH) < Math.abs(x - rH)
//     ? "L"
//     : hand
// );
// return Math.abs(x - lH) > Math.abs(x - rH)
//   ? "R"
//   : Math.abs(x - lH) < Math.abs(x - rH)
//   ? "L"
//   : hand;
// function solution(arr) {
//   return (
//     arr.reduce((acc, val) => {
//       return acc + val;
//     }, 0) / arr.length
//   );
// }

// function solution(n, m) {
//   let nYak = new Set();
//   let mYak = new Set();
//   for (let i = 1; i * i <= n; i++) {
//     // console.log(i);
//     if (n % i == 0) {
//       nYak.add(i);
//       nYak.add(n / i);
//     }
//   }
//   for (let i = 1; i * i <= m; i++) {
//     if (m % i == 0) {
//       mYak.add(i);
//       mYak.add(m / i);
//     }
//   }
//   nYak = [...nYak].sort((a, b) => a - b);
//   mYak = [...mYak].sort((a, b) => a - b);
//   const intersection = [...nYak].filter((x) => mYak.includes(x));
//   var answer = [
//     intersection[intersection.length - 1],
//     (n * m) / intersection[intersection.length - 1],
//   ];

//   return answer;
// }

// function solution(phone_number) {
//   return phone_number
//     .split("")
//     .map((s, idx) => (idx >= phone_number.length - 4 ? s : "*"))
//     .join("");
// }
// function solution(arr1, arr2) {
//   return arr1.map((x, idx) => x.map((y, j) => y + arr2[idx][j]));
// }

// function solution(x) {
//   return x % ("" + x).split("").reduce((a, x) => +a + +x) == 0;
// }
/**
 *
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}

 */
// console.log(solution(18));
// console.log(solution(10));
// console.log(solution(12));
// console.log(solution(11));
// console.log(solution(13));
// console.log(solution("027778888"));

// const n = 50;
// let numbers = new Set();
// for (let i = 1; i * i <= n; i++) {
//   // console.log(i);
//   if (n % i == 0) {
//     numbers.add(i);
//     numbers.add(n / i);
//   }
// }
// console.log(
//   numbers,
//   [...numbers].sort((a, b) => a - b)
// );
// console.log(solution(3, 12));
// console.log(solution(20, 12));
// console.log(solution(1000000, 12));
// function solution(d, budget) {
//   let cnt = 0;
//   d.sort((a, b) => a - b);
//   for (let i = 0; i < d.length; i++) {
//     if (budget >= d[i]) {
//       cnt++;
//       budget -= d[i];
//     } else {
//       break;
//     }
//   }
//   return cnt;
// }

// function solution(num) {
//   let count = 0;
//   while (num !== 1) {
//     num = num % 2 === 0 ? num / 2 : num * 3 + 1;
//     // console.log("?", num);
//     count++;
//     // console.log(num, count);
//     if (count === 500 && num !== 1) {
//       return -1;
//     }
//   }
//   return count;
// }

// function solution(x, n) {
//   var answer = [];
//   let temp = 0;
//   while (n > 0) {
//     temp += x;
//     answer.push(temp);
//     n--;
//   }
//   return answer;
// }

// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);

//   let stars = "";

//   for (let i = 0; i < b; i++) {
//     for (let k = 0; k < a; k++) {
//       stars += "*";
//     }
//     stars += "\n";
//   }
//   console.log(stars);
// });
// console.log(solution(2, 5));
// console.log(solution(4, 3));

// function solution(n, arr1, arr2) {
//   for (let i = 0; i < n; i++) {
//     let numSet = [arr1[i], arr2[i]];
//     let tempArrA = new Array(n).fill(0);
//     let tempArrB = new Array(n).fill(0);
//     let idx = n - 1;
//     while (idx >= 0) {
//       const valSet = [numSet[0] % 2, numSet[1] % 2];
//       tempArrA[idx] = valSet[0];
//       tempArrB[idx] = valSet[1];
//       numSet[0] = Math.floor(numSet[0] / 2);
//       numSet[1] = Math.floor(numSet[1] / 2);
//       idx--;
//     }
//     arr1[i] = tempArrA;
//     arr2[i] = tempArrB;
//   }

//   return new Array(n).fill("").map((str, idx) => {
//     for (let i = 0; i < n; i++) {
//       str += arr1[idx][i] || arr2[idx][i] ? "#" : " ";
//     }
//     return str;
//   });
// }
// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// function solution(N, stages) {
//   let stageArr = new Array(N + 1).fill(0);
//   stages.map((x) => stageArr[x - 1]++);
//   let btm = stages.length;
//   let temp = [];
//   for (let i = 0; i < N; i++) {
//     temp.push([stageArr[i] / btm, i + 1]);
//     btm -= stageArr[i];
//   }
//   return temp.sort((a, b) => b[0] - a[0]).map((x) => x[1]);
// }

/**
 *
 * 망함
 *
 *
 */
// function solution(dartResult) {
//   const dartArr = dartResult.split("");

//   let numArr = [];

//   let idx = -1;

//   let curNum = 0;
//   for (let i = 0; i < dartArr.length; i++) {
//     const item = dartArr[i];
//     if (!isNaN(+item)) {
//       console.log(+item);
//       numArr.push(+item);
//       idx++;
//       // continue;
//     } else {
//       switch (item) {
//         case "S":
//           numArr[idx] = Math.pow(numArr[idx], 1);
//           break;
//         case "D":
//           // console.log(idx, curNum);
//           // console.log(idx, curNum);
//           numArr[idx] = Math.pow(numArr[idx], 2);
//           break;
//         case "T":
//           numArr[idx] = Math.pow(numArr[idx], 3);
//           break;
//         case "*":
//           if (idx > 0) {
//             numArr[idx - 1] = numArr[idx - 1] * 2;
//             numArr[idx] = numArr[idx] * 2;
//           } else {
//             numArr[idx] = numArr[idx] * 2;
//           }
//           break;
//         case "#":
//           numArr[idx] = numArr[idx] * -1;
//           break;
//       }
//     }
//   }
//   console.log(numArr);
//   return numArr[0] + numArr[1] + numArr[2];
// }

// function solution(dartResult) {
//   let numArr = ["", "", ""];
//   let idx = 0;
//   let wasStr = false;

//   dartResult.split("").map((x) => {
//     if (isNaN(+x)) {
//       switch (x) {
//         case "S":
//           numArr[idx] = Math.pow(+numArr[idx], 1);
//           break;
//         case "D":
//           numArr[idx] = Math.pow(+numArr[idx], 2);
//           break;
//         case "T":
//           numArr[idx] = Math.pow(+numArr[idx], 3);
//           break;
//         case "*":
//           if (idx > 0) {
//             numArr[idx - 1] = +numArr[idx - 1] * 2;
//             numArr[idx] = +numArr[idx] * 2;
//           } else {
//             numArr[idx] = +numArr[idx] * 2;
//           }
//           break;
//         case "#":
//           numArr[idx] = +numArr[idx] * -1;
//           break;
//       }
//       wasStr = true;
//       // if(!wasStr ){

//       // }
//     } else {
//       if (wasStr) {
//         idx++;
//       }
//       numArr[idx] += x;
//       wasStr = false;
//     }
//   });
//   // console.log(numArr);
//   return numArr[0] + numArr[1] + numArr[2];
// }

// console.log(solution("1S2D*3T")); // 37
// console.log(solution("1D2S#10S"));
// console.log(solution("1D2S0T"));
// console.log(solution("1S*2T*3S"));


function solution(new_id){
  // new_id = new_id.toLowerCase().replace(/[^a-z0-9._-]/g,'');
  new_id = new_id.toLowerCase().split(''); 
  // console.log(new_id)
  // let temp = "" ;
  // const replaceArr = [];
    let answer = '';
    let history = '';
     for (const i of new_id) {
        const charCode = i.charCodeAt();
        if (Number.isInteger(+i) 
        || (charCode >= 97 && charCode <= 122) 
        || i === "-" || i === "_" 
        || (i === '.' && history !== i) ) {
            answer += i;
            history = i;
        }
    }

  // replaceArr.map(x => {new_id = new_id.replace(`${x}`,".")})
  
  new_id = [...answer] ;

  if(new_id[0] === "."){
    new_id = new_id.slice(1);
  }
  if(new_id[new_id.length - 1] === "."){
    new_id = new_id.slice(0, new_id.length-1 );
  }
  if(!new_id.length){
    new_id = ["a"];
  }
  if(new_id.length>=16){
    new_id = new_id.slice(0,15)
  }
  if(new_id[new_id.length - 1] === "."){
    new_id = new_id.slice( 0, new_id.length - 1 );
  }
  if( new_id.length <= 2 ){
    let temp = new_id[new_id.length - 1];
    while(new_id.length!==3){
      new_id.push(temp);
    }
  }
  return new_id.join("")
}


console.log(solution(	"...!@BaT#*..y.abcdefghijklm"))
console.log(solution("z-+.^."))
console.log(solution("=.="))
console.log(solution("123_.def"))
console.log(solution(	"abcdefghijklmn.p"))
console.log(solution(	"~!@#$%^&*()=+[{]}:?,<>/"))
console.log(solution(	".1."))
console.log(solution(	"...............b"))
