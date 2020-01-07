What is a class?
    - An object with properties and behaviors; properties are instance variables and behaviors are methods
    - Class variables and methods belong to the class and are not variable to the instance
    - The purpose of a class is to:
            - the code stays dry
            - coding objects allows for easier interaction of certain parts of your code and simpler means for reproduction

----------------------------------------

What does SELF mean? 
    - SELF is the object that is calling upon a method. In a class for example, the class method has a "self" that refers to the class while instance methods are called upon with a "self" that refers to the instance method

----------------------------------------

What is the use of super?
    - You use super when you are inheriting from a parent class, but you want to add to the initialize method of the child class. So, in overwriting the initialize method, if you want the parent class' attributes, you write super to inherit them but then add on your attributes for the child class. 
         _______________

    - it calls a method on the parent class with the same name of the method you called super in, in the child class.

----------------------------------------

OOP Jukebox - 

#contains music/records/etc.
#has a interface where users press buttons to choose song
#

- instances of music that interact with an instance of a jukebox

Class User Interface
Class Jukebox
Class Music that it contains

----------------------------------------

- n1 = Node.new(1)
- n1.bfs { |node| node.value == 1}

class Node

    def bfs(&prc)
    raise "There is no block" if prc == nil
    queue = [self]
        until queue.empty?
        el = queue.shift
            if prc.call(el)
                return el
            else
                queue.concat(el.children)
            end
        end
    nil 
    end

end