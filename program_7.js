/*
    Using Inheritance.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee3 = /** @class */ (function () {
    function Employee3(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee3.prototype.display = function () {
        var info = "ID: ".concat(this.id, " Name: ").concat(this.name, " Salary: ").concat(this.salaryToBePaid);
        console.log(info);
    };
    return Employee3;
}());
var RegularEmployee = /** @class */ (function (_super) {
    __extends(RegularEmployee, _super);
    function RegularEmployee(id, name) {
        return _super.call(this, id, name) || this;
    }
    RegularEmployee.prototype.calculateSalary = function () {
        this.salaryToBePaid = this.numberOfDaysWorked * this.salaryPerMonth / 30;
    };
    return RegularEmployee;
}(Employee3));
var regEmpObj = new RegularEmployee(102, "Arun");
regEmpObj.salaryPerMonth = 50000;
regEmpObj.numberOfDaysWorked = 20;
regEmpObj.calculateSalary();
regEmpObj.display();
