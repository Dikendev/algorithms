function reverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
  }
}

const array = [50, 60, 70, 80, 90]
const newarr = reverse(array)
console.log(newarr)