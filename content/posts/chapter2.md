---
author: "João Antonio"
title: "Chapter 2 Exercises"
date: "2025-05-28"
description: "Solution to exercises proposed in Chapter 2"
---

# Chapter 2

**1**. Create and run Kernighan and Ritchie’s famous “hello, world” program:

```c
#include <stdio.h>
int main(void)
{
	printf("hello, world\n");
}
```
Do you get a warning message from the compiler? If so, what’s needed to make it go away?

----
**Solution**: 

To reproduce this exercise you need create a new file and name it with `.c` extension. In the same directory the file is, you compile the program with gcc (if using GNU linux, or find the compiler available for your system.) open the terminal emulator and run the following line to compile the program: `gcc hello.c`, to execute run: `./a.out`. Author's asks about if we gat some warning message from the compiler, this is because in some older compilers, left the main function without a return statement make throw a warning. As using modern compilers such Clang, there's no warning message, as long as main has iint as its return type. 

According to the **C standard (since C99)**:

> If control reaches the end of main() **without a return statement**, the effect is **as if return 0; had been executed**.

In some older compilers there's a warning that appears when running the program without the `return` statement.

---

**2**. Consider the following program:
```c
#include <stdio.h>
int main(void) 
{
	printf("Parkinson's Law:\nWork expands so as to ");
	printf("fill the time\n");
	printf("available for its completion.\n");
	return 0;
}
```

(a) Identify the directives and statements in this program. 
**Solution**:
- **Directives**: Instructions to the preprocessor, usually starting with `#`. In this program the only directive is `#include <stdio.h>` 
- **Statement**: Instructions that the program executes, typically ending with a semicolon.

```c
	printf("Parkinson's Law:\nWork expands so as to ");
	printf("fill the time\n");
	printf("available for its completion.\n");
	return 0;
```

(b) What out put does the program produce?
**Solution**:
The program will output the following message:
> _Parkinson's Law: 
> Work expands so as to fill the time 
> available for its completion._

---

**3**. Condense the `dweight.c` program by (1) replacing the assignments to `height`, `length`, and `width` with initializers and (2) removing the weight variable, instead calculating (volume + 165) / 166 within the last printf.

_dweight.c_:
```c
#include <stdio.h>
int main(void)
{
	int height, length, width, volume, weight;
	height = 8;
	length = 12;
	width = 10;
	volume = height * length * width;
	weight = (volume + 165) / 166;
	printf("Dimensions: %dx%dx%d\n", length, width, height);
	printf("Volume (cubic inches): %d\n", volume);
    printf("Dimensional weight (pounds): %d\n", weight);

	return 0;
}
```

**Solution**:
```c
#include <stdio.h>

int main(void) {

    int height = 8, length = 12, width = 10;
    int volume = height * length * width;

	printf("Dimensions: %dx%dx%d\n", length, width, height);
    printf("Volume (cubic inches): %d\n", volume);
    printf("Dimensional weight (pounds): %d\n", (volume + 165) / 166);
    
    return 0;
}
```

---

**4**. Write a program that declares several int and float variables—without initializing them— and then prints their values. Is there any pattern to the values? (Usually there isn’t.)

**Solution**:
```c
#include <stdio.h>

int main(void) {

float a, b, c;
int x, y, z;

printf("Uninitialized float values: %f %f %f\n",a, b, c);
printf("Uninitialized int values: %d %d %d\n", x, y , z);

return 0;
}
```

There shouldn't be any predictable pattern to these values because they depend on the state of the memory at runtime. That means that the values are garbage values  previously in the memory location addressed by these variables.

---

**5**. Which of the following are not legal C identifiers? 
(a) 100\_bottles 
(b) \_100\_bottles
(c) one\_\_hundred\_\_bottles
(d) bottles\_by\_the\_hundred\_

**Solution**: 

In C, **identifiers** (names for variables, functions, etc.) must follow these rules:
- They can **only contain** letters (A-Z or a-z), digits (0-9), and underscores (_).
- They **must not begin with a digit**.
- They **cannot be a reserved keyword**, though that’s not relevant here.
Evaluating the options we have that: **(a)** is a **illegal identifier**.

---

**6**. Why is it not a good idea for an identifier to contain more than one adjacent underscore (as in current___balance, for example)?

**Solution**: 

That's because the C standard (ISO C) reserves identifiers with double underscores (`__`) for the compiler and standard library. 

---

**7**. Which of the following are keywords in C?
	1. (a) for
	2. (b) If
	3. (c) main
	4. (d) printf
	5. (e) while

**Solution**: 
Options: (a), (c) and (e)

---

**8**. How many tokens are there in the following statement? `answer=(3*q-p*p)/3;`

**Solution**:
- `answer`
- ` = `
-  `(`
-  `3`
- `*` 
- `q` 
- `-`
- `p`
- `*`
- `p`
- `)`
- `/`
- `3`
- `;`

**14 tokens** in total.

---

**9**. Insert spaces between the tokens in Exercise 8 to make the statement easier to read.

**Solution**: 
`anwser = ( 3 * q - p * p ) / 3;`

---

**10**. In the dweight.c program (Section 2.4), which spaces are essential?

**Solution**:
The only space needed is for the directive `#include` that needs a new line.

---
## Programming Projects

**1**. Write a program that uses printf to display the following pattern on the screen:

```
             *
           *
         *
*      *
 *   *
   *
```

**Solution**:

```c
#include <stdio.h>
int main(void) {
    printf("        *\n       *\n      *\n     *\n*   *\n * *\n  *\n");
    return 0;
}
```

---

**2**. Write a program that computes the volume of a sphere with a 10-meter radius, using the formula $v = \frac{4}{3}πr3$. Write the fraction $\frac{4}{3}$ as 4.0f/3.0f. (Try writing it as 4/3. What happens?) Hint: C doesn’t have an exponentiation operator, so you’ll need to multiply r by itself twice to compute r3.

**Solution**:
```c
#include <stdio.h>

#define PI 3.14159265364
#define SPHERE_VOLUME(v) ( (4.0f/3.0f) * PI * (v * v * v))

int main(void) {

    printf("Sphere volume = %.2f\n m³", SPHERE_VOLUME(10.00));

    return 0;
}
```

When 4/3 instead of 4.0/3.0f what happens is a integer division which evaluates to 1. That means the fractional part is discarded), not 1.3333....
Making at least one operand as float, forces the compiler to generate the expression as floating-point division.

---

**3**. Modify the program of Programming Project 2 so that it prompts the user to enter the radius of the sphere.

**Solution**:
```c
#include <stdio.h>

#define PI 3.14159265364
#define SPHERE_VOLUME(v) ((4.0f/3.0f)*PI*(v*v*v))

int main(void) {

    float radius;
    scanf("%f",&radius);
    printf("sphere volume = %.2f\n", SPHERE_VOLUME(radius));

	return 0;
}
```

---

**4**. Write a program that asks the user to enter a dollars-and-cents amount, then displays the amount with 5% tax added: 
```
Enter an amount: 100.00 
With tax added: $105.00
```

**Solution**:
```c
#include <stdio.h>

int main(void) {

	float amount;
    printf("Enter an amount: ");
    scanf("%f",&amount);
    amount += amount*0.05f;
    printf("With tax added: %.2f\n", amount);
    
    return 0;
}
```

---

**5**. Write a program that asks the user to enter a value for x and then displays the value of the following polynomial:
$3x^5 + 2x^4 -5x^3 -x^2 + 7x - 6$
_Hint_: C doesn't have an exponentiation operator, so you'll need to multiply $x$ by itself repeatedly in order to compute the power of $x$. (For example, x\*x\*x is x cubed.)

**Solution**:
```c
#include <stdio.h>

#define f(x) ((3*(x*x*x*x*x)) + (2*(x*x*x*x)) - (5*(x*x*x)) - (x*x) + (7*x) - 6)

int main(void) {

    int x;
    printf("Enter a value for x: ");
    scanf("%d",&x);
    printf("f(%d) = %d\n", x, f(x));
    
    return 0;
}
```

---

**6**. Modify the program of Programming Project 5 so that the polynomial is evaluated using the following formula: 
$((((3x + 2)x – 5)x – 1)x + 7)x – 6$
Note that the modified program performs fewer multiplications. This technique for evaluating polynomials is known as [[Horner's method]].

**Solution**:
```c
#include <stdio.h>
#define f(x) (((((3*x+2)*x - 5)*x -1)*x + 7)*x - 6)

int main(void) {
    int x;
    printf("Enter a value for x: ");
    scanf("%d", &x);
    printf("f(%d) = %d\n", x,f(x));
    
    return 0;
}
```

---

**7**. Write a program that asks the user to enter a U.S. dollar amount and then shows how to pay that amount using the smallest number of $20, $10, $5, and $1 bills:
```
Enter a dollar amount: 93
$20 bills: 4
$10 bills: 1
$5 bills: 0
$1 bills: 3
```

_Hint_: Divide the amount by 20 to determine the number of $20 bills needed, and then reduce the amount by the total value of the $20 bills. Repeat for the other bill sizes. Be sure to use integer values throughout, not floating-point numbers.

**Solution**:
```c
#include <stdio.h>

int main(void) {

    int amount, remaining; 
    int twenties, tens, fives, ones;
    
    printf("Enter a dollar amount: ");
    scanf("%d",&amount);
    
    twenties = amount / 20;
    remaining = amount - 20*twenties;
    tens = remaining / 10;
    remaining = remaining - 10*tens;
    fives = remaining / 5;
    remaining = remaining - 5*fives;
    ones = remaining / 1;
    printf("$20 bills: %d\n$10 bills: %d\n$5 bills: %d\n$1 bills: %d\n",notes_of_20,notes_of_10,notes_of_5,notes_of_1);
    
    return 0;
}
```

---

**8**. Write a program that calculates the remaining balance on a loan after the first, second, and third monthly payments: 
```
   Enter amount of loan: 20000.00
   Enter interest rate: 6.0
   Enter monthly payment: 386.66
   Balance remaining after first payment: $19713.34
   Balance remaining after second payment: $19425.25
   Balance remaining after third payment: $19135.71
```

Display each balance with two digits after the decimal point. Hint: Each month, the balance is decreased by the amount of the payment, but increased by the balance times the monthly interest rate. To find the monthly interest rate, convert the interest rate entered by the user to a percentage and divide it by 12.

**Solution**:
```c
#include <stdio.h>
#define tax(v) ((v/100.00f) / 12.00f)

int main(void) {

    double loan, rate, payment;
    double balance;
    printf("Enter amount of loan: ");
    scanf("%lf",&loan);
    printf("Enter interest rate: ");
    scanf("%lf", &rate);
    printf("Enter monthly payment: ");
    scanf("%lf",&payment);
    balance = loan;
    balance = balance + (loan * tax(rate) ) - payment;
    printf("Balance remaining after first payment: %.2lf\n", balance);
	
	balance = balance + (loan * tax(rate) ) - payment;
    printf("Balance remaining after first payment: %.2lf\n", balance);
    
    balance = balance + (loan * tax(rate) ) - payment;
    printf("Balance remaining after third payment: %.2lf\n", balance);
    return 0;
}
```
