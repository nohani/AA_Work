def anagram?(word_one, word_two)
  # first_anagram?(word_one, word_two)
  # second_anagram?(word_one, word_two)
  # third_anagram?(word_one, word_two)
  # fourth_anagram?(word_one, word_two)
  fifth_anagram?(word_one, word_two)
end

def first_anagram?(word_one, word_two)
  anagrams = permutations(word_one)
  anagrams.include?(word_two)
end

def permutations(word,jdx=0)
  return [] if jdx == word.length
  perms = []

  word.each_char.with_index do |chr,idx|
    perms << word.dup
    word[idx], word[jdx] = word[jdx], word[idx]
    perms |= permutations(word, jdx+1)
  end

  perms
end

def second_anagram?(word_one, word_two)
  word_one.chars.each_with_index do |chr,idx| 
    if word_two.index(chr)
      word_two[word_two.index(chr)] = ""
    else
      return false
    end
   end 
  return true 
end

def third_anagram?(word_one, word_two)
    word_one.chars.sort == word_two.chars.sort
end

def fourth_anagram?(word_one, word_two)
    hash_one = Hash.new { |h, k| h[k] = 0 }
    hash_two = Hash.new { |h, k| h[k] = 0 }

    word_one.each_char {|char| hash_one[char] += 1}
    word_two.each_char {|char| hash_two[char] += 1}

    hash_one == hash_two
end

def fifth_anagram?(word_one, word_two)
    hash = Hash.new { |h, k| h[k] = 0 }

    word_one.each_char {|char| hash[char] += 1}
    word_two.each_char {|char| hash[char] -= 1}

    hash.values.all? {|el| el == 0 }
end


