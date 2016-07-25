import random

def mergesort(array):

  arrayLen = len(array)

  if (arrayLen <= 1):
    return array

  midpoint = arrayLen / 2

  # Break it up.
  sorted_left = mergesort(array[0:midpoint])
  sorted_right = mergesort(array[midpoint:-1])

  sorted_array = []

  # Pick and choose.
  while len(sorted_left) > 0 and len(sorted_right) > 0:
    if (sorted_left[0] <= sorted_right[0]):
      sorted_array.append(sorted_left.pop(0));
    else:
      sorted_array.append(sorted_right.pop(0));

  # Add any leftovers.
  sorted_array += sorted_left
  sorted_array += sorted_right

  return sorted_array

if __name__ == "__main__":
  array = [int(random.random() * 100) for i in range(30)]
  sorted_array = mergesort(array)
  print sorted_array
