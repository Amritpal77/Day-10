var emp=[[],[]]
emp[0][0]=23
emp[0][1]=22
emp[1][0]=34
emp[1][1]=45

var i, j
console.log("Elements are:----")

for(i=0;i<emp.length;i++)
{
    for(j=0;j<emp[i].length;j++)
    {
        process.stdout.write('\t'+emp[i][j])  // , only works in console.log-- in 
        //process + is used to concatenate
        //console.log("\t",emp[i][j])
    }
    console.log()
}