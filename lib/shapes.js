class Shapes {
    constructor(sName, sColor) {
        this.sName = sName;
        this.sColor = sColor;
    }
    createLogo(myShape) {
        myShape.render();
    }
    render() {
        throw new Error("Enter a Color");
    }
}

module.exports = Shapes;