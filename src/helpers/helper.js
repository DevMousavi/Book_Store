const sumItem = (item) => {
  const itemsCount = item.reduce((acc, curr) => acc + curr.numbers, 0);
  item.forEach((i) => {
    if (i.price) {
      i.final_price = i.price;
    }
  });
  const total = item
    .reduce((acc, curr) => acc + curr.final_price * curr.numbers, 0)
    .toFixed(2);
  return { itemsCount, total };
};

export { sumItem };
