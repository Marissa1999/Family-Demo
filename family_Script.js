/*
var father =
{
	name: "Father",
	age: 48
};


var mother =
{
	name: "Mother",
	age: 45
};


var child =
{
	name: "Child",
	age = 17
};






var mother = new Object();
mother.name = "Mother";
mother.age = 45;

var father = new Object();
father.name = "Father";
father.age = 48;

var child = new Object();
child.name = "Child";
child.age = 17;



console.log(father);
console.log(mother);
console.log(child);
*/








function Person(name, age)
{
	this.name = name;
	this.age = age;
	this.isHuman = true;
}




var mother = new Person("Mother", 45);
var father = new Person("Father", 48);
var child = new Person("Child", 17);
child.isHuman = false;


console.log(father);
console.log(mother);
console.log(child);








/*
for(prop in father)
{
   console.log(prop);
   console.log(object[prop]);
}


for(prop in mother)
{
   console.log(prop);
   console.log(object[prop]);
}


for(prop in child)
{
   console.log(prop);
   console.log(object[prop]);
}









father.toString = function()
{
   return this.name + " " + this.age;
}


console.log(father.toString());
console.log(father);



mother.toString = function()
{
   return this.name + " " + this.age;
}


console.log(mother.toString());
console.log(mother);



child.toString = function()
{
   return this.name + " " + this.age;
}


console.log(child.toString());
console.log(child);
*/