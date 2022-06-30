// OOP in ES6
class employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  promote(position, salary) {
    this.position = position;
    this.salary = salary;

    return `${this.name} has been promoted`;
  }

  getInformation() {
    return `name: ${this.name} \n position: ${this.position} \n salary: ${this.salary}`;
  }
}

const emp = new employee("John", "Junior Developer", 1000);
emp.getInformation(); // => name: John
// => position: Junior Developer
// => salary: 1000
emp.promote("Senior Developer", 2500); // John has been promoted
emp.getInformation(); // => name: John
// => position: Senior Developer
// => salary: 2500
