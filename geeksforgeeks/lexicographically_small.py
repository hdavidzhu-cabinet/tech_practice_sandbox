def small(input_string):
  input_length = len(input_string)

  # Get the first chunk of a's.
  prepend_end_index = 0
  while (prepend_end_index < input_length and input_string[prepend_end_index] == 'a'):
    prepend_end_index += 1

  # Get the following longest string of a's.
  ending_a_index = prepend_end_index
  scan_index = prepend_end_index
  longest_a_length = 0
  current_a_length = 0
  has_hit_b = False

  while (scan_index < input_length):
    if (input_string[scan_index] == 'a'):
      current_a_length += 1
      if (current_a_length > longest_a_length):
        longest_a_length = current_a_length
        ending_a_index = scan_index
    elif (input_string[scan_index] == 'b'):
      has_hit_b = True
      current_a_length = 0
    scan_index += 1

  if prepend_end_index == input_length:
    prepend_end_index = 0

  if (has_hit_b == False):
    ending_a_index = prepend_end_index

  print "%d %d" % (prepend_end_index, ending_a_index)

if __name__ == "__main__":
  test_count = int(raw_input())
  for test in range(test_count):
    small(str(raw_input()))
