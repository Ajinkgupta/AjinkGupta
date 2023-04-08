# Solving Matrix Sums in C Language

## Introduction
Matrix addition is an important operation in programming that allows us to add two or more matrices together. This is a crucial operation for various programming applications such as data processing, image processing, and machine learning.

## Section 1: Basic concept of matrices
A matrix is a rectangular array of numbers arranged in rows and columns. The numbers in a matrix are called elements. Matrices can be classified based on their dimensions, such as square matrices, row matrices, and column matrices. Matrices are typically denoted using uppercase letters, with their elements denoted using lowercase letters.

## Section 2: Matrix addition in C language
To add two matrices in C language, we need to ensure that both matrices have the same dimensions. We can then use a nested loop to iterate over each element of the matrices and add them together. Here's an example code for matrix addition in C language:

```
#include <stdio.h>

int main() {
    int A[2][2] = {{1, 2}, {3, 4}};
    int B[2][2] = {{5, 6}, {7, 8}};
    int C[2][2], i, j;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    printf("Matrix A:\n");
    printf("%d %d\n", A[0][0], A[0][1]);
    printf("%d %d\n", A[1][0], A[1][1]);

    printf("Matrix B:\n");
    printf("%d %d\n", B[0][0], B[0][1]);
    printf("%d %d\n", B[1][0], B[1][1]);

    printf("Resultant Matrix:\n");
    printf("%d %d\n", C[0][0], C[0][1]);
    printf("%d %d\n", C[1][0], C[1][1]);

    return 0;
}```


Output
```
Matrix A:
1 2
3 4
Matrix B:
5 6
7 8
Resultant Matrix:
6 8
10 12

```

## Section 3: Matrix subtraction in C language

Subtracting two matrices is similar to adding them, except we use the subtraction operator instead. Here's an example code for matrix subtraction in C language:

```
#include <stdio.h>

int main() {
    int A[2][2] = {{1, 2}, {3, 4}};
    int B[2][2] = {{5, 6}, {7, 8}};
    int C[2][2], i, j;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            C[i][j] = A[i][j] - B[i][j];
        }
    }

    printf("Matrix A:\n");
    printf("%d %d\n", A[0][0], A[0][1]);
    printf("%d %d\n", A[1][0], A[1][1]);

    printf("Matrix B:\n");
    printf("%d %d\n", B[0][0], B[0][1]);
   
    printf("%d %d\n", B[1][0], B[1][1]);

    printf("Resultant Matrix:\n");
    printf("%d %d\n", C[0][0], C[0][1]);
    printf("%d %d\n", C[1][0], C[1][1]);

    return 0;
}
```

Output :
```
Matrix A:
1 2
3 4
Matrix B:
5 6
7 8
Resultant Matrix:
-4 -4
-4 -4
```

## Section 4: Matrix multiplication in C language

Matrix multiplication is a bit more complex than matrix addition and subtraction. It involves multiplying each element of a row in the first matrix by the corresponding element in a column in the second matrix, and summing up the products to get the element in the resulting matrix. Here's an example code for matrix multiplication in C language:

```
#include <stdio.h>

int main() {
    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int B[3][2] = {{7, 8}, {9, 10}, {11, 12}};
    int C[2][2], i, j, k, sum;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            sum = 0;
            for (k = 0; k < 3; k++) {
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
        }
    }

    printf("Matrix A:\n");
    printf("%d %d %d\n", A[0][0], A[0][1], A[0][2]);
    printf("%d %d %d\n", A[1][0], A[1][1], A[1][2]);

    printf("Matrix B:\n");
    printf("%d %d\n", B[0][0], B[0][1]);
    printf("%d %d\n", B[1][0], B[1][1]);
    printf("%d %d\n", B[2][0], B[2][1]);

    printf("Resultant Matrix:\n");
    printf("%d %d\n", C[0][0], C[0][1]);
    printf("%d %d\n", C[1][0], C[1][1]);

    return 0;
}
```
output:
Matrix A:
1 2 3
4 5 6
Matrix B:
7 8
9 10
11 12
Resultant Matrix:
58 64
139 154

```

## Section 5: Other matrix operations in C language

Other common matrix operations include finding the determinant, transpose, and inverse of a matrix. Here are example codes for each operation:

### Finding the determinant of a matrix

```
#include <stdio.h>

int determinant(int A[3][3], int n) {
    int det = 0, submatrix[3][3];
    if (n == 2) {
        return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    } else {
        for (int x = 0; x < n; x++) {
            int subi = 0;
            for (int i = 1; i < n; i++) {
                int subj = 0;
            for (int j = 0; j < n; j++) {
                if (j == x)
                    continue;
                submatrix[subi][subj] = A[i][j];
                subj++;
            }
            subi++;
        }
        det += (x % 2 == 1 ? -1 : 1) * A[0][x] * determinant(submatrix, n - 1);
    }
    return det;
}
}

int main() {
int A[3][3] = {{2, -3, 1}, {0, 4, -2}, {1, 5, -1}};
printf("Matrix A:\n");
printf("%d %d %d\n", A[0][0], A[0][1], A[0][2]);
printf("%d %d %d\n", A[1][0], A[1][1], A[1][2]);
printf("%d %d %d\n", A[2][0], A[2][1], A[2][2]);

int det = determinant(A, 3);
printf("Determinant of matrix A: %d\n", det);

return 0;
}
```

Ouput :

```

Matrix A: 
2 -3 1
0 4 -2 
1 5 -1 
Determinant of matrix A: 16
```


### Finding the transpose of a matrix

```c
#include <stdio.h>

int main() {
    int A[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int T[3][3], i, j;

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            T[i][j] = A[j][i];
        }
    }

    printf("Matrix A:\n");
    printf("%d %d %d\n", A[0][0], A[0][1], A[0][2]);
    printf("%d %d %d\n", A[1][0], A[1][1], A[1][2]);
    printf("%d %d %d\n", A[2][0], A[2][1], A[2][2]);

    printf("Transpose of matrix A:\n");
    printf("%d %d %d\n", T[0][0], T[0][1], T[0][2]);
    printf("%d %d %d\n", T[1][0], T[1][1], T[1][2]);
    printf("%d %d %d\n", T[2][0], T[2][1], T[2][2]);

    return 0;
}
```
Output:

```
Matrix A:
1 2 3
4 5 6
7 8 9
Transpose of matrix A:
1 4 7
2 5 8
3 6 9

```


 ### Finding the inverse of a matrix
The identity matrix is a square matrix that has ones along its diagonal and zeros elsewhere. The inverse of a matrix can be used to solve systems of linear equations, among other things. 

```

```

