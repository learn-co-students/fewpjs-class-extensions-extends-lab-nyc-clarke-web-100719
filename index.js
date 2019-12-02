// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(function(total, side){
            return total + side;
        });
    }    
}

class Triangle extends Polygon {
    get isValid() {
       if ((this.countSides === 3) && (this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[1] + this.sides[2] > this.sides[0])) {
           return true
       } else {
           return false
       }
    }
}

class Square extends Polygon {
    get area() {
        return this.sides[0]**2;
    }

    get isValid() {
        if ((this.countSides === 4) && (this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3]) ) {
            return true
        } else {
            return false
        }
    }
}