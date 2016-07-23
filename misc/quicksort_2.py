# https://www.nczonline.net/images/wp-content/uploads/2012/11/quicksort_partition1.png
# http://www.algolist.net/img/sorts/quick-sort.png

import random
import time

def quicksort(array, section_start = 0, section_end = -1):
  if section_end == -1:
    section_end = len(array) - 1

  # Array size 1 is base case
  if (section_end - section_start) < 1:
    return

  # Determine pivot
  pivot_pointer = int(random.random() * (section_end - section_start)) + section_start
  pivot_value = array[pivot_pointer]

  # Start pointers at left and right
  left_pointer = section_start
  right_pointer = section_end

  while left_pointer <= right_pointer:
    while (array[left_pointer] < pivot_value):
      left_pointer += 1
    while (array[right_pointer] > pivot_value):
      right_pointer -= 1

    # Only swap left to right
    if (left_pointer <= right_pointer):
      swap(array, left_pointer, right_pointer)
      left_pointer += 1
      right_pointer -= 1

  quicksort(array, section_start, right_pointer)
  quicksort(array, left_pointer, section_end)

def swap(array, left_index, right_index):
  tmp = array[left_index]
  array[left_index] = array[right_index]
  array[right_index] = tmp

if __name__ == "__main__":
  array = [int(random.random() * 100) for i in range(30)]
  print array
  quicksort(array)
  print array
