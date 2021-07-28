import { primaryFont } from "./typography";
import { primary, neutral, shadow, green, yellow, red } from "./colors";

/*  Themes are equals => just implemented theme-switch functionality */
export const defaultTheme = {
  bgColor: neutral[100],

  primaryColor: primary[400],
  primaryColorHover: neutral[100],
  primaryColorActive: primary[500],

  secondaryColor: primary[100],
  secondaryColorHover: neutral[200],
  secondaryColorActive: primary[200],

  tertiaryColor: neutral[100],
  tertiaryColorHover: neutral[100],
  tertiaryColorActive: primary[100],

  textColorDisabled: neutral[400],
  bgColorDisabled: neutral[200],

  textColor: neutral[600],
  textColorInverted: neutral[100],

  formElementBg: neutral[100],
  textOnFormElementBg: neutral[500],

  boxShadow1: shadow.black,
  boxShadow2: shadow.primary,

  status: {
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],

    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],

    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
  },

  primaryFont,
};

/*  Implementing a Dark Theme keeping our Originals Styles just to demonstration purposes  */
export const darkTheme = {
  bgColorDark: primary[200],
  bgColorDarkLight: primary[100],
  bgColorDarkLighter: primary[50],

  primaryColor: primary[400],
  primaryColorHover: neutral[100],
  primaryColorActive: primary[500],

  secondaryColor: primary[100],
  secondaryColorHover: neutral[200],
  secondaryColorActive: primary[200],

  tertiaryColor: neutral[100],
  tertiaryColorHover: neutral[100],
  tertiaryColorActive: primary[100],

  textColorDisabled: neutral[400],
  bgColorDisabled: neutral[200],

  textColor: neutral[600],
  textColorInverted: neutral[100],

  formElementBg: primary[200],
  textOnFormElementBg: neutral[100],

  boxShadow1: shadow.white,
  boxShadow2: shadow.primary,

  status: {
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],

    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],

    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
  },

  primaryFont,
};
