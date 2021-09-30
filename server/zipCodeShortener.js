module.exports = (zipCodes) => {
  const codes = [];
  const shortenedCodes = [];

  for (const code in zipCodes) {
    codes.push(code);
  }

  codes.sort((a, b) => a - b);

  let continuousCount = 0;
  for (let i = 1; i < codes.length; i++) {
    if (codes[i] - codes[i - 1] === 1) {
      continuousCount++;
      continue;
    }

    if (continuousCount === 0) {
      shortedCodes.push(codes[i - 1]);
      continue;
    }

    shortenedCodes.push(codes[i - 1 - continuousCount] + '-' + codes[i - 1])
    continuousCount = 0;
  }

  if (continuousCount === 0) {
    shortenedCodes.push(codes[codes.length - 1])
  } else {
    shortenedCodes.push(codes[codes.length - 1 - continuousCount + '-' + codes[codes.length - 1]]);
  };

  return shortenedCodes
}