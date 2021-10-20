export const my_is_posi_neg = (nbr) => {
  if (typeof nbr !== 'number' || nbr > 0) {
    return 'POSITIF';
  }

  if (nbr < 0) {
    return 'NEGATIF'
  }

  return 'NEUTRAL';
}

console.log(my_is_posi_neg(-12.5));
console.log(my_is_posi_neg());
console.log(my_is_posi_neg(0));
console.log(my_is_posi_neg(5));
