  def my_all arr, &block
    return true if arr.empty?
    arr.each do |element|
      return false unless block.call(element)
    end
    true
  end


my_all [1,2,3,4] {|x| x < 5}

def none arr, &block
  return false   if arr.empty?
  arr.each do |element|
    return true if block.call(element)
  end
false
end

def include? array, item
  array.each do |element|
    return true if element == item
  end
false
end

include? [1,2,3,4,5], 5