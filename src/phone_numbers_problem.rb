def createPhoneNumber numbers 
  area_code = numbers[0..2].join
  next_3 = numbers[3..5].join
  final_4 = numbers[6..-1].join
  return "(#{area_code}) #{next_3}-#{final_4}"
end