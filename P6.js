var chd=require('readline-sync')
var a=[1,2]
var b=[3,4]
var c=[12,23]
//var emp=[a,b,c]
var emp=[]
emp.push(a)
emp.push(b)
emp.push(c)
console.log("Elements are:----")
for(i=0;i<emp.length;i++)
{
    for(j=0;j<emp[i].length;j++)
    {
        process.stdout.write('\t'+emp[i][j])  
    }
    console.log()
}