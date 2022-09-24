export const simplify = (text: string) => {
  return (
    text
      // g y j
      .replaceAll("ge", "je")
      .replaceAll("gi", "ji")
      .replaceAll("gue", "ge")
      .replaceAll("gui", "gi")
      .replaceAll("güe", "gue")
      .replaceAll("güi", "gui")
      // b y v
      .replaceAll("v", "b")
      // ll y y
      .replaceAll("ll", "y")
  );
};
