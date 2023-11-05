export function generateRandomFourDigits(): string {
  let result = Math.floor(1000 + Math.random() * 9000).toString();
  console.log(result)
  return result;
}
