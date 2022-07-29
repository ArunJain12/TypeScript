/*
    Using Constructor.
*/
var EmployeeConstructor = /** @class */ (function () {
    function EmployeeConstructor(id, name, department, designation) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.designation = designation;
    }
    EmployeeConstructor.prototype.display = function () {
        var info = "Given data is ID: ".concat(this.id, ", NAME: ").concat(this.name, ", DEPARTMENT: ").concat(this.department, ", \n            DESIGNATION: ").concat(this.designation);
        console.log(info);
    };
    return EmployeeConstructor;
}());
var empObject1 = new EmployeeConstructor(10, 'Arun', 'IT', 'Front End Developer');
empObject1.display();
