var numbers=[1,2,3,4,5,6,7,8,9,10,12,13,16]
 var sum=0
function sumOfEvenNumbers(numbers){
 for(var I=0; I<numbers.length; I++)
    if(numbers[i]%2==0)
    sum+=numbers[i]
 return sum
}
console.log(sumOfEvenNumbers(numbers))

Q-No-2
let str="welcome here"
var count=0
function cntwovel(str){
for(var I=0; I<str.length; I++)
if(str[I]=='a' || str[I]=='e' str[I]=='I' ||str[i]
||str[I]=='o' || str[I]=='u')
count++

return count
}
console.log(cntwovel(str))


Q-No-3
var strarr=["Jaffar", "Rahib", " Sulaiman", 
 "Aziz", " Bilal"]
 let l=strarr.length

 function longeststr(strarr){
  var longest=strarr[0]

  for(var I=0; I<strarr.l; I++){
     if(strarr[I]>longest){
   longest=strarr[I]
  }
}
return longest
}
console.log(longeststr(strarr)

 

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
  for(var I=0; I<are.length; I++){
  sum+=are[i]
}
 avg=sum/(are.length-1)

return avg
}
console.log(average(are))

Q-No-6
 var patients=[{name:,"arshad", age:40, tmp:37
},{name:"ayub", age:29, tmp: 36},{
 name:"asghar", age:50, tmp:35}]
  function getkeys(patients){
    return (Object.keys(patients))
}
  for(var I=0; I<patients.length: I++)
{
  console.log(get keys(patients[i]))
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
  for(var I=0; I<prodNum.length; I++){
 x*=prodNum[I]
}
return x
}
console.log(product(prodNum))







 
