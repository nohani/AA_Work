def my_min(arr)
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