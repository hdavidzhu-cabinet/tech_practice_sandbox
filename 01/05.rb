def convert_space_to_percent_twenty(input_string)
  output_string = ""
  input_string.each_char do |char|
    if !char.match(/\s/)
      output_string += char
    else
      output_string += "%20"
    end
  end

  return output_string
end

if __FILE__ == $0
  puts convert_space_to_percent_twenty("Hello world!")
end
