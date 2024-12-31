import { colors } from "app/theme"
import { horizontalScale, verticalScale } from "app/theme/rnuiScaling"
import { designSystemTypo } from "app/theme/rnuiTheme"
import { Dictionary } from "lodash"
import { StyleProp, TextStyle, ViewStyle } from "react-native"

export type ButtonPresets = keyof typeof $viewPresets
export type ButtonType = keyof typeof $typePresets

const $baseViewStyle: ViewStyle = {
  overflow: "hidden",
}

const $baseTextStyle: TextStyle = {
  textAlign: "center",
}

export const $viewPresets = {
  size56: [
    $baseViewStyle,
    {
      height: verticalScale(56),
      paddingHorizontal: horizontalScale(24),
    },
  ] as StyleProp<ViewStyle>,
  size48: [
    $baseViewStyle,
    {
      height: verticalScale(48),
      paddingHorizontal: horizontalScale(20),
    },
  ] as StyleProp<ViewStyle>,
  size40: [
    $baseViewStyle,
    {
      height: verticalScale(40),
      paddingHorizontal: horizontalScale(16),
    },
  ] as StyleProp<ViewStyle>,
  size32: [
    $baseViewStyle,
    {
      height: verticalScale(32),
      paddingHorizontal: horizontalScale(12),
    },
  ] as StyleProp<ViewStyle>,
}

export const $typePresets = {
  default: {
    backgroundColor: colors.palette.orange400,
  } as StyleProp<ViewStyle>,
  secondary: {
    backgroundColor: colors.palette.background50,
  } as StyleProp<ViewStyle>,
  secondary2: {
    backgroundColor: colors.palette.background50,
  } as StyleProp<ViewStyle>,
  secondary3: {
    backgroundColor: colors.palette.background50,
  } as StyleProp<ViewStyle>,
  gray: {
    backgroundColor: colors.palette.neutral400,
  } as StyleProp<ViewStyle>,
  gray100: {
    backgroundColor: colors.palette.neutral100,
  } as StyleProp<ViewStyle>,
  purple: {
    backgroundColor: colors.palette.purple400,
  },
}

export const $textPresets: Record<ButtonPresets, StyleProp<TextStyle>> = {
  size56: [$baseTextStyle, designSystemTypo.buttonLabelLarge],
  size48: [$baseTextStyle, designSystemTypo.buttonLabelLarge],
  size40: [$baseTextStyle, designSystemTypo.buttonLabelMedium],
  size32: [$baseTextStyle, designSystemTypo.buttonLabelSmall],
}

export const $colorPresets: Record<ButtonType, Dictionary<string | undefined>> = {
  default: { tintColor: colors.textWhite, activeColor: colors.palette.orange500 },
  secondary: { tintColor: colors.palette.purple700, activeColor: colors.palette.overlay70 },
  secondary2: { tintColor: colors.palette.neutral800, activeColor: colors.palette.overlay70 },
  secondary3: { tintColor: colors.palette.negative400, activeColor: colors.palette.overlay70 },
  gray: { tintColor: colors.textWhite, activeColor: colors.palette.overlayScrim },
  gray100: { tintColor: colors.text, activeColor: colors.palette.neutral200 },
  purple: { tintColor: colors.textWhite, activeColor: colors.palette.purple500 },
}
