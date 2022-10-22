1. 20
2. 20
3. 20
4. Returns a `ReferenceError`; this is because `result` is declared as `let` which makes it block scope. So when we try to reference it from line 13--which is outside of the block of where `result` was declared--it is no longer reachable.
5. This part of the code is not executed. Returns a `TypeError`; this is because `result` is declared as a `const` (line 5) which means that nothing can't be assigned to this variable (but the code tries to on line 7).
6. This part of the code is not executed. Notable thing is that `const` has the same level of scope as `let`. Which means that referencing `result` at line 13 won't work because it is block scope.