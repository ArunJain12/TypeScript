/*
    Generics In Typescript.
*/

class Generics<T> {
    data: T;

    assign(data: T) {
        this.data = data;
    }

    display() {
        console.log(this.data);
    }
}

let genericObj1 = new Generics();
genericObj1.assign(20);
genericObj1.display();

let genericObj2 = new Generics();
genericObj2.assign("arun");
genericObj2.display();