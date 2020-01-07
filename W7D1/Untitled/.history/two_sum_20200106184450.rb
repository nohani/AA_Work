# iterate thru twice and adding the unique elements, checking if they sum to target, return if so
def bad_two_sum?(arr, target_sum) # O(n^2)
  arr.each_with_index { |ele,idx|
    arr[idx+1..-1].each_with_index { |ele2, idx2|
      return true if ele + ele2 == target_sum
    }
  }
  false
end

def okay_two_sum?(arr, target_sum) # O(n log n)
  arr.sort!
  i = 0
  j = arr.length - 1

  until i == j 
  
end

def two_sum?(arr, target_sum)

end


