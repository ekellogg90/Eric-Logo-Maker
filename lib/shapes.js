const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
//const Triangle = require('./triangle');
class Shapes {
    constructor(sName, sColor) {
        this.sName = sName;
        this.sColor = sColor;
    }


    createLogo(myShape) {
        myShape.render();
        // let chosenShape = '';
        // switch (shape) {
        //     case 'Triangle':
        //         chosenShape = `<svg version="1.1"
        //         width="300" height="200"
        //         xmlns="http://www.w3.org/2000/svg">
        //         <polygon points="150, 18 244, 182 56, 182" fill=${this.color} />
        //         <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
        //         break;
        //     case 'Circle':
        //         chosenShape = `<svg version="1.1"
        //         width="300" height="200"
        //         xmlns="http://www.w3.org/2000/svg">
        //         <circle cx="150" cy="100" r="80" fill="green" />
        //         <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
        //         break;
        //     case 'Square':
        //         chosenShape = `<svg version="1.1"
        //         width="300" height="200"
        //         xmlns="http://www.w3.org/2000/svg">
        //         <rect width="100%" height="100%" fill="red" />
        //         <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
        //         break;
        // }
    }

    render() {
        throw new Error("Enter a Color");
    }
}

module.exports = Shapes;