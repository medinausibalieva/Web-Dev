n = int(input())
for i in range(1, n + 1):
    while i * i <= n:
        print(i * i)
        break