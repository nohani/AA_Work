def bad_two_sum?(arr, target_sum)
  arr.each_with_index { |ele,idx|
    arr.each_with_index { |ele2, idx2|
      return true if idx2 > idx && ele + ele2 == target_sum
    }
  }
  false
end

def two_sum?(arr, target_sum)

end

# iterate thru twice and adding the unique elements, checking if they sum to target, return if so
# O(n^2)
