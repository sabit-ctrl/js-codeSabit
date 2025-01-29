let score=99
let newScore="123"

console.log(typeof score)
console.log(typeof newScore)

let scoreInNumber=Number(score)
let newScoreInNumber=Number(score)

console.log(typeof scoreInNumber)
console.log(typeof newScoreInNumber)

/* When Javascript Fails to give correct ans  */

let run = "123abc"

let runInNumber = Number(run)

console.log(runInNumber )//Output:NaN
console.log(typeof runInNumber )//Output:number

let some = null

let someInNumber = Number(some) 

console.log(typeof some)//that shows object. what we discussed before 
console.log(typeof someInNumber)//that shows number but it is undefined to number
console.log(someInNumber)//that shows 0 what is not

//"33"=>33
//"33abc"=>NaN
//true => 1, //false => 0
