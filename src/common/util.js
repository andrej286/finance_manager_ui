export function formatNumber(number, suffix = '') {

  let numStr = number.toString();
  let result = '';

  for (let i = numStr.length - 1, count = 1; i >= 0; i--, count++) {
    result = numStr[i] + result;

    if (count % 3 === 0 && i !== 0) {
      result = "'" + result;
    }
  }

  result += " " + suffix;

  return result;
}