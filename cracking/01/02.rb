def reverse_c_style_string(input_string)
  reverse_string = Array.new(input_string.length)
  input_string.each_char.with_index do |char, index|
    if(input_string.length - 1 - index == 0)
      return reverse_string.join()
    end
    reverse_string[input_string.length - 1 - index] = char
  end
end

if __FILE__ == $0
  puts reverse_c_style_string("Cat ")
  puts reverse_c_style_string("Catp")
end
