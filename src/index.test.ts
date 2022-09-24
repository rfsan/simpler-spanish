import { describe, expect, test } from "@jest/globals";
import { simplify } from "./index";

describe("Simplify", () => {
  test("", () => {
    expect(
      simplify(
        "La gente nicaragüense sigue en guerra con el gerente bilingüe y están usando pingüinos llaneros como armas. Mientras tanto, la gitana está tocando la guitarra y cantando con su bella voz bajo la lluvia."
      )
    ).toBe(
      "La jente nicaraguense sige en gerra con el jerente bilingue y están usando pinguinos yaneros como armas. Mientras tanto, la jitana está tocando la gitarra y cantando con su beya boz bajo la yubia."
    );
  });
});
