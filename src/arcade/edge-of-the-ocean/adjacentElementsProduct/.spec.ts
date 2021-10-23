import { byReduce, byForEach } from './index';
import * as data from './data';

describe('To Get Adjacent Element Product Higher result', () => {
  describe('When is resolved by Array Reduce method', () => {
    it('Should return 21 when input is: [3, 6, -2, -5, 7, 3]', () => {
      const { input, output } = data.result21;
      const result = byReduce(input);
      return expect(result).toBe(output);
    });
  });

  describe('When is resolved by Array For Each method', () => {
    it('Should return 21 when input is: [3, 6, -2, -5, 7, 3]', () => {
      const { input, output } = data.result21;
      const result = byForEach(input);
      return expect(result).toBe(output);
    });
  });
});
