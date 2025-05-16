---
author: "João Antonio"
title: "Chapter 2 Exercises"
date: "2025-05-12"
description: "Solution to exercises proposed in Chapter 2 of the book"
---


1. Create and run Kernighan and Ritchie’s famous “hello, world” program:

```c
#include <stdio.h>
int main(void)
{
	printf("hello, world\n");
}
```
Do you get a warning message from the compiler? If so, what’s needed to make it go away?

**ANS**: 

To reproduce this exercise you need create a new file and name it with `.c` extension. In the same directory the file is, you compile the program with gcc (if using GNU linux, or find the compiler available for your system.) open the terminal emulator and run the following line to compile the program: `gcc hello.c`, to execute run: `./a.out`. Author's asks about if we gat some warning message from the compiler, this is because in some older compilers, left the main function without a return statement make throw a warning. As using modern compilers such Clang, there's no warning message, as long as main has iint as its return type. 

According to the **C standard (since C99)**:

> If control reaches the end of main() **without a return statement**, the effect is **as if return 0; had been executed**.

In some older compilers there's a warning that appears when running the program without the `return` statement.
