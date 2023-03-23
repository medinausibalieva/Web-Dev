def squirrel_play(temp, is_summer):
	if is_summer == False:
		if temp <= 90 and temp >= 60:
			return True
		return False
	elif is_summer == True:
		if temp <= 100 and temp >= 60:
			return True
		return False    