export function CapitalizeFirstLetter(str) {
  let arr = str.split(" ");
  let newArr = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return newArr.join(" ");
}
