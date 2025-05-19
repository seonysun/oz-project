const images = import.meta.glob('../assets/icons/*.{png,jpg,jpeg,svg}', {
  eager: true,
});

export default Object.fromEntries(
  Object.entries(images).map(([key, value]) => [
    key.replace('../assets/icons/', ''),
    value.default,
  ]),
);
