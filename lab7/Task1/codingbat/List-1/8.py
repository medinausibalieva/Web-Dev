def max_end3(nums):
  maxi = 0
  if nums[0] > nums[2]: maxi = nums[0]
  if nums[0] < nums[2]: maxi = nums[2]
  if nums[0] == nums[2]: maxi = nums[0]
  a = []
  a.append(maxi)
  a.append(maxi)
  a.append(maxi)
  return a
