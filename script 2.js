// client side sripting language: different from a programming language, 
// exist on it own
// exe depend on the compile 
// good for animation and make pages more dimic, connect with servers.
//coding, dynamic, servers
// this is external jv script
// best practice is to have js as an external for separation of conserns
// the browser has time to loads content faster/ cash and 
function searchEventHandler()

{
    alert("u clicked the button");
}

//data type inference
//js is a weakly type  lang
var i;//datatype: undefined; value:undefined
i=10; //datatype: num,ber; value :10
i=3.14; //number;3.14
i="hello" // string; hello
i="a"//string
i=true// boolean
i=null;//null;

//data declariation hoisiting
j=20;
console.log("the value of j is"+j); 
var j;// declarition are pushed to the top of their scope

console.log("the value of k is "+k); //undefined
var k=1000; // var k; k=1000

//data taype
//case sensitive

var today=new Date(); //inbuild class or wrapper class; current data and time
console.log(today);

var d1=new Date(1000);
//100 ms since 1st jan 1970
// epoch date -1st jan 1970

var d2=new Date("03/04/2020");
console.log("d2 : "+d2);

var d3=new Date(1978,1,8);
console.log("sheffali's bday" +d3);
d3=new Date(2000,5); //23 jun 2000 16:00:00
d3=new Date(2000,5,23,16,45);//23 jun 2000 16:45:00
d3=new Date(2000,5,23,16,45,32);//23 jun 2000 16:45:32
d3=new Date(2000,5,23,16,45,32,36);//23 jun 2000 16:45:32
d3=new Date(2000,5,23,16,45,32,36,34);//23 jun 2000 16:45:32 26ms
console.log("d3 " +d3.toLocaleDateString())
var myFormat=d3.getDate()+"/"+d3.getMonth()+"/"+d3.getFullYear();
console.log(myFormat);

d3=new Date(200,1,45);// mar 16 2000

//arrays
//set of values sotred under a single name; subscript
// elements can be of the same datatype or different datatype

var arr1=[10,20,30,40,50];
console.log("length of the array" +arr1.length);
console.log("first element"+ arr1[0]);
arr1[3]=1000;
console.log("arra values" +arr1);

arr1=[10,"sara", 12000];

arr1.push("hello");

//puch and pop -- last element
var newLength=arr1.push("hello"); //add element
arr1.pop();//hello remove last elent 

//shift and unshift --fitst element 
arr1.unshift("good morning"); //arr1:["good morning",10, "sara", 1200; new array length
arr1.shift();// "good morning"

arr1=[10,20,30,40,50,60,70,80,90,100];
//splice method
arr1.splice(2,4);//will delete [10,20,70,80,90,100]; return [30,40,50,60]
//arr1.splice(pro,deleteCount,insert1, insert2, insert3...)

arr1=[10,20,30,40,50,60,70,80,90,100];
arr1.splice(2,0,35,38);;
console.log(arr1); //[10,20,30,35,38,40,50,60,70,80,100];

arr1=[10,20,30,40,50,60,70,80,90,100];
arr1.splice(2,0,35,38);;
console.log(arr1); //[10,20,35,38,30,40,50,60,70,80,90,100]

//objects
//data about a particular entity along with some functions

var empl={
    "empId": 101,
    "empName": "sara",
    "salary": 6789
}
console.log("employee details",empl);
console.log("Employee Id" +empl.empId);
empl.empName="george";
empl["salary"]=1234;
empl.depId="ID"; //ADDING A NEW FIELD TO EMPL
console.log("Employee details", empl);

var s1=10+10;//20
s1="10"+10;//"1010"
s1=10+"10";//"1010"
s1=10+"10"+10;//"101010" BODMAS; ASSOCIATIVITY Left to rigth 
s1=10+10+"10";//2010
s1=10+10+"10"+10+10;//"20101010"
s1=10+true;//11
s1="hello"+true;//hellotrue