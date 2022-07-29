/*
    Using Inheritance.
*/

class Employee1 {
    id: number;
    name: string;
    salaryToBePaid: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        var strData = `ID: ${this.id} Name: ${this.name} Salary: ${this.salaryToBePaid}`;
        console.log(strData);
    }
}

class RegularEmployee extends Employee1 {
    numberOfDaysWorked: number;
    salaryPerMonth: number;
    
    constructor(id: number, name: string) {
        super(id, name);
    }

    calculateSalary() {
        this.salaryToBePaid = this.numberOfDaysWorked * this.salaryPerMonth / 30;
    }
}

var regEmpObj = new RegularEmployee(102, "Arun");
regEmpObj.salaryPerMonth = 50000;
regEmpObj.numberOfDaysWorked = 20;
regEmpObj.calculateSalary();
regEmpObj.display();