class PolyTreeNode
    attr_accessor :children, :value
    attr_reader :parent


    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(parent)
        return if self.parent == parent
        if self.parent 
            self.parent.children.delete(self)
        end
        @parent = parent 
        self.parent.children << self unless self.parent.nil?
    end

    def add_child(child)
        child.parent = self 
    end

    def remove_child(child)
        raise "node is not a child" if !self.children.include?(child)
        child.parent = nil
    end

    def dfs(target_value)
    return self if self.value == target_value

        self.children.each do |child|
           search_result = child.dfs(target_value)
           return search_result unless search_result.nil?
        end
        nil
    end

    def bfs(target_value)
        queue = [self]
        until queue.empty?
            ele = queue.shift
            return ele if ele.value == target_value
            queue += ele.children


            # if queue[0].value == target_value
            #     return queue[0]
            # else
            #     queue += queue[0].children
            #     queue.shift     
            # end
        end
        nil
    end
end

# 9

#     2
#     /\
#     3 9
#     /\
#     4 5


