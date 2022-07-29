function add(a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  
  const maxLen = Math.max(a.length, b.length);
  let carry = 0;
  let res = [];
  
  for (let i = 0; i < maxLen; i++) {
    const iVal = a.length > i ? +a[i] : 0;
    const jVal = b.length > i ? +b[i] : 0;
    let sum = iVal + jVal;
    if (carry !== 0) {
      sum = sum + carry;
    }
    if (sum >= 10) {
      res.push(sum % 10);
      carry = Math.floor(sum / 10);
    } else {
      res.push(sum);
      carry = 0;
    }
  }
  if (carry !== 0)
    res.push(carry);
  console.log(res);
  return res.reverse().join("");
}

add("1", "1");
add("1372", "69");
add("888", "222");