/*
    Interface in Typescript.
*/

interface IMaths {
    sum(x: number, y: number);
    multiply(x: number, y: number);
}

class InterfaceImpl implements IMaths {
    sum(x: number, y: number) {
        console.log(x + y);
        return x + y
    }
    multiply(x: number, y: number) {
        console.log(x + y);
        return x + y;
    }
}

var intObj = new InterfaceImpl();
intObj.sum(90, 20);
intObj.multiply(20, 45);
