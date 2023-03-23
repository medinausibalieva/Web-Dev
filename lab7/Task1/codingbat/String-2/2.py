def count_hi(str):
  cnt = 0
  for i in range(0, len(str) - 1):
    if str[i] == 'h' and str[i+1] == 'i':
      cnt += 1
  return cnt    
