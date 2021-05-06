# Jquery

쓸 일이 잘 없어서 한 번 정리해두고 필요할 떄 참고하는 용.

## 기본적인 실행

기본 작성 : css selector 표현식

```jsx
/*
 * jquery기본 작성법  :  css selector 표현식 (css표현 + js 표현 )
 	. 기능 구현 2가지!
 	1)
 	$(function(){
 		
 		
 		
 	})
 	
 	2)
 	\
 	$(document).ready(function(){
 		//작성   
 		
 	})
 
 */
```

**주의점! document.ready이후로 선택한 돔태그는 그 당시에 있는 태그를 선택하는 것이고 이후로는 리스너가 들어가지 않는다** 

```jsx
$(document).ready(function(){ // 모든 게 로딩된 이후에.
 		$("img").click(function(){ // 이미지 태그를 가져오는 것이다. 
 			alert("이미지를 클릭했습니다.");
 			$(this).hide();
 		})
 	})
```

# selector들

```jsx
//태그로 선텍
function sel01(){
		$("span").css("color","red");
		$("#view").text('$("span").css("color", "red");')
	}
	//id로 선택
	function sel02(){
		//jQuery라는 게 $ 표시와 뜻이 같다. 
		jQuery("#view").text('jQuery("#t1").css("color","hotpink")');
	}
	//
	function sel03(){
		
		$(".t2").css('backgroundColor', "blue");
	}
	
	function sel04(){
		
		$("li span").css('color', "violet");
		$("#view").text('$("li span").css("color, violet")');
	}

//parent > child선택 
	function sel05(){
		$("li>span").css('color', "violet");
		$("#view").text('$("li span").css("color, violet")');
	}
	
	//nth-child 선택자 
	function sel06(){	
		$("li:nth-child(6)").css('backgroundColor', "orange");
		//홀수번째꺼 찾아줌 
		$("li:nth-child(odd)").css('backgroundColor', "red");
	}
	//first-child
	function sel07(){	
		$("li:first-child").css('backgroundColor', "aquamarine");
		//홀수번째꺼 찾아줌 
		$("#view").text('$("li:first-child").css("backgroundColor", "aquamarine");');
	}
	
	//odd
	function sel08(){	
		$("li:last-child").css("backgroundColor", "black").css("color", "white");
		//홀수번째꺼 찾아줌 
		$("#view").text('$("li:last-child").css("backgroundColor", "black").css("color", "white");');
	}
	//clear
	function cls(){
		$("li, span").css({"backgroundColor":"", "color":"#000" })
		$("#view").text("")
	}
```

## getter 메서드와 setter메서드

선택자에 의해 선택된 요소의 값을 읽거나 설정하기 위해서는 jQuery메서드를 통해 해당 요소에 접근할 수 있다.

getter메서드는 선택된 요소에 접근하여 그 값을 읽어오기 위한 메서드이다. 

getter 메서드는 아무런 인수를 전달하지 않고 호출한다. 

setter 메서드는 선택된 요소에 접근하여 그 값을 설정하기 위한 메서드이다. 

setter 메소드는 대입하고자 하는 값을 인수로 전달하여 호출한다.

```jsx
html: 해당 요소의 HTML콘텐츠를 반환하거나 설정한다. 
text : 해당 요소의 텍스트 콘텐츠를 반환하거나 설정한다. 
width : 선택한 요소 중에서 첫 번째 요소의 너비
height : 선택한 요소 중에서 첫 번째 요소의 높이
attr : 해당 요소의 명시된 속성의 속성값을 반환하거나 설정한다. 
position : 선택한 요소 중에서 첫 번째 요소에 대해 특정 위치에 존재하는 객체를 반환
val : form요소의 값을 반환하거나 설정한다
```

# 요소의 탐색

## Filtering 메서드

```jsx
first() : 선택한 요소 중에서 첫 번째 요소를 선택함.
last() : 선택한 요소 중에서 마지막 요소를 선택함.
eq() : 선택한 요소 중에서 전달받은 인덱스에 해당하는 요소를 선택함.
filter() : 선택한 요소 중에서 전달받은 선택자에 해당하거나, 함수 호출의 결과가 참인 요소를 모두 선택함. 
not() : 선택한 요소 중에서 전달받은 선택자에 해당하거나, 함수 호출의 결과가 참(true) 인 요소를 모두 선택함.
has() : 선택한 요소 중에서 전달받은 선택자에 해당하는 요소를 자손 요소루 가지고 있는 요소를 모두 선택함.
is() :  선택한 요소 중에서 전달받은 선택자에 해당하는 요소가 하나라도 존재하면 참을 반환함.
map() : 선택한 요소의 집합의 각 요소마다 콜백 함수를 실행하고, 그 반환값으로 구성된 jQuery객체를 반환함.
slice() : 선택한 요소 중에서 전달받은 인덱스 범위에 해당하는 요소만을 선택함. 
```

# 요소의 조작

## 요소추가

```jsx
append : 선택된 요소의 마지막에 새로운 요소나 콘텐츠를 추가한다.
prepend :  선택된 요소의 첫번째에 새로운 요소나 콘텐츠를 추가한다.
before : 선택한 요소의 바로 앞쪽에 새로운 요소나 콘텐츠를 추가한다. 
after : 선택한 요소의 바로 뒤쪽에 새로운 요소나 콘텐츠를 추가한다. 
```

## 내부 조작

```jsx
html : 선택한 요소의 내용을 새로운 HTML 요소로 변경
text : 선택한 요소의 내용을 새로운 단순 text로 변경한다.
```

## 요소 복사

```jsx
clone :선택한 요소를 복사하여 새로운 HTML 요소를 생성
```

## 요소의 대체

```jsx
replaceAll()	선택한 요소를 지정된 요소로 대체한다.
.replaceWith()	선택한 모든 요소를 지정된 요소로 대체한다.
```

## 요소의 삭제

```jsx
.remove()	선택한 요소를 DOM 트리에서 삭제한다. 삭제된 요소와 연관된 jQuery 데이터나 이벤트도 같이 삭제된다
.detach()	선택한 요소를 DOM 트리에서 삭제한다. (삭제된 요소와 연관된 jQuery 데이터나 이벤트는 유지된다.
.empty()	선택한 요소의 자식 요소를 모두 삭제한다.
.unwrap()	선택한 요소의 부모 요소를 삭제한다.
```

# 요소의 탐색

## 상위 요소의 탐색

```jsx
.parent()	선택한 요소의 부모(parent) 요소를 선택한다.
.parents()	선택한 요소의 상위(ancestor) 요소를 모두 선택한다.
.parentsUntil()	선택한 요소의 상위 요소 중에서 지정한 선택자에 해당하는 요소 바로 이전까지의 요소를 모두 선택한다.
.closest()	선택한 요소를 포함한 상위 요소 중에서 지정한 선택자에 해당하는 요소 중 가장 첫 번째 요소를 선택한다.
```

## 하위 요소의 탐색

```jsx
.children()	선택한 요소의 자식(child) 요소를 모두 선택한다.
.find()	선택한 요소의 자손(descendant) 요소 중에서 전달받은 선택자에 해당하는 요소를 모두 선택한다.
```

## 형제 요소의 탐색

```jsx
.siblings()	선택한 요소의 형제(sibling) 요소 중에서 지정한 선택자에 해당하는 요소를 모두 선택한다.
.next()	선택한 요소의 바로 다음에 위치한 형제 요소를 선택한다.
.nextAll()	선택한 요소의 다음에 위치한 형제 요소를 모두 선택한다.
.nextUntil()	선택한 요소의 형제 요소 중에서 지정한 선택자에 해당하는 요소 바로 이전까지의 요소를 모두 선택한다.
.prev()	선택한 요소의 바로 이전에 위치한 형제 요소를 선택한다.
.prevAll()	선택한 요소의 이전에 위치한 형제 요소를 모두 선택한다.
.prevUntil()	선택한 요소의 형제 요소 중에서 지정한 선택자에 해당하는 요소 바로 다음까지의 요소를 모두 선택한다.
```

## 기타 탐색 메소드

```jsx
.add()	선택한 요소에 다른 요소를 추가 선택한다.
.addBack()	선택한 요소의 집합에 바로 전에 선택했던 요소를 추가한다.
.each()	선택한 요소들을 각 요소마다 전달받은 콜백 함수를 반복 실행한다.
.end()	마지막으로 실행한 메소드의 실행 전 상태로 선택한 요소의 집합을 복원한다.
.offsetParent()	DOM 트리에 존재하는 부모요소들 중 위치(positioned)요소를 기준으로 가장 가까운 요소를 찾아서 요소를 선택한다.
.contents()	선택한 요소의 자식(child) 요소를 모두 선택한다. (텍스트 노드와 주석 노드까지 모두 포함함)
```

**find() 함수와 children() 함수의 차이점**

- find() 함수는 선택된 태그(객체)의 모든 자식태그들을 검색해서 찾는 것
- children() 함수는 선택된 태그(객체)의 바로 1단계 아래 자식을 찾는것

## effect

```jsx
hide() show() toggle()
// 요소의 표시와 숨김
fadeIn() fadeOut() fadeToggle()
// 페이드 효과
slideUp() slideDown() slideToggle()
// slide
animate()
// 애니메이션 효과
delay() stop() finish()
// 효과 제어

```

 

# 이벤트 처리

## 이벤트 핸들러

### 이벤트 핸들러 여러 개 달기

```
$("p").on({
    mouseenter: function() {
        $(this).css("background-color", "yellow");
    },
    mouseleave: function() {
        $(this).css("background-color", "blue");
    },
    click: function() {
        $(this).css("background-color", "red");
    }
});
```