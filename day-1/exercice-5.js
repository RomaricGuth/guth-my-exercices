export const my_size_alpha = (str) => {
  if (typeof str !== 'string') {
    return 0;
  }

  let size = 0;
  while (str[size] !== undefined) {
    size++;
  }
  return size;
}

console.log(my_size_alpha('6chars'));
