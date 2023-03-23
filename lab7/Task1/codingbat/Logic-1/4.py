def caught_speeding(speed, is_birthday):
  if is_birthday == True:
    if speed <= 65: return 0
    if speed > 65 and speed <= 85: return 1 
    if speed >= 86: return 2 
  if is_birthday == False:
    if speed <= 60: return 0
    if speed > 60 and speed <= 80: return 1 
    if speed >= 81: return 2 
