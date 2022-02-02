import dayNamer from '../src/js/dayNamer.js';

describe('dayNamer', () => {

  test('should return a day of the week', () =>{
    expect(dayNamer(2022, 3, 2)).toEqual(expect.any(String));
  });

  test('should return weekday name for a given date', () =>{
    let output = dayNamer(2022, 3, 2);
    expect(output).toEqual("Saturday");
  });

  
});