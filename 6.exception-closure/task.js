function parseCount(meaning) {
    if (Number.isNaN(Number.parseFloat(meaning))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(meaning);
}

function validateCount(meaning) {
    try {
        return parseCount(meaning);
    } catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || b + c < a || c + a < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.p = a + b + c;
        this.s = +(Math.sqrt(this.p / 2 * (this.p / 2 - a) * (this.p / 2 - b) * (this.p / 2 - c)) ).toFixed(3);
    }

    get perimeter() {
        return this.p;
    }

    get area() {
        return this.s;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        class Triangle {
            constructor(a, b, c) {
                this.p = "Ошибка! Треугольник не существует";
                this.s = "Ошибка! Треугольник не существует";
            }
        
            get perimeter() {
                return this.p;
            }
        
            get area() {
                return this.s;
            }
        }
        return new Triangle(a, b, c);
    }
}
