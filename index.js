// Your code here
class Polygon{
    constructor(arr){
        this.sides = arr
    }
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((e,m) => m+= e)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.countSides !== 3) return false;
        else{
            return ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[1] + this.sides[2] > this.sides[0]))
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides !== 4) return false;
        else{
            return ((this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3]))
        }
    }

    get area(){
        return this.sides[0]* this.sides[0]
    }
}