/*
    Using Constructor.
*/

class EmployeeConstructor {
    id: number;
    name: string;
    department: string;
    designation: string;
    
    constructor(id, name, department, designation) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.designation = designation;
    }

    display() {
        var strDisplay = `Given Data is ID: ${this.id}, name: ${this.name}, Dept: ${this.department}, Designation: ${this.designation}`;
        console.log(strDisplay);
    }
}

var empObject1 = new EmployeeConstructor(10, 'Arun', 'IT', 'Front End Developer');
empObject1.display();
