import * as React from "react"
import { observer } from "mobx-react-lite"
import LinearGradient from "react-native-linear-gradient"
import { StyleProp, ViewStyle } from "react-native"
import { $gradientTheme, GradientPreset } from "./preset"
import { View, ViewProps } from "../View"

export type GradientViewProps = ViewProps & {
  style?: StyleProp<ViewStyle>
  preset?: GradientPreset
  singleColor?: string // sometime we need it for case gradient view change color from gradient to single color
}

export const GradientView = observer(function GradientView(props: GradientViewProps) {
  const { preset = "linearDecor1200", singleColor, ...rest } = props
  const themeColor =
    preset === "singleColor" && singleColor
      ? [singleColor, singleColor]
      : $gradientTheme[preset].color || $gradientTheme.transparent.color

  return (
    <LinearGradient style={props.style} colors={themeColor} angle={0} useAngle>
      <View {...rest}></View>
    </LinearGradient>
  )
})
