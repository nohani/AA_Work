def anagram?(word_one, word_two)
  first_anagram?(word_one, word_two)
  # second_anagram?(word_one, word_two)
  # third_anagram?(word_one, word_two)
end

def first_anagram?(word_one, word_two)
  anagrams = permutations(word_one)
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