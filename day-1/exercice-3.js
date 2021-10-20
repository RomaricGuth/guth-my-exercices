export const my_alpha_number = (nbr) => {
  if (typeof nbr !== 'number') {
    return '';
  }

  return `${nbr}`;
}

console.log(my_alpha_number(-12.5))
