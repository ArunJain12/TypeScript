/*
    Interface in Typescript.
*/
var InterfaceImpl = /** @class */ (function () {
    function InterfaceImpl() {
    }
    InterfaceImpl.prototype.sum = function (x, y) {
        console.log(x + y);
        return x + y;
    };
    InterfaceImpl.prototype.multiply = function (x, y) {
        console.log(x * y);
        return x * y;
    };
    return InterfaceImpl;
}());
var intObj = new InterfaceImpl();
intObj.sum(90, 20);
intObj.multiply(20, 45);
