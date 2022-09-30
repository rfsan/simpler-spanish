import { describe, expect, test } from "@jest/globals";
import {
  gjDivision,
  llRemoval,
  silentHRemoval,
  simplify,
  vRemoval,
  ySoundCorrection,
} from "./index";

const example1 =
  "La gente nicaragüense sigue en guerra con el gerente bilingüe y están usando pingüinos llaneros como armas chidas. Mientras tanto, la gitana está tocando la guitarra holandesa y cantando con su bella voz bajo la lluvia.";

describe("simplify", () => {
  test("lowercase, v, ll", () => {
    expect(simplify(example1, { vRemoval: true, llRemoval: true })).toBe(
      "La gente nicaragüense sigue en guerra con el gerente bilingüe y están usando pingüinos yaneros como armas chidas. Mientras tanto, la gitana está tocando la guitarra holandesa y cantando con su beya boz bajo la yubia."
    );
  });
});

describe("simplify", () => {
  test("lowercase, qj, v, ll, h, yi", () => {
    expect(
      simplify(example1, {
        gjDivision: true,
        vRemoval: true,
        llRemoval: true,
        silentHRemoval: true,
        ySoundCorrection: true,
      })
    ).toBe(
      "La jente nicaraguense sige en gerra con el jerente bilingue i están usando pinguinos yaneros como armas chidas. Mientras tanto, la jitana está tocando la gitarra olandesa i cantando con su beya boz bajo la yubia."
    );
  });
});

// =========
// qjDivision
// =========

describe("qjDivision", () => {
  test("lowercase", () => {
    expect(
      gjDivision(
        "gente nicaragüense sigue guerra gerente bilingüe pingüinos gitana guitarra"
      )
    ).toBe(
      "jente nicaraguense sige gerra jerente bilingue pinguinos jitana gitarra"
    );
  });
});

describe("qjDivision", () => {
  test("uppercase", () => {
    expect(
      gjDivision(
        "GENTE NICARAGÜENSE SIGUE GUERRA GERENTE BILINGÜE PINGÜINOS GITANA GUITARRA"
      )
    ).toBe(
      "JENTE NICARAGUENSE SIGE GERRA JERENTE BILINGUE PINGUINOS JITANA GITARRA"
    );
  });
});

describe("qjDivision", () => {
  test("capitalize", () => {
    expect(
      gjDivision(
        "Gente nicaragüense sigue guerra gerente bilingüe pingüinos gitana guitarra"
      )
    ).toBe(
      "Jente nicaraguense sige gerra jerente bilingue pinguinos jitana gitarra"
    );
  });
});

// =========
// vRemoval
// =========

describe("vRemoval", () => {
  test("lowercase", () => {
    expect(vRemoval("voz y lluvia")).toBe("boz y llubia");
  });
});

describe("vRemoval", () => {
  test("uppercase", () => {
    expect(vRemoval("VOZ Y LLUVIA")).toBe("BOZ Y LLUBIA");
  });
});

describe("vRemoval", () => {
  test("capitalize", () => {
    expect(vRemoval("Voz y lluvia")).toBe("Boz y llubia");
  });
});

// =========
// llRemoval
// =========

describe("llRemoval", () => {
  test("lowercase", () => {
    expect(llRemoval("llanto, calle, yodo y lágrimas.")).toBe(
      "yanto, caye, yodo y lágrimas."
    );
  });
});

describe("llRemoval", () => {
  test("uppercase", () => {
    expect(llRemoval("LLANTO, CALLE, YODO Y LÁGRIMAS.")).toBe(
      "YANTO, CAYE, YODO Y LÁGRIMAS."
    );
  });
});

describe("llRemoval", () => {
  test("capitalize", () => {
    expect(llRemoval("Llanto, calle, yodo y lágrimas.")).toBe(
      "Yanto, caye, yodo y lágrimas."
    );
  });
});

// =========
// hRemoval
// =========

describe("silentHRemoval", () => {
  test("lowercase", () => {
    expect(silentHRemoval("hola charmander cachucha")).toBe(
      "ola charmander cachucha"
    );
  });
});

describe("silentHRemoval", () => {
  test("uppercase", () => {
    expect(silentHRemoval("HOLA CHARMANDER CACHUCHA")).toBe(
      "OLA CHARMANDER CACHUCHA"
    );
  });
});

// describe("silentHRemoval", () => {
//   test("capitalize", () => {
//     expect(silentHRemoval("Hola Charmander cachucha")).toBe(
//       "Ola Charmander cachucha"
//     );
//   });
// });

// =========
// ySoundCorrection
// =========

describe("ySoundCorrection", () => {
  test("lowercase", () => {
    expect(
      ySoundCorrection("y yo soy yolanda, caray! y tengo hijos y perros")
    ).toBe("i yo soi yolanda, carai! i tengo hijos i perros");
  });
});

describe("ySoundCorrection", () => {
  test("uppercase", () => {
    expect(
      ySoundCorrection("Y YO SOY YOLANDA, CARAY! Y TENGO HIJOS Y PERROS")
    ).toBe("I YO SOI YOLANDA, CARAI! I TENGO HIJOS I PERROS");
  });
});

describe("ySoundCorrection", () => {
  test("capitalize", () => {
    expect(
      ySoundCorrection("Y yo soy yolanda, caray! y tengo hijos y perros")
    ).toBe("I yo soi yolanda, carai! i tengo hijos i perros");
  });
});
