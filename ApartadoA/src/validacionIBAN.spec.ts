import { estaBienFormadoIBAN } from "./validacionIBAN";

describe("estaBienFormadoIBAN", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
  ])("deberia devolver IBAN %s como %s", (valor: string, expected: boolean) => {
    expect(estaBienFormadoIBAN(valor)).toBe(expected);
  });
});
