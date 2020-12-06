const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function randomId(length?: number): string {
  let res = "";
  let sum = 0;
  length = length ? length : 4;
  while (length) {
    const random = Math.random();
    res += characters.charAt(random * characters.length);
    sum += characters.charAt(random * characters.length).charCodeAt(0);
    length--;
  }
  res += (sum % 97).toString();
  return res;
}

export { randomId };
