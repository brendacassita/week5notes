class Mammal 
  attr_accessor :hair_color, :age
  def initialize(hair_color, age)
   puts "Mammal init called"
   @hair_color = hair_color
   @age = age
  end

  def breath
   'Breathing in Mammal'
  end

 
  def speak
   # raise trows an erro
   raise "You must define this in subclass" 
  end
end

# Child is inheriting from Parent class
# <, Child extends parent
class Human < Mammal
   attr_accessor :occupation
   def initialize(occupation, age, hair_color)
       # super calls the method in the parent class
       super(hair_color, age)
       @occupation = occupation
   end

   # override a method
   def breath
     'Breathing in slowly'
   end

   def code
     'coding now'
   end

   def speak
     "hello"
   end

end

class Dog < Mammal
   def initialize(tail_length, age, hair_color)
       # super calls the method in the parent class
       super(hair_color, age)
       @tail_length = tail_length
   end

   def fetch
       'going to fetch'
   end
   
   def speak
       "ruff"
   end
end


bob = Human.new('kite flyer', 21,'brown')
fido = Dog.new('1 foot', 3,'black')
# puts bob.class
# puts bob.occupation
# puts bob.age
# puts bob.hair_color
puts bob.breath
puts fido.breath
puts fido.speak
puts bob.speak

