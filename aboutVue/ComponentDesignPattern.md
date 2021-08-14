# 컴포넌트 디자인 패턴    

1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신   
2. Slot - 마크업 확장이 가능한 컴포넌트
3. Controlled - 결합력이 높은 컴포넌트
4. Renderless - 데이터 처리 컴포넌트

---

## Common

기본적인 컴포넌트 통신은  props 이용하는 것

## Slot

**하위 컴포넌트의 내용을 재사용 할 수 있게 해줌**

아래와 같이 만들게 되면

```jsx
<!-- BaseButton.vue -->
<template>
  <button type="button" class="btn primary">
  // ========================== 아래의 위치에 버튼의 내용이 들어갈 수 있도록 함 ==================//
    <slot></slot>
  </button>
</template>
//================== 이런 식으로 사용
<base-button>Show Alert</base-button>

```

보니깐 리액트의 children과 비슷한 확장 기능인 듯 하다.

## Controlled Component

상위에 있는 함수를 하위에서 사용한다거나 할 수 있음

이벤트 에밋을 이용하는 것을 뜻하는듯?

```jsx
<template>
  <input
      type="checkbox"
      :value="value"
      @click="toggleCheckBox">
</template>

<script>
export default {
  // 기본적으로 v-model이 받는 값 
  // @input 이벤트 =>이 인풋이 받는 이벤트 값을 가져올 수 있다. 
  // :value 값
  props:["value"],//false
  methods : {
    toggleCheckBox(){
      this.$emit("input", !this.value);
    }
  }
}
</script>
```

상위

```jsx
<CheckBox v-model="checked"/>
```

## Renderless Component

데이터 처리 컴포넌트를 뜻함...

이 컴포넌트 내부를 보면 template이 없다

대신 데이터 통신 후에 받아온 것을 에러처리 하고 render해준다.

```jsx
<!--<template>-->
<!--  <div>-->

<!--    <slot></slot>-->
<!--  </div>-->
<!--</template>-->

**========================== 템플릿이 없음!!!!!!!!**

<script>
import axios from "axios";

export default {
  props: ["url"],
  data() {
    return {
      response: null,
      loading: true
    }
  },
  created() {
    (async () => {
      try {
        const {data} = await axios.get(this.url);
        this.response = data;
        this.loading = false;
      } catch (err) {
        alert("에러메세지");
        console.log(err);
      }
    })();
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading
    });
  }
}
</script>
```

위에서 만든 컴포넌트를 받아오는 단

```jsx
<template>
<div>main
  <FetchData url="https://jsonplaceholder.typicode.com/posts/1">
    <div slot-scope="{response, loading}" >
      <div v-if="!loading">{{response}}</div>
      <div v-if="loading">loading..</div>
    </div>
  </FetchData>
</div>
</template>

<script>
import FetchData from "@/components/FetchData";
export default {
  components:{FetchData}
}
</script>

<style scoped>

</style>
```