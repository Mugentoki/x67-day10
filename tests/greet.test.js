const { greet } = require("../lib/greet");

describe("greet()", () => {
  test("uses the provided name", () => {
    expect(greet("Tio")).toBe(
      "Greetings, Tio! Have a good day!"
    );
  });

  test("falls back to a default when no name is given", () => {
    expect(greet(undefined)).toContain("Greetings, Course Participant! Have a good day!");
  });

  test("trims whitespace-only names to the default", () => {
    expect(greet("   ")).toContain("Greetings, Course Participant! Have a good day!");
  });
});
