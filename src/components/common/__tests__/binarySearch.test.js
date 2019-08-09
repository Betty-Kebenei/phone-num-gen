import binarySearch from '../binarySearch';

describe('binarySearch', () => {
  const arr = [
    "0520824292",
    "0324483933",
    "0219081561",
    "0305923108",
    "0240259478",
    "0421493267",
    "0607632178",
    "0882948791",
    "0010663129",
    "0246821435"].sort();
  test('return true if number exists', () => {
    expect(binarySearch(arr, '0520824292')).toBe(true);
  });

  test('return false if number does not exists', () => {
    expect(binarySearch(arr, '0520824291')).toEqual(false);
  });
})

