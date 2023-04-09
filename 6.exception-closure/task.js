function parseCount(meaning) {
    let parsen = Number.parseFloat(meaning);
    if (Number.isNaN(parsen)) {
        throw new Error("Невалидное значение");
    }
    return parsen;
}

function validateCount(meaning) {
    try {
        let parsen = parseCount(meaning);
        return parsen;
    } catch {
        throw new Error("И тут невалидное значение");
    }
}



// function validateCount(meaning) {
//     try {
//         let pars = Number.parseFloat(meaning);
//         let err;
// //        console.log(pars);
//         if (Number.isNaN(pars)) {
//             let err = new Error;
//             throw err; 
// //            console.log(err);
//         }
//         return pars;
//     } catch {
//         throw err("Невалидное значение");        
//     }
// }

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

function getTriangle(a, b, c) {
    try {
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
        // return new Triangle(a, b, c);//,   this.s = "Ошибка! Треугольник не существует",   this.p = "Ошибка! Треугольник не существует";
    }
}




// --- дальше лишнее --- для проверки ---

// const triangle1 = new Triangle(2,5,5);
// const triangle2 = new Triangle(6,10,15);
//let triangle3 = [getTriangle(10, 11, 12)];

let qwq = getTriangle(2,5,5);