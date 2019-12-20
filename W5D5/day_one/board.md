#Binary Search

#assume sorted array
#solve recursively
#search half of the array every time

array = [1, 2, 3] target = 2

def bsearch(array, target)
    return nil if array.length < 1

    middle = array.length / 2
    left = array.take(middle) [1]       [2]
    right = array.drop(middle) [2, 3]       [3]
    
    if array[middle] == target 
        return middle
    elsif array[middle] > target 
        bsearch(left, target)
    else
        sub_answer = bsearch(right, target) [2, 3]
        if sub_answer == nil
            return nil 
        else 
            sub_answer + middle + 1
        end
    end
end

###############################################

#my_each

class Array

def my_each(&prc)

i = 0
while i < self.length
    prc.call(self[i])
i += 1
end

self
end

[1, 2, 3] { |el| el * 2}
[2, 4, 6]

###############################################

#write an array method that returns a hash
#where the keys are any element that appears in the array
more than once and the values are the sorted indices for locations
of the elements

[1, 2, 2, 3, 3]

class Array

def dups

array = self.dup
counter = Hash.new(0) { 1 => 1, 2 => 2, 3 => 2}
indices_hash = Hash.new { |h, k| h[k] = [] } 

    self.each do |ele|
        counter[ele] += 1
    end

    counter.each do |k, v|
        if v >= 2
            indices_hash[k] += find_indices(array, k)
        end
    end

indices_hash
end

def find_indices(array, k)

indices = []

    array.each_with_index do |ele, i|
        if ele == k
        indices << i
        end
    end

indices

end

###############################################

def dups

indices_hash = Hash.new { |h, k| h[k] = [] } 

    self.each_with_index do |ele, i|
        indices_hash[ele] << i
    end

    indices_hash.select { |k, v| v.length > 1}

end
end

###############################################
#if it is greater than 10 sum the digits of the resulting number
#digital_root_step_num

# 43395 % 10
5
/10
4339.5 % 10
9
433.95 % 10
3

139

def digital_root(num)

digits = []

    until num < 10
    digits = []

        until num < 10
        digits << num % 10
        num /= 10
        end

        digits << num 
        num = digits.sum
    end

num
end

###############################################

#Write a method that returns largest prime factor of a number
#recommending is_prime? method

9

def largest_prime_factor(num)
    i = num
    while i > 0
        return i if is_prime?(i) && num % i == 0
        i -= 1
    end
end

def is_prime?(num)
     return false if num < 2

     (2...num).each do |factor|
        return false if num % factor == 0
     end

     true
end