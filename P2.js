/*
2D array:--
Array inside an array is called 2D array.

*/

var emp=[[123,234],[678,2345]]
var i, j
console.log("Elements are:----")

for(i=0;i<2;i++)
{
    for(j=0;j<2;j++)
    {
        process.stdout.write('\t'+emp[i][j])  // , only works in console.log-- in 
        //process + is used to concatenate
    }
    console.log()
}