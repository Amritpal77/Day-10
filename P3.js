/*
2D array:--
Array inside an array is called 2D array.

*/

var emp=[[123,234,34,53],[678,2345],[354,987,098,345]]
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