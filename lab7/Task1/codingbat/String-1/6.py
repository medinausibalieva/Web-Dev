def first_two(str):
  if str == '': return ''
  if len(str) == 1 or len(str) == 2: return str
  if len(str) > 2: return str[:2]
