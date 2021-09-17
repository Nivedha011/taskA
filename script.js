//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var  request= new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET','https://restcountries.eu/rest/v2/all',true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
/*for(i in data)
{
    console.log("Country:"+data[i].name + " "+ "Capital:"+data[i].capital + " " +"Flag:"+ data[i].flag);
}*/
var pop=data.reduce((acc,ele)=>{
    return acc+ele.population
},0)
console.log(pop)

}
