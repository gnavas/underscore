class Array

  def my_for_each 
    i = 0
    while  i<self.length do
      yield self[i]
      i += 1   
    end
    self
  end

end


[1,2,3].my_for_each do |x|
  x*2
end