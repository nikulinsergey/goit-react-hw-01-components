const colorRandom = () => {
  const red = Math.round(Math.random() * (255 - 20) + 20);
  const green = Math.round(Math.random() * (255 - 20) + 20);
  const blue = Math.round(Math.random() * (255 - 20) + 20);
  return `rgb(${red},${green},${blue})`;
};

export default colorRandom;
