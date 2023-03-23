def make_ends(nums):
  new = []
  if len(nums) >= 1:
    new.append(nums[0])
    new.append(nums[len(nums) - 1])
  return new
