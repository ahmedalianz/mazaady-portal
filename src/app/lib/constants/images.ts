export const importImage = (path: string) => {
  return require(`../assets/${path}`).default;
};
const user = importImage('user.webp');
const qr = importImage('qr.png');
const product1 = importImage('products/product1.jpeg');
const product2 = importImage('products/product2.jpeg');
const product3 = importImage('products/product3.jpeg');
const product4 = importImage('products/product4.jpeg');
const product5 = importImage('products/product5.jpeg');

export const images = {
  user,
  qr,
  product1,
  product2,
  product3,
  product4,
  product5,
};
