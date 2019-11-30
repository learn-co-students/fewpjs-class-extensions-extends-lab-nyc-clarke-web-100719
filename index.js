// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(sum, side) {
            return sum + side
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return;
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))    
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return;
        return this.sides.every( (val, i, arr) => val === arr[0] )
    }

    get area() {
        return this.sides[0] ** 2
    }
}