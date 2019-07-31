const binarySearch = (arr, key) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let numberExists = false;

  while(startIndex <= endIndex) {
    const mid = Math.floor((startIndex + endIndex) / 2);

    if(key === arr[mid]) {
      numberExists = true
      break;
    }
    else if(key > arr[mid]) {
      startIndex = mid + 1;
    }
    else if(key < arr[mid])  {
      endIndex = mid - 1;
    }
  }

  return numberExists;
}

export default binarySearch;
