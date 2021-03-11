// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
const number = 123;
const manager = new Manager("carlos",34,"12@gmail.com", number);
expect(manager.officenumber).toBe(number);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const manager = new Manager("carlos",34,"12@gmail.com", 123);
    expect(manager.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
    const number = 123;
    const manager = new Manager("carlos",34,"12@gmail.com", number);
    expect(manager.getOfficeNumber()).toBe(number);
});
