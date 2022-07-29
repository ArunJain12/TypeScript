/*
    Using Classes And Objects.
*/
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        var info = "Given data is ID: ".concat(this.id, ", NAME: ").concat(this.name, ", DEPARTMENT: ").concat(this.department, ", \n            DESIGNATION: ").concat(this.designation);
        console.log(info);
    };
    return Employee;
}());
var empObj = new Employee();
empObj.id = 10;
empObj.name = 'Arun';
empObj.department = 'IT';
empObj.designation = 'Front End Developer';
empObj.display();
