export const importImage = (path: string) => {
  return require(`../assets/${path}`).default;
};
const user = importImage('user.webp');
const qr = importImage('qr.png');

export const images = {
  user,
  qr,
};
