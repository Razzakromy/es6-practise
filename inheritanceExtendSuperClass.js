class Village {
    constructor() {
        this.village = "Kakraid";
    }
}

class Child extends Village {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.FathersName = "Razu";

    }
    getFullAddress() {
        return this.name + " " + this.village;
    }
}

const baby1 = new Child("Raisul", 3);

console.log(baby1.getFullAddress());