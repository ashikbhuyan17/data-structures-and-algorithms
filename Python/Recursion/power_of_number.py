def power_of_number(base, exponent):
    # print(base, exponent)

    if exponent == 0:
        return 1
    if exponent == 1:
        return 1
    else:
        # count = 1
        # for i in range(0, exponent):
        #     print(i)
        #     count *= base
        #     print(count)

        return (base * power_of_number(base, exponent-1))


"""
base * power_of_number(5, 3) = 5*25
    base * power_of_number(5, 3-1 = 2) = 5*5 = 25
        base * power_of_number(5, 2-1 = 1) = 5
            base * power_of_number(5, 1-1 = 0) = 1
"""

a = power_of_number(5, 4)
print(a)
# for i in range(1, 4):
#     print(power_of_number(5, i))
