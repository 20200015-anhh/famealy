import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { GradientPreset } from "../GradientView/preset"
import { colors } from "app/theme"

export type HeaderPreset = keyof typeof $presetData

const iconBack = require("../../../assets/app/common/arrow-left.png")
const iconBack2 = require("../../../assets/app/common/arrow-left-2.png")
const iconClose = require("../../../assets/app/common/clear.png")
const $containerInsets = useSafeAreaInsetsStyle(["top"])

export const $presetData = {
  navigator: {
    backgroundPreset: "linearDecor1200" as GradientPreset,
    defaultLeftIcon: iconBack,
    defaultRightIcon: undefined,
    containerInsets: $containerInsets,
    tintColor: colors.textWhite,
    showDivider: false,
    titleCenter: true,
  },
  popup: {
    backgroundPreset: "linearDecor1200" as GradientPreset,
    defaultLeftIcon: undefined,
    defaultRightIcon: iconClose,
    containerInsets: $containerInsets,
    tintColor: colors.textWhite,
    showDivider: false,
    titleCenter: true,
  },
  bottomSheet: {
    backgroundPreset: "transparent" as GradientPreset,
    defaultLeftIcon: undefined,
    defaultRightIcon: iconClose,
    containerInsets: undefined,
    tintColor: colors.text,
    showDivider: true,
    titleCenter: true,
  },
  leftTitle: {
    backgroundPreset: "linearDecor1200" as GradientPreset,
    defaultLeftIcon: iconBack2,
    defaultRightIcon: undefined,
    containerInsets: $containerInsets,
    tintColor: colors.textWhite,
    showDivider: false,
    titleCenter: false,
  },
  tabbar: {
    backgroundPreset: "linearDecor1200" as GradientPreset,
    defaultLeftIcon: undefined,
    defaultRightIcon: undefined,
    containerInsets: $containerInsets,
    tintColor: colors.textWhite,
    showDivider: false,
    titleCenter: true,
  },
  transparent: {
    backgroundPreset: "transparent" as GradientPreset,
    defaultLeftIcon: iconBack,
    defaultRightIcon: undefined,
    containerInsets: $containerInsets,
    tintColor: colors.textWhite,
    showDivider: false,
    titleCenter: true,
  },
}
