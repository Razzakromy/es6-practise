class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Fokirunnesa High School"
    }
}

const student1 = new Student(12, "Faruk");
const student2 = new Student(01, "Shimul");
console.log(student1, student2);