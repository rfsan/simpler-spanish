interface Modifications {
  gjDivision?: boolean;
  vRemoval?: boolean;
  llRemoval?: boolean;
}

export const simplify = (text: string, mods?: Modifications) => {
  if (!mods) return text;

  if (mods.gjDivision) text = gjDivision(text);
  if (mods.vRemoval) text = vRemoval(text);
  if (mods.llRemoval) text = llRemoval(text);

  return text;
};

export const gjDivision = (text: string) => {
  return text
    .replaceAll("ge", "je")
    .replaceAll("gi", "ji")
    .replaceAll("gue", "ge")
    .replaceAll("gui", "gi")
    .replaceAll("güe", "gue")
    .replaceAll("güi", "gui");
};

export const vRemoval = (text: string) => {
  return text.replaceAll("v", "b");
};

export const llRemoval = (text: string) => {
  return text.replaceAll("ll", "y");
};
