const inquirer = require('inquirer');
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');
const { writeFile } = require('fs/promises');
const { join } = require('path');

class Input {
    sName = '';
    sColor = '';
    tColor = '';
    myShape = '';
    // Kicks off the inquirer questions
    runShape() {
        this.shapeName();
    }
    // Ask for text to be put into shape
    shapeName() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your 3 letter text',
            },
        ])
        .then(({ name }) => {
            if (name.length <= 3) {
                this.sName = `${name}`; 
                return this.textColor();
            }
            else {
                throw new Error("Please enter 3 letters")
            } 
        })
    }
    // Ask for text color
    textColor() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'txtColor',
                message: 'Please enter a Text Color',
            },
          ])
          .then(({ txtColor }) => {
            this.tColor = `${txtColor}`;
            return this.setColor();
          })
    }
    // Ask for color of shape
    setColor() {
      return inquirer.prompt([
        {
            type: 'input',
            name: 'color',
            message: 'Please enter a Shape Color',
        },
      ])
      .then(({ color }) => {
        this.sColor = `${color}`;
        return this.setShape();
      })
    }
    // Ask for shape of shape
    setShape() {
        return inquirer.prompt([
            {
                type: 'list',
                choices: ['triangle', 'circle', 'square'],
                name: 'shape',
                message: 'Enter a Shape',
            },
        ])
        .then(({ shape }) => {
            if (shape == "triangle") {
                this.myShape = new Triangle(this.sName, this.sColor, this.tColor);
            }
            else if (shape == 'circle') {
                this.myShape = new Circle(this.sName, this.sColor, this.tColor);
            }
            else if (shape == 'square') {
                this.myShape = new Square(this.sName, this.sColor, this.tColor);
            }
            else {
                throw new Error("Shape malfunction")
            }
            return writeFile(
                join(__dirname, '..', 'examples', 'logo.svg'),
                this.myShape.render()
            );
        })
        .then(() => console.log('Generated logo.svg'))
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong');
        });
    }
}

module.exports = Input;