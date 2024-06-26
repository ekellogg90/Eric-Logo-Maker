const Square = require('./square');
describe('Square', () => {
    test('should render a square', () => {
        const shape = new Square("abc", "blue", "white");
        expectedHtml = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text></svg>`;
        expect(shape.render()).toEqual(expectedHtml);
    })
})