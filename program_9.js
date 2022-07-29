/*
    Generics In Typescript.
*/
var Generics = /** @class */ (function () {
    function Generics() {
    }
    Generics.prototype.assign = function (data) {
        this.data = data;
    };
    Generics.prototype.display = function () {
        console.log(this.data);
    };
    return Generics;
}());
var genericObj1 = new Generics();
genericObj1.assign(20);
genericObj1.display();
var genericObj2 = new Generics();
genericObj2.assign("arun");
genericObj2.display();
