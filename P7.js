/*
JSON:-----JavaScript Object Notation
Databases{
Google fire base
[mongo DB]
[Dynmo DB]
}
1. Json can be the combination of array
var z=[{Name: 'Pankaj},{Name: 'Rohan'}]
          |      |
          Key    Value
var s={Name:[1,2,3], Roll:[12,13]}
2. Without combination of an array
{Name:'--', Roll:45}
3. Without Key 
{12,2,3,4,5}
*/
var emp={Name:'Pankaj', Roll:12 }
//console.log("My name is",emp['Name'])
//console.log("My name is",emp.Name)

console.log("Elements are:----")
for(var z in emp)
{
    console.log(z+":-"+emp[z])
}


