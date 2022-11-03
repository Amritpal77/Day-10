//var emp=[{Name: "Pankaj", Roll: 12},{Name:"Pawan", Roll:13}]
var emp=[{Name: "Pankaj", Roll: 12},{Branch:"CSE"}]
console.log("Elements are:---")
for(var z in emp)
{
    for (var t in emp[z])
    {
        console.log(t+"-",emp[z][t])
    }
   // console.log(z+"->"+emp[z].Name+" & "+emp[z].Roll)

    //console.log(emp[z])
}