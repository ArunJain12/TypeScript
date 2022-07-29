/*
    Using Classes And Objects.
*/

class Employee {
    id: number;
    name: string;
    department: string;
    designation: string;

    display() {
        var strDisplay = `Given Data is ID: ${this.id}, name: ${this.name}, Dept: ${this.department}, Designation: ${this.designation}`;
        console.log(strDisplay);
    }
}

var empObj = new Employee();
empObj.id = 10;
empObj.name = 'Arun';
empObj.department = 'IT';
empObj.designation = 'Front End Developer';
empObj.display();