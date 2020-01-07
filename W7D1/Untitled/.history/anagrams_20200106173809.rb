def anagram?(word_one, word_two)
  # first_anagram?(word_one, word_two)
  # second_anagram?(word_one, word_two)
  #third_anagram?(word_one, word_two)
  fourth_anagram?(word_one, word_two)
end

def first_anagram?(word_one, word_two)
  anagrams = permutations(word_one)
  anagrams.include?(word_two)
end

def second_anagram?(word_one, word_two)
  word_one.chars.each_with_index { |chr,idx| 
    if word_two.index(chr)
      word_two[word_two.index(chr)] = ""
    else
      return false
    end
  }
  return true 
end

def third_anagram?(word_one, word_two)
    word_one.chars.sort == word_two.chars.sort
end

def fourth_anagram?(word_one, word_two)
    hash_one = Hash.new(0)
end

def permutations(word,jdx=0)
  return [] if jdx == word.length
  perms = []

  word.each_char.with_index { |chr,idx|
    perms << word.dup
    word[idx], word[jdx] = word[jdx], word[idx]
    perms |= permutations(word, jdx+1)
  }

  perms
end

