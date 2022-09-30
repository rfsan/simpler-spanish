interface Modifications {
  gjDivision?: boolean;
  vRemoval?: boolean;
  llRemoval?: boolean;
  ySoundCorrection?: boolean;
  silentHRemoval?: boolean;
}

export const simplify = (text: string, mods?: Modifications) => {
  if (!mods) return text;

  if (mods.gjDivision) text = gjDivision(text);
  if (mods.vRemoval) text = vRemoval(text);
  if (mods.llRemoval) text = llRemoval(text);
  if (mods.ySoundCorrection) text = ySoundCorrection(text);
  if (mods.silentHRemoval) text = silentHRemoval(text);

  return text;
};

// TODO: This function is a good oportunity to explore optimization.
export const gjDivision = (text: string) => {
  text = replaceAllCaseSensitive(text, /ge/gi, "je");
  text = replaceAllCaseSensitive(text, /gi/gi, "ji");
  text = replaceAllCaseSensitive(text, /gue/gi, "ge");
  text = replaceAllCaseSensitive(text, /gui/gi, "gi");
  text = replaceAllCaseSensitive(text, /güe/gi, "gue");
  return replaceAllCaseSensitive(text, /güi/gi, "gui");
};

// TODO: Improve this function.
// BUG: The letter after the h is not being capitalized.
export const silentHRemoval = (text: string) => {
  text = replaceAllCaseSensitive(text, /ch/gi, "kk");
  text = replaceAllCaseSensitive(text, /h/gi, "");
  return replaceAllCaseSensitive(text, /kk/gi, "ch");
};

export const ySoundCorrection = (text: string) => {
  return replaceAllCaseSensitive(text, /y\b/gi, "i");
};

export const vRemoval = (text: string) => {
  return replaceAllCaseSensitive(text, /v/gi, "b");
};

export const llRemoval = (text: string) => {
  return replaceAllCaseSensitive(text, /ll/gi, "y");
};

const replaceAllCaseSensitive = (
  text: string,
  pattern: RegExp,
  replacement: string
) => {
  return text.replaceAll(pattern, (match) => {
    return replacement
      .split("")
      .map((char, i) =>
        match[i] === match[i].toUpperCase() ? char.toUpperCase() : char
      )
      .join("");
  });
};
