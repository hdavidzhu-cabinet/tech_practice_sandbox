def check_if_conflicting(input_string)
  input_string.each_char.with_index do |char, index|
    return true if (input_string[(index+1)..(input_string.length-1)].include? char)
  end
  return false
end

def check_if_conflicting_w_hashmap(input_string)
  string_hash = Hash.new
  input_string.each_char do |char|
    if string_hash[char]
      return true
    end
    string_hash[char] = char
  end

  return false
end

if __FILE__ == $0
  puts check_if_conflicting("Hello")
  puts check_if_conflicting("Cat")
  puts check_if_conflicting("w")

  puts check_if_conflicting_w_hashmap("Hello")
  puts check_if_conflicting_w_hashmap("Cat")
  puts check_if_conflicting_w_hashmap("w")
end
