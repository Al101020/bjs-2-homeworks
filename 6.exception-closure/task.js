function parseCount(meaning) {
    let parsen = Number.parseFloat(meaning);
    if (Number.isNaN(parsen)) throw new Error("Невалидной значение");
    if (parsen === parsen) return parsen;
}

// - parseCount("ыфва")

function validateCount(meaning) {
    return parseCount(meaning);
}

// - validateCount("ыфва")

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || b + c < a || c + a < b) throw new Error("Треугольник с такими сторонами не существует");
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

function getTriangle(x, y, e) {
    try {
        return new Triangle(x, y, e);
    } catch {
        return new Triangle(x, y, e),   this.s = "Ошибка! Треугольник не существует",   this.p = "Ошибка! Треугольник не существует";
    }
}




// --- дальше лишнее --- для проверки ---

// const triangle1 = new Triangle(2,5,5);
// const triangle2 = new Triangle(6,10,15);

let triangle3 = [getTriangle(10, 11, 12)];
