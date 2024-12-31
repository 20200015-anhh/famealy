import * as React from "react"
import { observer } from "mobx-react-lite"
import { StyleProp, ViewStyle } from "react-native"
import { $gradientTheme, GradientPreset } from "./preset"
import { View, ViewProps } from "../View"

export type GradientViewProps = ViewProps & {
  style?: StyleProp<ViewStyle>
  preset?: GradientPreset
  singleColor?: string // sometime we need it for case gradient view change color from gradient to single color
}

export const GradientView = observer(function GradientView(props: GradientViewProps) {
  const { preset = "linearDecor100", singleColor, ...rest } = props
  const themeColor =
    preset === "singleColor" && singleColor
      ? [singleColor, singleColor]
      : $gradientTheme[preset].color || $gradientTheme.transparent.color
  const themeColorString = themeColor.join(`,`)

  const $gradientStyle = {
    background: `linear-gradient(90deg, ${themeColorString})`,
  } as ViewStyle

  return (
    <View style={[props.style, $gradientStyle]}>
      <View {...rest}></View>
    </View>
  )
})
