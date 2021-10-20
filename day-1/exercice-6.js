export const my_length_array = (arr) => {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let size = 0;
  while (arr[size] !== undefined) {
    size++;
  }
  return size;
}

console.log(my_length_array([1, 2, 'a']));
