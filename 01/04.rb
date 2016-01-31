def are_they_anagrams(string_1, string_2)
  if (string_1.length != string_2.length)
    return false
  end

  hash = Hash.new
  string_1.each_char do |char|
    if (hash[char].nil?)
      hash[char] = 0
    end
    hash[char] = hash[char] + 1
  end

  string_2.each_char do |char|
    if (hash[char].nil?)
      return false
    end

    if (hash[char] == 0)
      return false
    end

    hash[char] = hash[char] - 1
  end

  return true
end

if __FILE__ == $0
  puts are_they_anagrams("cat", "cat")
  puts are_they_anagrams("cat", "cathy")
  puts are_they_anagrams("tac", "cat")
  puts are_they_anagrams("hello", "ohell")
  puts are_they_anagrams("hello", "ohecl")
end
