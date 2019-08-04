function countingValleys(n, s) {
  let h = 0;
  let count = 0;
  
  for(var i = 0; i < n; i++) {
    if(s.charAt(i) === "D" && h == 0) {
      count++;
      h--;
    } else if (s.charAt(i) === "D" && h !== 0) {
      h--;
    } else if (s.charAt(i) === "U") {
      h++;
    }
  }
  return count;
}
