# Design an algorithm and write code to remove the duplicate characters in a
# string without using any additional buffer.
# NOTE: One or two additional variables are fine. An extra copy of the array is not.

# FOLLOWUP: Write test cases for this method.

def remove_duplicates(input_string)
  output_string = ""

  input_string.each_char.with_index do |char, index|
    chosen_char = char
    input_string[index + 1 .. input_string.length - 1].each_char do |next_char|
      if (chosen_char != next_char)
        output_string +=
      end
    end
  end
end

if __FILE__ == $0
  puts remove_duplicates("Hello")
  puts remove_duplicates("yummy")
end
