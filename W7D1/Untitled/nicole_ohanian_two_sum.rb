# iterate thru twice and adding the unique elements, checking if they sum to target, return if so
def bad_two_sum?(arr, target_sum) # O(n^2)
  arr.each_with_index do |ele,idx|
    arr[idx+1..-1].each_with_index do |ele2, idx2|
      return true if ele + ele2 == target_sum
    end
  end
  false
end

def okay_two_sum?(arr, target_sum) # O(n log n)
  arr.sort!
  i = 0
  j = arr.length - 1

  until i == j 
    case arr[i] + arr[j] <=> target_sum
    when -1
      i += 1
    when 0
      return true
    when 1
      j -= 1
    end
  end
  false
end

def fabulous_two_sum?(arr, target_sum)

  hash_map = Hash.new{|h,k| h[k]=k}

  arr.each do |ele|
    hash_map[ele]
  end

  arr.each do |ele|
    diff = target_sum - ele
    return true if hash_map.has_key?(diff)
  end

  false
end

def fabulous_four_sum?(arr, target_sum)
  # we basically once we find two diffs it calls 
  hash_map = Hash.new{|h,k| h[k]=k}

  arr.each do |ele|
    hash_map[ele]
  end

  arr.each do |ele|
    diff = target_sum - ele
    diff = a + b + c
    fabulous_two_sum?(arr, ele)
    fabulous_three_sum?(arr, diff)
  end
end

def fabulous_x_sum?(arr, target, x=1)

end