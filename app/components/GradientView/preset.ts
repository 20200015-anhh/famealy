import { colors } from "app/theme"

export type GradientPreset = keyof typeof $gradientTheme

export const $gradientTheme = {
  linearDecor100: {
    color: colors.palette.linearDecor100,
  },
  linearDecor1200: {
    color: colors.palette.linearDecor1200,
  },
  linearDecor1300: {
    color: colors.palette.linearDecor1300,
  },
  linearDecor1400: {
    color: colors.palette.linearDecor1400,
  },
  linearDecor1500: {
    color: colors.palette.linearDecor1500,
  },
  linearDecor1600: {
    color: colors.palette.linearDecor1600,
  },
  linearDecor1700: {
    color: colors.palette.linearDecor1700,
  },
  linearBrand100: {
    color: colors.palette.linearBrand100,
  },
  linearBrand200: {
    color: colors.palette.linearBrand200,
  },
  transparent: {
    color: [colors.transparent, colors.transparent],
  },
  singleColor: {
    color: undefined,
  },
}
