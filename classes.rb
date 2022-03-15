
# everything in ruby is an object (derived from a class)

# hash
# {x:1, y:1}

# ruby defined classes
# arrays, hashes, ints, Strings etc...

# to define a class
# class Person
# end

# # declare a person
# sally = {name:'Sally', age:21}

# # log
# puts "Sally is a #{sally.class}"


# creating blueprint
class Person 
  # getters/setters
  # attr_accessor - makes our instance variables readable and writable
  attr_accessor :name
  # attr_accessor - makes our instance variables readable 
  attr_reader :age

  #this method gets called when instance of person is created
  def initialize(name, age, password)
    @name = name
    @age = age
    @password = password
  end

  # instance method: called on instance of the classe
  def about
    "Hi I am #{name} and I am ${age} and my password is #{password.size}"
  end

  def breathIn
    puts "#{@name} breathing in"
  end

  def about_the_self
    # self is the instance of the class calling the method
    "Hi i am #{self.class} i am #{self.name}"
  end

  # class method (.self) to define class method
  # self here refers to the class
  def self.about
    "We are mammals and there are 8 billion of us and we live on Earth"
  end
end


  # making bob
  bob = Person.new('bob', 34, 1234) 
  # making tony
  tony =  Person.new('Tony', 22, 0000)

  # puts 'bob is a #{bob.class}'
  # puts 'bob is  #{bob.age}'
  # bob.name = 'BOB'
  # puts bob.about

  puts bob.about_the_self
  puts tony.about_the_self

  #called on class
  puts Person.about
  # called on instance of the class
  puts bob.about
  bob.breathIn
  tony.breathIn 




