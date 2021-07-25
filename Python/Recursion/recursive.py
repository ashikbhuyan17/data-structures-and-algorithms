# iterative and recursive

# iterative way
# def iterative_way_power_2_n(n):
#     i=0
#     power = 1
#     while i<n:
#         power = power * 2
#         i = i+1
#     print(power)
# iterative_way_power_2_n(10)

# recursive way
def recursive_way(n):
    # base condition
    assert n >= 0 and n == int(n), " 'n' must be positive integer number "
    if n == 0:
        return 1
    else:
        power = recursive_way(n-1)
        print(power)
        return power * 2


ans = recursive_way(5)
print(ans)

"""
recursive_way(3) ) * 2 = 8
        recursive_way(2) *2 = 4 
            recursive_way(1) * 2 = 2 
                recursive_way(0) * 1 = 0
"""

# Fib0nacci


# power_of_number(base,exponent)
#
