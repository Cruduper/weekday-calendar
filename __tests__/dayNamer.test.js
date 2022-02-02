import dayNamer from '../src/js/dayNamer.js';

describe('dayNamer', () => {

  test('should return a day of the week index number', () =>{
    let newDate = dayNamer(2022, 1, 2);
    expect(newDate.getDate()).toEqual(2);
  });
});