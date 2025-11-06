
export const triangleArea = (base, height) => {
  const result = 0.5 * base * height;
  console.log(`Triangle area = ${result}`);
};

export const circleArea = (radius) => {
  const result = Math.PI * radius ** 2;
  console.log(`Circle area = ${result.toFixed(2)}`);
};

export const squareArea = (side) => {
  const result = side ** 2;
  console.log(`Square area = ${result}`);
};

export const rectangleArea = (length, width) => {
  const result = length * width;
  console.log(`Rectangle area = ${result}`);
};
