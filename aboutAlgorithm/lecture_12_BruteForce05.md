# 브루트 포스 (BruteForce) - 재귀


## 1, 2, 3 더하기

정수 n을 1, 2, 3의 합으로 나타내는 방법의 수를 구함

숫자 count개로 합 sum을 만드는 경우의 수 

불가능한 경우 : 재귀 호출을 계속해도 정답을 절대 찾을 수 없는 경우 

다음 경우

- 1을 사용하는 경우
    - go(count + 1, sum + 1, goal)
- 2를 사용하는 경우
    - go(count + 1, sum + 2, goal)
- 3을 사용하는 경우
    - go(count + 1, sum + 3, goal)

## 암호만들기

**go(n,alpha,password,i)**

n: 만들어야 하는 암호의 길이   
alpha: 사용할 수 있는 알파벳   
password: 현재까지 만든 암호    
i: 사용할지 말지 결정해야 하는 알파벳의 인덱스   

n == password.length()   
불가능한 경우• i >= alpha.size()   
모음, 자음과 관련한 조건은 조합을 다 만든 후에 거른다. 

다음경우

- i번째 알파벳을 사용하는 경우

    go(n, alpha, password+alpha[i], i+1)

- i번째 알파벳을 사용하지 않는 경우

    go(n, alpha, password, i+1)

## 퇴사

- N+1일이 되는 날 퇴사를 하려고 한다 (1≤N≤15)
- 남은 N일 동안 최대한 많은 상담을 하려고 한다.
- 하루에 하나의 상담을 할 수 있고
- i일에 상담을 하면, T[i]일이 걸리고 P[i]원을 번다.

`go(day,sum)`

day일이 되었다. day일에 있는 상담을 할지 말지 결정해야 한다.   
지금까지 얻은 수익은 sum이다.    

정답을 찾은 경우    
day>n   

상담을 한다 go(day+t[day], sum+p[day])   
상담을 하지 않는다: go(day+1, sum)   

## 백트래킹

재귀 함수를 이용해 브루트 포스를 하다 보면, 더 이상 함수 호출이 의미 없는 경우가 있다.  
이 때, 이런 경우를 제외하고 브루트 포스를 진행하면 백트래킹이라고 한다.   

## 스타트와 링크

N명을 N/2명씩 두 팀으로 나누려고 한다. ( 4≤N≤20 , N은 짝수 )   

- 두 팀의 능력치를 구한 다음, 차이의 최소값을 구하는 문제   
- S[i][j] = i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치   
- 팀의 능력치 : 팀에 속한 모든 쌍의 S[i][j]의 합   

_go(index,first,second)_   

index번째 사람을 어떤 팀에 넣을지 결정해야 함    
1번 팀과 2번 팀에 속한 사람이 각각 first, second에 들어 있음   

- 정답을 찾은 경우 
index == n
- 다음 경우   
1번 팀: go(index, first, second)   
2번 팀: go(index, first ,second)
   
- 두 경우 모두 호출전에 first 또는 second에 index를 넣고, 호출 후에 빼는 과정이 필요

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int s[20][20];
int n;
int go(int index, vector<int> &first, vector<int> &second) {
//================ n번째 까지의 사람의 경우의 수를 모두 구했을 때 ================ //
    if (index == n) {
        if (first.size() != n/2) return -1;
        if (second.size() != n/2) return -1;
        int t1 = 0;
        int t2 = 0;
        for (int i=0; i<n/2; i++) {
            for (int j=0; j<n/2; j++) {
                if (i == j) continue;
                t1 += s[first[i]][first[j]];
                t2 += s[second[i]][second[j]];
            }
        }
        int diff = t1-t2;
        if (diff < 0) diff = -diff;
        return diff;
    }

//============== index 번째 사람을 1번 팀에 넣는 경우 =============//
    int ans = -1;
    first.push_back(index); // index번째 사람을 1번째에 넣어주고
    int t1 = go(index+1, first, second); // 재귀함수 호출로 그 다음 번쨰 사람을 넣어준다. 
    if (ans == -1 || (t1 != -1 && ans > t1)) { // 최솟값인 경우에 값을 갱신해준다. 
        ans = t1;
    }
		//값을 구했으면 두 번째에 넣어주어야 하므로 다시 빼줌 
    first.pop_back();

//============== index 번째 사람을 2번 팀에 넣는 경우 =============//
    second.push_back(index);
    int t2 = go(index+1, first, second);
    if (ans == -1 || (t2 != -1 && ans > t2)) {
        ans = t2;
    }
    second.pop_back();
    return ans;
}
int main() {
    cin >> n;
    for (int i=0; i<n; i++) {
        for (int j=0; j<n; j++) {
            cin >> s[i][j];
        }
    }
    vector<int> first, second;
    cout << go(0, first, second) << '\n';
}
```