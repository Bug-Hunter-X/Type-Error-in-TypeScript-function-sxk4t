# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript when type checking fails due to function argument mismatch.

The `bug.ts` file shows the erroneous code that will produce a type error because the function `add` is defined to take two number arguments but receives a number and a string. 

The `bugSolution.ts` file contains the corrected code, highlighting how to effectively handle type checking in TypeScript functions. This corrected code prevents the type error by ensuring that both arguments are numbers.