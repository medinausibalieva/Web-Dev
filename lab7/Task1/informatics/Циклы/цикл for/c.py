import math

a = int(input())
b = int(input())

def isPow(a, b):
    for x in [i*i for i in range(b + 1) if i*i >= a and i*i <= b]:
        print(x)
    
isPow(a, b) 