1. Prints `3` because `i` is declared as `var` in a for loop which means that it ignores the block and becomes a function scope variable. Therefore, line 12 simply prints the value of `i` after the execution of the loop, which will be `3`.
2. Prints `150` because on the last iteration of the loop (when `i=2`), `discountedPrice`--declared in function scope--is set to `300 * 0.5`. Due to the scope of the variable, it is still accessible outside of the for loop, hence displaying `150` on the console.
3. Prints `150`. For very similar reason as (2), `finalPrice` is a function-level variable and on the last iteration of the loop, it is set to `150`. 
4. The function returns an array `[50, 100, 150]`. The function subtracts the discounted amount from the ith price, rounds it to 2nd decimal place, and pushes it to the `discounted` array.
5. `ReferenceError`. The `let` keyword sets `i` to be in the scope of the loop. Therefore, when line 12 tries to referemce `i`, it returns an error.
6. `ReferenceError`. Same argument as (5). The `let` keyword makes it visible in the block (the for loop), therefore line 12 cannot reference `discountedPrice`.
7. Displays `150`. `finalPrice` is declared as function-scope variable. Therefore it is visible on both in the function and within the loop. On the last iteration of the loop, `finalPrice` is assigned `150`, and it is accessed outside of the loop.
8. `[50, 100, 150]`. The code executes as described in (4).
9. `ReferenceError`. `i` is only visible in the loop because of the `let` keyword. Therefore, it causes an error on line 11.
10. `3`. `length` is visible within the function, therefore it prints the length of the `prices` which is initialized in the beginning of the function.
11. `[50, 100, 150]`. The code executes as described in (4). However, on this code, it does not do the rounding part. 

## Data Types
12. a) `student.name` b) `student['Grad Year']` c) `student.greeting()` d) `student['Favorite Teacher'].name` e) `student.courseLoad[0]`

## Basic Operators & Type Conversion
13. Arithmetic
    <ol type="A"> 
    <li> '3' + 2 = '32' because 2 is converted to it's string representation. </li>
    <li> '3' - 2 = 1 because '3' is convereted to Number and 2 is subtracted from it. </li>
    <li> 3 + null = 3 because null is converted to Number 0. </li>
    <li> ‘3’ + null = '3null' because null is converted to String 'null' </li>
    <li> true + 3 = 4 because true is converted to Number 1. </li>
    <li> false + null = 0 because both false and null are convereted to Number 0. </li>
    <li> '3' + undefined = '3undefined' because undefined in converted to String 'undefined'. </li>
    <li> '3' - undefined = NaN because '3' is converted to Number 3 and undefined is converted to Number NaN.
    </ol>

14. Comparison
    <ol>
    <li> '2' > 1 is true because '2' is converted to Number 2. </li>
    <li> '2' < '12' is false because two strings are lexigraphically compared, meaning the String '2' is lexigraphically greater than '12' since the first characters of the strings result in '2' > '1' </li>
    <li> 2 == '2' is true because the '2' is converted to Number 2. </li>
    <li> 2 === '2' is false because 2 and '2' are different types. </li>
    <li> true == 2 is false because true is converted to Number 1, which is not equal to Number 2. </li>
    <li> true === Boolean(2) is true because Boolean(2) is true. Only "empty" values are evaluated as false through the Boolean function(). </li>

    
   </ol>

15. `===` checks equality without doing any type conversion. So if the types differ, then it returns `false`.

## Loops
16. [part2-question16.js](part2-question16.js)

## Functions
17. Returns `[2,4,6]`. `modifyArray` is passed in an array and a `callback` function. And each ith entry is passed into `callback` and that ith entry is assigned the return value of `callback`. `doSomething` doubles the number that is passed in; therefore, the return value of `modifyArray([1,2,3], doSomething)` is `[2,4,6]`.

## `setInterval()`, `setTimeout()`, `clearTimeout()`
18. [part2-question18.js](part2-question18.js)
19. Expected output:
    ``` 
    1
    4
    3
    2
    ```
    This is because first, all the `console.log`s that isn't sent to the asynchronous stack are executed. Hence, the code prints 1 and 4 first. Then 3, with timer of 0 miliseconds, is executed. Finally, 2 with delay of 1000 miliseconds is excuted last.