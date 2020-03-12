export const greyscale = {
  black: '#202020',
  doveGray: '#555555',
  darkSilver: '#888888',
  gray: '#969696',
  silverChalice: '#ABABAB',
  silver: '#c6c6c6',
};

export const backgrounds = {
  white: '#FFFFFF',
  wildSand: '#F6F6F6',
  concrete: '#F2F2F2',
  gallery: '#EAEAEA',
  alto: '#D5D5D5',
  slateGray: '#758495',
};

export const palette = {
  stTropaz: '#236192',
  lochmara: '#0675C1',
  scooter: '#66BDFF',
  rioGrande: '#82BD41',
  chesnutRose: '#E96065',
  jaffa: '#EA8330',
  lightningYellow: '#F3C446',
};

export default {
  ...greyscale,
  ...backgrounds,
  ...palette,
  primaryColor: palette.stTropaz,
  informationColor: palette.lochmara,
  warningColor: palette.jaffa,
  successColor: palette.rioGrande,
  destructiveColor: palette.chesnutRose,
  transparent: 'rgba(0,0,0,0)',
};