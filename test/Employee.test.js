// Starter file provided by Instructor (03/09/2021) AC
// test and it are the same
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object")
});

test("Can set name via constructor arguments", () => {
    const name = "carlos"
    const employee = new Employee(name,1,"email");
});

test("Can set id via constructor argument", () => {
    const id = 34
    const employee = new Employee("bob",id,"test@gmail.com");
});

test("Can set email via constructor argument", () => {
    const email = "1234@gmail.com"
    const employee = new Employee("bob",1,email);
});

test("Can get name via getName()", () => {
    const name = "carlos"
    const employee = new Employee(name,1,"email");
});

test("Can get id via getId()", () => {
    const id = 34
    const employee = new Employee("bob",id,"test@gmail.com");
});

test("Can get email via getEmail()", () => {
    const email = "1234@gmail.com"
    const employee = new Employee("bob",1,email);
});

test("getRole() should return \"Employee\"", () => {
    const role = "Employee"
    const employee = new Employee("carlos",34,"1234@gmail.com")
});
