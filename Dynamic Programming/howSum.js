// Not part of Blind 75 problems

const howSum = (arr, target) => {
   if(target === 0) return []
   if(target < 0) return null

   for(let num of arr){
       let rem = target - num
       let result = howSum(arr, rem)
       if(result !== null){
           return [ ...result, num]
       }
   }

   return null
}

console.log(howSum([2, 3], 7))
console.log(howSum([5, 3, 4, 7], 7))