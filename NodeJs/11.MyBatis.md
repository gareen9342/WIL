# Node 에 My Batis 넣기

## parameters

집어넣는 형태는 json의 형식을 가진다.

기본형태

`#{..} ${..}`

## if

```
    <select id="testIf">
        SELECT
        name,
        category,
        price
        FROM
        fruits
        WHERE
        1=1
        <if test="category != null and category !=''">
            AND category = #{category}
        </if>
        <if test="price != null and price !=''">
            AND price = ${price}
            <if test="price >= 400">
                AND name = 'Fuji'
            </if>
        </if>
    </select>
```

## trim

```jsx
   <select id="testTrim">
       SELECT
       name,
       category,
       price
       FROM
       fruits
       <trim prefix="WHERE" prefixOverrides="AND|OR">
           OR category = 'apple'
           OR price = 200
       </trim>
   </select>
```

## where

```jsx
<select id="testWhere">
    SELECT
    name,
    category,
    price
    FROM
    fruits
    <where>
        이쪽 부분이 변환시에 AND가 없어짐
        맨 처음 AND 없애주고 알아서 중첩해주느듯
        AND category = 'apple'
        <if test="price != null and price !=''">
            AND price = ${price}
        </if>
        AND
    </where>
</select>
```

위의 것이 변환되면 아래와 같은 식으로 바뀐다.

 ```xml
<select>
    SELECT
    name,
    category,
    price
    FROM
    fruits
    WHERE
    category = 'apple'
    AND price = 500
</select>
 ```

## set

```jsx
<update id="testSet">
    UPDATE
    fruits
    <set>
        <if test="category != null and category !=''">
            category = #{category},
        </if>
        <if test="price != null and price !=''">
            price = ${price},
        </if>
    </set>
    WHERE
    name = #{name}
</update>
```

## choose, when otherwise
```xml
<where>
      <choose>
        <when test="name != null">
          AND name = #{name}
        </when>
        <when test="category == 'banana'">
          AND category = #{category}
          <if test="price != null and price !=''">
            AND price = ${price}          
          </if>
        </when>
        <otherwise>
          AND category = 'apple'
        </otherwise>
      </choose>
    </where>
```
## <bind>

특정값을 변수에 할당해서 사용할 수 있다.

```jsx
<bind name="likeName" value="'%' + name + '%'"/>
```

## <include>

근데 이 sql이란 태그는 include시에만 사용이 되는건지?

특정 쿼리 문자열을 여기에 저장을 시켜놓고 사용하면 되는 듯

```jsx
<sql id="sometable">
    fruits
  </sql>
  
  <sql id="somewhere">
    WHERE
      category = #{category}
  </sql>
  
  <sql id="someinclude">
    FROM
      <include refid="${include_target}"/>
    <include refid="somewhere"/>
  </sql>
  
  <select id="testInclude">
    SELECT
      name,
      category,
      price
    <include refid="someinclude">
      <property name="prefix" value="Some"/>
      <property name="include_target" value="sometable"/>
    </include>
  </select>
```