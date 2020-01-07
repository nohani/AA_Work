def bad_my_min(arr) # O(n^2)
  arr.each_with_index { |ele,idx| 
    is_min = true
    arr.each_with_index { |ele2,idx2| 
      if ele > ele2
        is_min = false
      end
    }
    return ele if is_min == true
  }
end

def my_min(arr) # O(n)
  min = arr[0]

  (1...arr.length).each { |i| 
    min = arr[i] if min > arr[i]
  }

  min
end

def bad_largest_contiguous_sum(arr) # O(n^2)
  subsets = []
  arr.each_with_index { |ele,idx| 
    arr[idx..-1].each_with_index { |ele2,idx2| 
      subsets << arr[idx..idx+idx2]
    }
  }


  subsets.reduce (0) do |memo, array|
    memo > array.sum ? memo : array.sum
  end
end

def largest_contiguous_sum(arr)
  largest_sum = -Float::INFINITY
  current_sum = 0

  arr.each_with_index do |ele, idx|
    current_sum += ele

    largest_sum = current_sum if current_sum > largest_sum 

    current_sum = 0 if current_sum < 0
  end

  largest_sum
end