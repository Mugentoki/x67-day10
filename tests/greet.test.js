const { greet } = require("../lib/greet");

describe("greet()", () => {
  test("uses the provided name", () => {
    expect(greet("Tio")).toBe(
      "Hello, Tio! This response was deployed by a CI/CD pipeline."
    );
  });

  test("falls back to a default when no name is given", () => {
    expect(greet(undefined)).toContain("Hello, Course Participant!");
  });

  test("trims whitespace-only names to the default", () => {
    expect(greet("   ")).toContain("Hello, Course Participant!");
  });
});
