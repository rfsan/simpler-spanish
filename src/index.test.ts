import { describe, expect, test } from "@jest/globals";
import { gjDivision, llRemoval, simplify, vRemoval } from "./index";

const example1 =
  "La gente nicaragüense sigue en guerra con el gerente bilingüe y están usando pingüinos llaneros como armas. Mientras tanto, la gitana está tocando la guitarra y cantando con su bella voz bajo la lluvia.";

describe("simplify", () => {
  test("lowercase, v, ll", () => {
    expect(simplify(example1, { vRemoval: true, llRemoval: true })).toBe(
      "La gente nicaragüense sigue en guerra con el gerente bilingüe y están usando pingüinos yaneros como armas. Mientras tanto, la gitana está tocando la guitarra y cantando con su beya boz bajo la yubia."
    );
  });
});

describe("simplify", () => {
  test("lowercase, qj, v, ll", () => {
    expect(
      simplify(example1, { gjDivision: true, vRemoval: true, llRemoval: true })
    ).toBe(
      "La jente nicaraguense sige en gerra con el jerente bilingue y están usando pinguinos yaneros como armas. Mientras tanto, la jitana está tocando la gitarra y cantando con su beya boz bajo la yubia."
    );
  });
});

describe("qjDivision", () => {
  test("lowercase", () => {
    expect(gjDivision(example1)).toBe(
      "La jente nicaraguense sige en gerra con el jerente bilingue y están usando pinguinos llaneros como armas. Mientras tanto, la jitana está tocando la gitarra y cantando con su bella voz bajo la lluvia."
    );
  });
});

describe("vRemoval", () => {
  test("lowercase", () => {
    expect(vRemoval(example1)).toBe(
      "La gente nicaragüense sigue en guerra con el gerente bilingüe y están usando pingüinos llaneros como armas. Mientras tanto, la gitana está tocando la guitarra y cantando con su bella boz bajo la llubia."
    );
  });
});

describe("llRemoval", () => {
  test("lowercase", () => {
    expect(llRemoval(example1)).toBe(
      "La gente nicaragüense sigue en guerra con el gerente bilingüe y están usando pingüinos yaneros como armas. Mientras tanto, la gitana está tocando la guitarra y cantando con su beya voz bajo la yuvia."
    );
  });
});
