

let arr = [1,4,7,3,2];
function merge(arr,left,right,mid){
  let arr1 = [];
  let arr2 = [];
  for(let i = left ; i <=mid;i++)
    {
      arr1.push(arr[i])
    }

  for(let i = mid+1;i<=right;i++)
    {
      arr2.push(arr[i])
    }

  let current = left;
  let i = 0 ; 
  let j = 0;
  while(i<arr1.length&&j<arr2.length){
    if(arr1[i]<=arr2[j]){
      arr[current] = arr1[i]
    }else{
      arr[current] = arr2[j];
      j++
    }
    current++
  }

  while(i<arr1.length){
    arr[current] = arr2[i];
    i++
    current++
  }
  while(j>arr2.length)
    {
      arr[current] = arr2[j];
      j++;
      current++
    }
}
function mergeSort(arr,left,right)
  {
    if(left==right)
    {
      return
    }
    let mid = Math.floor((left+right)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    merge(arr,left,right,mid)
  }



 let z = mergeSort(arr,0,arr.length-1)
console.log(arr)