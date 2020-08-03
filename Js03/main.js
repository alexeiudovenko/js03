class Employee {
    constructor(name, age, salary) {
            this.name = name;
            this.age = age;
            this.salary = salary;
        }
        //геттер & cеттер для свойства name
    set objName(newName) {
        this.name = newName;
    }
    get objName() {
            return this.name;
        }
        //геттер & cеттер для свойства age
    set objAge(newAge) {
        this.age = newAge;
    }
    get objAge() {
            return this.age;
        }
        //геттер & cеттер для свойства salary
    set objSalary(newSalary) {
        this.salary = newSalary;
    }
    get objSalary() {
        return this.salary;
    }
}
const employer = new Employee('Виталий', '25', '1000');
console.log(`Изначальная зп объекта класса Employee: ${employer.salary}$`);
//изменённая зп класса Employee
employer.objSalary = '5000'
console.log(`Изменённая зп объекта класса Employee: ${employer.salary}$`);
class Programmer extends Employee {
    set objSalary(newSalary) {
        super.objSalary;
        this.salary = newSalary * 3;
    }
    get objSalary() {
        super.objSalary;
        return this.salary;
    }
}
const programmer1 = new Programmer('Виталя', '26', '100500');
const programmer2 = new Programmer('Андрей', '50', '2000');
const programmer3 = new Programmer('Коля', '60', '3000');
//проверка изменений в классе Programmer
programmer1.objSalary = '5000';
console.log(`Увеличенная в 3 раза зп объекта класса Programmer: ${programmer1.salary}$`);
console.log("");
console.log("вывод в консоль экземляров класса Programmer:");
console.log(programmer1);
console.log(programmer2);
console.log(programmer3);