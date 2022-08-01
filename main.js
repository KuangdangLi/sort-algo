let min = numbers => {
    if(numbers.length>2){
      return min([numbers[0],min(numbers.slice(1))])
  }else {
    return numbers[0] < numbers[1] ? numbers[0] : numbers[1]
  }
  }
  //选择排序
let sort = numbers => {
  if(numbers.length>2){
  let minNum = min(numbers)
  let index = numbers.indexOf(minNum)
  numbers.splice(index,1)
  return [minNum].concat(sort(numbers))
  } else{
   return numbers[0] < numbers[1] ? numbers : numbers.reverse()
  }
}
//快速排序
let quickSort = numbers =>{
  if(numbers.length <=1){return numbers}
  let pivotIndex = Math.floor(numbers.length / 2)
  let pivot = numbers.splice(pivotIndex,1)[0]
  let left = [];
  let right = [];
  for(let i= 0;i< numbers.length;i++){
    if(numbers[i]<pivot){
      left.push(numbers[i])
    }else{
      right.push(numbers[i])
    }
  }
    return quickSort(left).concat([pivot],quickSort(right))
}

//归并排序
let mergeSort= numbers => {
  if(numbers.length === 1 ){return numbers}
  let left = numbers.slice(0,Math.floor(numbers.length/2))
  let right = numbers.slice(Math.floor(numbers.length/2))
  return merge(mergeSort(left),mergeSort(right))
}
let merge = (a,b)=>{
  if(a.length === 0 ) return b
  if(b.length === 0 ) return a
  return a[0] > b[0] ? [b[0]].concat(merge(a,b.slice(1))) :[a[0]].concat(merge(a.slice(1),b))
}
//计数排序
let countSort = numbers => {
  let hashTable = {}
  let max = 0
  let result = []
  for(let i=0;i<numbers.length;i++){
    if(!(numbers[i] in hashTable)){
      hashTable[numbers[i]] = 1
    }else{
      hashTable[numbers[i]] += 1
    }
    if(numbers[i]>max){max = numbers[i]}
  }
  for (let j=0;j<=max;j++){
    if(j in hashTable){
      for(let k = 0;k< hashTable[j];j++){
        result.push(j)
      }
    }
  }
  return result
}
