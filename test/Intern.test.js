// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
const school = "uncc";
const intern = new Intern("carlos",34,"12@gmail.com",school);
expect(intern.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const intern = new Intern("carlos",34,"12@gmail.com","uncc");
    expect(intern.getRole()).toBe(role);
});

test("Can get school via getSchool()", () => {
    const school = "uncc"
    const intern = new Intern("carlos",34,"12@gmail.com",school)
    expect(intern.getSchool()).toBe(school);
});
