---
author: "João Antonio"
title: "Chapter III Solutions"
date: "2025-05-28"
description: "Solution to exercises proposed in Chapter 3"
---

# Chapter 3

**1**. What output do the following calls of printf produce? 

(a) printf("%6d,%4d", 86, 1040); 
(b) printf("%12.5e", 30.253);
(c) printf("%.4f", 83.162);
(d) printf("%-6.2g", .0000009979);

**Solution**:
(a) The first one will output 86 with 4 trailing spaces the second will display only 1040.
(b) 3.02530e+01
(c) 83.1620
(d) 1.0e-06

---

**2**. Write calls of printf that display a float variable x in the following formats.

(a) Exponential notation; left-justified in a field of size 8; one digit after the decimal point.
(b) Exponential notation; right-justified in a field of size 10; six digits after the decimal point.
(c) Fixed decimal notation; left-justified in a field of size 8; three digits after the decimal point.
(d) Fixed decimal notation; right-justified in a field of size 6; no digits after the decimal point.

**Solution**:

**Using PI as float constant for exemplification**
(a) 
```c
printf("%-8.1e\n", M_PI);
```

(b) 
```c
printf("%10.6e\n", M_PI);
```

(c)
```c
printf("%-8.3f\n", M_PI);
```

(d) 
```c
printf("%6.0f\n",M_PI);
```

---

**3**. For each of the following pairs of scanf format strings, indicate whether or not the two strings are equivalent. If they’re not, show how they can be distinguished.
	(a) `"%d" versus " %d"`
	(b) `"%d-%d-%d" versus "%d -%d -%d"`
	(c) `"%f" versus "%f "`
	(d) `"%f,%f" versus "%f, %f"` 

**Solution**:
(a) both are equivalent
(b) both are equivalent
(c) both are equivalent
(d) they not equivalent

--- 

**4**. Suppose that we call scanf as follows: `scanf("%d%f%d", &i, &x, &j);`  If the user enters `10.3 5 6` what will be the values of i, x, and j after the call? (Assume that i and j are int variables and x is a float variable.)  

**Solution**: 
10, 0.3, 5

Reason: the first `%d` reads 10.3 and drops the fractional part, the upcoming `%f` reads the .3 value, and the last `%d` reads 5 and the value 6 is ignored by the scanf.

---


**5**. Suppose that we call scanf as follows: scanf("%f%d%f", &x, &i, &y); If the user enters 12.3 45.6 789 what will be the values of x, i, and y after the call? (Assume that x and y are float variables and i is an int variable.) 

**Solution**:
12.3, 45, 0.6

---

**6**. Show how to modify the addfrac.c program of Section 3.2 so that the user is allowed to enter fractions that contain spaces before and after each / character.

_addfrac.c_:
```c
#include <stdio.h>
int main(void)
{
	int num1, denom1, num2, denom2, result_num, result_denom;
	printf("Enter first fraction: ");
	scanf("%d/%d", &num1, &denom1);
	printf("Enter second fraction: ");
	scanf("%d/%d", &num2, &denom2);
	result_num = num1 * denom2 + num2 * denom1;
	result_denom = denom1 * denom2;
	printf("The sum is %d/%d\n", result_num, result_denom);
	return 0;
}
```

**Solution**:
```c
#include <stdio.h>

int main(void)
{
	int num1, denom1, num2, denom2, result_num, result_denom;
	printf("Enter first fraction: ");
	scanf("%d / %d", &num1, &denom1);
	printf("Enter second fraction: ");
	scanf("%d / %d", &num2, &denom2);
	result_num = num1 * denom2 + num2 * denom1;
	result_denom = denom1 * denom2;
	printf("The sum is %d/%d\n", result_num, result_denom);
	
	return 0;
}
```

---
## Programming Projects

**1**. Write a program that accepts a date from the user in the form _mm/dd/yyyy_ and then displays it in the form _yyyymmdd_: 
`Enter a date (mm/dd/yyyy): 2/17/2011` 
`You entered the date 20110217`

**Solution**:
```c
#include <stdio.h>

int main(void) {
    int dd,yyy,mm;
    scanf("%d/%d/%d",&mm,&dd,&yyy);
    printf("You entered the date %04d%02d%02d\n",yyy,mm,dd);
    return 0;
}
```

---

**2**. Write a program that formats product information entered by the user. A session with the program should look like this: 

`Enter item number: 583`
`Enter unit price: 13.5` 
`Enter purchase date (mm/dd/yyyy): 10/24/2010` 
output:
```
Item            Unit Price Purchase Date
583             $ 13.50    10/24/2010
```

**Solution**:
```c
#include <stdio.h>

int main(void) {
    int it, mm, dd, yyyy;
    float price;
    printf("Enter a item number: ");
    scanf("%d", &it);
    printf("Enter unit price: ");
    scanf("%f", &price);
    printf("Enter purchase date (mm/dd/yyyy): ");
    scanf("%d/%d/%d",&mm,&dd,&yyyy);
    printf("Item\tUnit Price\tPurchase Date\n%d\t$ %.2f \t\t %d/%d/%d\n",it,price, mm,dd,yyyy); 
    return 0;
}

```

---

**3**. Books are identified by an International Standard Book Number (ISBN). ISBNs assigned after January 1, 2007 contain 13 digits, arranged in five groups, such as 978-0-393-97950-3. (Older ISBNs use 10 digits.) The first group (the GS1 prefix) is currently either 978 or 979. The group identifier specifies the language or country of origin (for example, 0 and 1 are used in English-speaking countries). The publisher code identifies the publisher (393 is the code for W. W. Norton). The item number is assigned by the publisher to identify a specific book (97950 is the code for this book). An ISBN ends with a check digit that’s used to verify the accuracy of the preceding digits. Write a program that breaks down an ISBN entered by the user: 
```
Enter ISBN: 978-0-393-97950-3
GS1 prefix: 978
Group identifier: 0
Publisher code: 393
Item number: 97950
Check digit: 3
```

Note: The number of digits in each group may vary; you can’t assume that groups have the lengths shown in this example. Test your program with actual ISBN values (usually found on the back cover of a book and on the copyright page).

**Solution**:

```c
#include <stdio.h>

int main(void) {
	int gs1, gi, pc, in, cd;
    printf("Enter ISBN: ");
    scanf("%d-%d-%d-%d-%d", &gs1, &gi,&pc, &in, &cd);
    printf("GS1 prefix: %d\n", gs1);
    printf("Group identifier: %d\n", gi);
    printf("Publisher code: %d\n", pc);
    printf("Item number: %d\n",in);
    printf("Check digit: %d\n",cd);
    return 0;
}
```

---

**4**. Write a program that prompts the user to enter a telephone number in the form (xxx) xxx- xxxx and then displays the number in the form xxx.xxx.xxx:
```
Enter phone number [(xxx) xxx-xxxx]: (404) 817-6900
You entered 404.817.6900
```

**Solution**:
```c
#include <stdio.h>
int main(void) {
    int prefix, num, posfix;
    printf("Enter a phone number [(xxx) xxx-xxxx]: ");
    scanf("(%d) %d-%d",&prefix, &num,&posfix);
    printf("%d.%d.%d\n", prefix,num,posfix);
    return 0;
}
```

--- 

**5**. Write a program that asks the user to enter the numbers from 1 to 16 (in any order) and then displays the numbers in a 4 by 4 arrangement, followed by the sums of the rows, columns, and diagonals:

```
Enter the numbers from 1 to 16 in any order 16 3 2 13 5 10 11 8 9 6 7 12 4 15 14 1
16  3  2 13
 5 10 11  8
 9  6  7 12
 4 15 14  1
Rows sums: 34  34  34  34
Column sums: 34  34  34  34
Diagonal sums: 34  34
```

If the row, column, and diagonal sums are all the same (as they are in this example), the numbers are said to form a **magic square**. The magic square shown here appears in a 1514 engraving by artist and mathematician [[Albrecht Dürer]]. (Note that the middle numbers in the last row give the date of the engraving.)

**Solutions**:
```c
#include <stdio.h>

int main(void) {

  int n1, n2, n3, n4, n5, n6, n7, n8, n9, n10,
      n11, n12, n13, n14, n15, n16;

  printf("Enter the numbers from 1 to 16 in any order: ");
  scanf("%d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d", 
        &n1,  &n2,  &n3,  &n4,  &n5,  &n6, &n7, &n8, &n9, &n10,
        &n11, &n12, &n13, &n14, &n15, &n16);

  printf("%2d %2d %2d %2d\n",n1,n2,n3,n4);
  printf("%2d %2d %2d %2d\n",n5,n6,n7,n8);
  printf("%2d %2d %2d %2d\n",n9,n10,n11,n12);
  printf("%2d %2d %2d %2d\n",n13,n14,n15,n16);

  printf("Rows sums: %d  %d  %d  %d\n",n1+n2+n3+n4,n5+n6+n7+n8,n9+n10+n11+n12,n13+n14+n15+n16);
  printf("Column sums: %d  %d  %d  %d\n",n1+n5+n9+n13,n2+n6+n10+n14,n3+n7+n11+n15,n4+n8+n12+n16);
  printf("Diagonal sums: %d  %d\n",n1+n6+n11+n16,n4+n7+n10+n13);

  return 0;

}
```

---

**6**. Modify the `addfrac.c` program of Section 3.2 so that the user enters both fractions at the same time, separated by a plus sign:
```
Enter two fractions separated by a plus sign: 5/6+3/4
The sum is 38/24
```

addfrac.c:
```c
#include <stdio.h>
int main(void)
{
	int num1, denom1, num2, denom2, result_num, result_denom;
	printf("Enter first fraction: ");
	scanf("%d/%d", &num1, &denom1);
	printf("Enter second fraction: ");
	scanf("%d/%d", &num2, &denom2);
	result_num = num1 * denom2 + num2 * denom1;
	result_denom = denom1 * denom2;
	printf("The sum is %d/%d\n", result_num, result_denom);
	return 0;
}
```

**Solution**:

```c
#include <stdio.h>

int main(void)
{
	int num1, denom1, num2, denom2, result_num, result_denom;
    printf("Enter two fractions separated by a plus sign: ");
    scanf("%d/%d+%d/%d", &num1, &denom1, &num2, &denom2);
	result_num = num1 * denom2 + num2 * denom1;
	result_denom = denom1 * denom2;
	printf("The sum is %d/%d\n", result_num, result_denom);
	return 0;
}
```
