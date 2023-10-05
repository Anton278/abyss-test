function* generator() {
  for (let i = 0; true; i++) {
    yield i;
  }
}

const generateNum = generator();

export { generateNum };
