# iterative and recursive

# iterative way   => 0+1+1+2+3+5+8+13+21+34
# def fibonacci(n):
#     a = 0
#     b = 1
#     # assert condition [, Error Message]
#     assert n > 0 and n == int(n), " 'n' must be positive integer number "
#     if n == 0:
#         print(0)

#     for i in range(2, n):
#         # swap
#         c = a + b
#         a = b
#         b = c
#         print(c)
#     return c


# print(fibonacci(10))


# recursive way

def Fibonacci(n):
    assert n >= 0 and n == int(n), " 'n' must be positive integer number "

    if n == 0:
        return 0
    # Second Fibonacci number is 1
    if n == 1:
        return 1
    else:
        return Fibonacci(n-1)+Fibonacci(n-2)


print(Fibonacci(10))
# for i in range(1, 6):
#     print(Fibonacci(i))
