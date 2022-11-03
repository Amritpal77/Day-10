// User input for 2D array

const chd=require("readline-sync")
var emp=[]
var i, j, r, c
r=chd.questionInt("Decide row")
c=chd.questionInt("Decide column")
for(i=0; i<r; i++)
{
    emp[i]=new Array()

}

console.log("Now enter array elements")
for(i=0;i<r;i++)
{
    for(j=0;j<c;j++)
    {
        emp[i][j]=chd.questionInt()
       
    }
    
}
console.log("Elements are:----")
for(i=0;i<emp.length;i++)
{
    for(j=0;j<emp[i].length;j++)
    {
        process.stdout.write('\t'+emp[i][j])  
    }
    console.log()
}