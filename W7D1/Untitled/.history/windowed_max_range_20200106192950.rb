def windowed_max_range(arr, length)
  max_range = 0
  (0...arr.length-length).each { |i|
    window = arr[i..i+length]
    diff = window.max - window.min
    max_range = diff >= max_range ? diff : max_range
  }
  max_range
end