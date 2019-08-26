const mockWindowProperty = (property: any, value: any) => {
  const { [property]: originalProperty } = window;

  delete window[property];

  beforeAll(() => {
    Object.defineProperty(window, property, {
      configurable: true,
      value,
      writable: true,
    });
  });

  afterAll(() => {
    window[property] = originalProperty;
  });
};

export default mockWindowProperty;
