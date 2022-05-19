type User = {
  id: number;
  name: string;
  age: number;
  salary?: number;
};
type Teacher = {
  id: number;
  name: string;
  sub: string;
  name_of_students: string;
};
console.log(4600)
const userArr: User[] = [
  { id: 1, age: 12, name: "Affan", salary: 40000 },
  { id: 2, age: 12, name: "Prathmesh", salary: 41000 },
  { id: 3, age: 12, name: "Naved", salary: 42000 },
  { id: 4, age: 12, name: "Mohit", salary: 43000 },
  { id: 5, age: 12, name: "Huzaifa", salary: 44000 },
  { id: 6, age: 12, name: "Bushra", salary: 45000 },
  { id: 7, age: 12, name: "Arshad", salary: 4600 },
  { id: 8, age: 12, name: "Saiyam", salary: 47000 },
  { id: 9, age: 12, name: "Haroon", salary: 40000 },
  { id: 10, age: 12, name: "Shakir", salary: 40000 },
];




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
      i++
    }else{
      arr[current] = arr2[j];
      j++
    }
    current++
  }

  while(i<arr1.length){
    arr[current] = arr1[i];
    i++
    current++
  }
  while(j<arr2.length)
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

