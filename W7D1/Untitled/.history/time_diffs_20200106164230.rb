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

def subsets(arr) # O(n^2)
  subsets = []
  arr.each_with_index { |ele,idx| 
    arr[idx..-1].each_with_index { |ele2,idx2| 
      subsets << arr[idx..idx+idx2]
    }
  }

  subsets

  # subsets.reduce (0) do |memo, array|
  #   memo > array.sum ? memo : array.sum
  # end
end

def largest_contiguous_sum(arr)
  largest_sum = -Float::INFINITY

  arr.each_with_index do |ele, idx|

  end

  largest_sum.sum
end