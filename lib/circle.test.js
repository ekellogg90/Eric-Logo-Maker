const Circle = require('./circle');
describe('Circle', () => {
    test('should render a circle', () => {
        const shape = new Circle("abc", "blue", "white");
        expectedHtml = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text></svg>`;
        expect(shape.render()).toEqual(expectedHtml);
    })
})