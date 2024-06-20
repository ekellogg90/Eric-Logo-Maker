const Triangle = require('./triangle');

describe('Triangle', () => {
    test('should render a triangle', () => {
        const shape = new Triangle("abc", "blue", "white");
        expectedHtml = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text></svg>`;
        expect(shape.render()).toEqual(expectedHtml);
    })
})