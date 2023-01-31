import {convertNumber} from "../src/js/ConvertPhoneNumber";

test('test 1', () => {
    expect(convertNumber('8 (927) 000-00-00')).toBe('+79270000000');
})

test('test 2', () => {
    expect(convertNumber('+7 960 000 00 00')).toBe('+79600000000');
})

test('test 3', () => {
    expect(convertNumber('+86 000 000 0000')).toBe('+860000000000');
})

test('test 4', () => {
    expect(() =>{convertNumber('9 (927) 000-00-00')}).toThrow();
})