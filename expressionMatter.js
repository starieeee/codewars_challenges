function expressionMatter(a, b, c) {
  // highest achievable result
  return Math.max(
    a * b * c,
    a + b + c,
    a * (b + c),
    a + b * c,
    (a + b) * c
  )
}
console.log(expressionMatter(1, 2, 3));