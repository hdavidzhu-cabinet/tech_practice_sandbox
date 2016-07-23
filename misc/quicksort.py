# SCRAPPED: I got confused with all the pointers.

import math
import time
import random

def quicksort(array, left_pointer = 0, right_pointer = -1):
  if right_pointer == -1:
    right_pointer = len(array) - 1
  section_length = right_pointer + 1 - left_pointer

  if section_length <= 2:
    return True

  pivot_pointer = section_length / 2 + left_pointer
  pivot_value = array[pivot_pointer]
  print "pivot_pointer: ", pivot_pointer
  print "array: ", array
  for left_index in range(left_pointer, pivot_pointer + 1):
    if array[left_index] < pivot_value:
      continue

    # Otherwise, our current left is greater than our pivot
    else:
      print "left_index: ", left_index
      for i in range(pivot_pointer - 1, right_pointer):
        right_index = right_pointer - (i - pivot_pointer + 1)
        print "right_index: ", right_index
        if (array[right_index] < pivot_value):
          swap(array, left_index, right_index)
          break

  # time.sleep(1)
  return quicksort(array, left_pointer, pivot_pointer) and quicksort(array, pivot_pointer, right_pointer)

def swap(array, left_index, right_index):
  tmp = array[right_index]
  array[right_index] = array[left_index]
  array[left_index] = tmp

if __name__ == '__main__':
  array = [int(1000 * random.random()) for i in xrange(10)]
  quicksort(array)
  print array
