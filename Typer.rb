class Typer
hash = {:is_number? => Numeric, :is_string":String, :is_array?=> Array, is_time?: Time, is_regexp?: Regexp, is_boolean?: TrueClass, is_exception?: Exception , is_nill?: NilClass}
hash.each do |key,value| 
    def key obj
      obj.is_a? value
    end
  end
end

define_method