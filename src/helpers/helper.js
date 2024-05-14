const sumItem = (item) => {
  const itemsCount = item.reduce((acc, curr) => acc + curr, 0);
  const total = item
    .reduce((acc, curr) => acc + curr.price * curr.numbers, 0)
    .toFixed(2);

    return {itemsCount , total}
};
