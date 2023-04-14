var numbers=[1,2,3,4,5,6,7,8,9,10,12,13,16]
 var sum=0
function sumOfEvenNumbers(numbers){
 for(var i=0; i<numbers.length; i++)
    if(numbers[i]%2==0)
    sum+=numbers[i]
 return sum
}
console.log(sumOfEvenNumbers(numbers))

Q-No-2
let str="welcome here"
var count=0
function cntwovel(str){
for(var i=0; i<str.length; i++)
if(str[i]=='a' || str[i]=='e' str[i]=='I' ||str[i]
||str[i]=='o' || str[i]=='u')
count++

return count
}
console.log(cntwovel(str))


Q-No-3
var strarr=["Jaffar", "Rahat Aziz Khan", " Sulaiman", 
 "Aziz", " Bilal"]
 

 function longeststr(strarr){
  var longest=strarr[0].length
  let s=strarr[i]
  for(var i=0; i<strarr.length; i++){
     if(strarr[i].length>longest){
   longest=strarr[i].length
  s=strarr[i]
  }
}
return {longest, s}
}
console.log(longeststr(strarr))

 

  Q-No-5
 var student={
 name: "Amjad",
 age: 15,
 class:" 9th"
}
 function getkey(student){
  console.log((Object.keys(student))
 }

 console.log(getkey(student))






Q-No-4
var are=[10,14,24,30,28,46,50,54,60,70]

  var sum=0
var avg=0
 function average(are){
  for(var i=0; i<are.length; i++){
  sum+=are[i]
}
 avg=sum/(are.length)

return avg
}
console.log(average(are))

Q-No-6
 var patients=[{name:"arshad", age:40, tmp:37
},{name:"ayub", age:29, tmp: 36},{
 name:"asghar", age:50, tmp:35}]
  function getkeys(patients){
    return (Object.keys(patients))
}
  for(var i=0; i<patients.length; i++)
{
  console.log(getkeys(patients[i]))
}






Q-No-7
 var myarr=[{"apple", "banana", "melon",
},{"apple"," tomato","potato"},{"onion","lemon","
 "strawberry"}
]
 function getunique(myarr){
  for(var i=0; I<myarr.length; I++){
  if(myarr[I]!=myarr[I+1])
console.log(myarr[I])
  }
}

 console.log(get unique(myarr))


Q- No-8

  var prodNum=[2,3,5,7,8,9,12]
var x=1


 function product(producNum){
  for(var i=0; i<prodNum.length; i++){
 x*=prodNum[i]
}
return x
}
console.log(product(prodNum))







 
