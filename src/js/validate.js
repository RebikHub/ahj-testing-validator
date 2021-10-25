export default function luhnAlgorithm(cardNumber) {
  const toString = String(cardNumber).replace(/\D/g, '');
  let arrNum = 0;

  for (let i = 0; i < toString.length; i += 1) {
    let num = parseInt(toString[i], 10);
    if ((toString.length - i) % 2 === 0) {
      if (num * 2 > 9) {
        arrNum += (num * 2) - 9;
      } else {
        num *= 2;
        arrNum += num;
      }
    } else {
      arrNum += num;
    }
  }
  console.log(arrNum);
  return arrNum % 10 === 0;
}

// export function validateNumber(cardNumber) {
    
// }
