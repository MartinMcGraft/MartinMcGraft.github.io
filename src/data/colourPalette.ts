export const colourPalette = {
  ink: "#06141B",
  navy: "#11212D",
  slate: "#253745",
  steel: "#4A5C6A",
  mist: "#9BA8AB",
  cloud: "#CCD0CF",
};

export const colourVariables = Object.entries(colourPalette)
  .map(([name, value]) => `--colour-${name}: ${value}`)
  .join(";");
