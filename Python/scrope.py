# l = 10  #global scope
# def function1(n):
#     # l = 5 
#     m = 8 # local scope
#     global l  # permission and change global variable
#     l = l + 45
#     print(l,m)
#     print(n,"i have printed")

# function1("this is me")    


# def harry ():
#     x =20
#     def rohan():
#         global x 
#         x = 88
#     print("before calling rohan()",x)
#     rohan()
#     print("after calling rohan()",x)    

# harry()



x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)

