require_relative "PolyTreeNode/skeleton/lib/00_tree_node"

class KnightPathFinder

    attr_reader :start_pos

    MOVES = [
            [2, 1],
            [1, 2],
            [1, -2],
            [-2, 1],
            [-1, 2],
            [2, -1],
            [-1, -2],
            [-2, -1]
            ]

    def initialize(start_position)
        @start_pos = start_position
        @considered_positions = [start_position]
        build_move_tree
    end

    def self.valid_moves(pos)
        valid_positions = []

        KnightPathFinder::MOVES.each do |subarr|
            row, col = pos
            new_row, new_col = subarr[0] + row, subarr[1] + col
            if new_row > 0 && new_col > 0 && new_row < 8 && new_col < 8
                valid_positions << [new_row, new_col] 
            end
        end
        valid_positions
    end

    def new_move_positions(pos)
        valid_pos = KnightPathFinder.valid_moves(pos)
        arr = []
        valid_pos.each do |position|
            if !@considered_positions.include?(position)
                @considered_positions << position
                arr << position
            end
        end
        arr
    end

    def build_move_tree
        root_node = PolyTreeNode.new(@start_pos)
        queue = [root_node] 
        until queue.empty?
            next_node = queue.shift
            positions = new_move_positions(next_node.value)
            positions.each do |pos|
               node = PolyTreeNode.new(pos)
               next_node.add_child(node)
               queue << node
            end
        end 
    end

    def find_path(end_pos)
        end_node = root_node.dfs(end_pos)
        trace_path_back(end_node)
    end

    def trace_path_back(node)
        path = []
        child_node = node
       
        until child_node.nil?
            path << child_node.value
            child_node = child_node.parent
        end
        # queue = [node]
        # until queue.empty?
        #     child_node = queue.shift
        #     queue << child_node.parent
        #     path << child_node.value
        # end

        path.reverse 
    end

end



#  knight_pos = [2, 2]

#  valid_moves = [0,1] [1,0], [3,0], [0,3] [1,4] [4,1] [3,4] [4,3]

#  2 1 -1 -2

# start_pos = [4,3]

#              Valid moves only if pos < [7,7] && pos >[0,0]
#  [2, 1]     [6, 4]
#  (1, -2)
#  [-2, 1]
#  [-1, 2]
#  [1, 2]
#  [2, -1]     [5, 5]
#  [-1, -2]   [3, 1]
#  [-2, -1]   [1, 2]