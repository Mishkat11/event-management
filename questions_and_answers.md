<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>


###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C 

<i>There is a typo in the variable names. I have declared the variable named "greeting" but when I'm consoling I'm adding another variable called "greetign" and as the variable is not declared in the code and I'm consoling it it will return undefined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C 

<i>javascript is a weakly typed language. In the code there are two arguments. One is number type another is string. JavaScript will try to convert the string "2" into a number and then perform the addition. The result of this operation will be the string concatenation of 1 and "2", which is "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A 

<i>Here food is an 'Array' and info is an 'object'. When I'm assigning a new value to the 'info.favoriteFood' am making changes in the object only it won't make any effect on the 'Array(food)'. So the result will be same Array that was in the code before. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B 

<i>Here in the 'sayHi' function it takes parameter called 'name'. But when I'm calling the function I'm not passing any values in the parameter so it will remain 'undefined'. As a result the answer will be `Hi there, undefined` </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C 

<i>After using the forEach method to `nums` the callback function `num` represents the each and every element of the array `nums`. There is an if statement which is checking if the `num` is truthy (not equal to 0) if so,it increments the count by 1.After all the increments `count ` hold the non-zero element.And after consoling the answer will be 3. </i>


</p>
</details>


