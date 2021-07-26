'''
A string is said to be palindrome if it reads the same backward as forward. 
For e.g. above string is a palindrome because if we try to read it from backward, it is same as forward. One of the approach to 
check this is iterate through the string till middle of string and compare a character from back and forth.
'''


# def palindrome():
#     pass

# palindrome()

#  String reverse

# mam = "madam"
# print(len(mam))
# i = 0
# while i < len(mam):
#     print(mam[i])
#     i = i+1

# inputStr = "hello"
# print(inputStr[-1 :: -1])


# inputStr = "hello"
# result = ""

# for i in range(len(inputStr)-1, -1, -1):
#     result = result + inputStr[i]
#     print(result)

# print(result)

# recursion

# def reverse_input(inputStr):
#     result = ""
#     print(len(inputStr))
#     if (len(inputStr)) > 0:
#         return 0
#     else:
#         return result + reverse_input(len(inputStr)-1)

#     # for i in range(len(inputStr)-1, -1, -1):
#     #     result = result + inputStr[i]
#     #     print(result)


# print(reverse_input("hello"))

# def reverse(string):
#     if len(string) == 0:
#         return

#     temp = string[0]
#     reverse(string[1:])
#     print(temp, end='')

# # Driver program to test above function
# string = "Geeks for Geeks"
# reverse(string)


# Recursive function to check if `str[low…high]` is a palindrome or not
def isPalindrome(str, low, high):

    # base case
    if low >= high:
        return True

    # return false if mismatch happens
    if str[low] != str[high]:
        return False

    # move to the next pair
    return isPalindrome(str, low + 1, high - 1)


if __name__ == '__main__':

    str = "madam"

    if isPalindrome(str, 0, len(str) - 1):
        print("Palindrome")
    else:
        print("Not Palindrome")
