// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const github = "Github"
    const engineer = new Engineer("Carlos", 34,"12@gmail.com", github);
    expect(engineer.github).toBe(github);
});

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer"
    const engineer = new Engineer("Carlos", 34, "12@gmail.com", "github");
    expect(engineer.getRole()).toBe(role)
});

test("Can get GitHub username via getGithub()", () => {
    const github = "Github"
    const engineer = new Engineer("Carlos", 34,"12@gmail.com", github);
    expect(engineer.getGithub()).toBe(github)
});
