import { filtro, ordenarAZ, ordenarZA } from '../src/data.js';


describe('filtro', () => {
  it('should be a function', () => {
    expect(typeof filtro).toBe('function');
  });
});

describe('ordenarAZ', () => {
  it('should be a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });
});

describe('ordenarZA', () => {
  it('should be a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });
});
