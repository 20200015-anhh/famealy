import React from "react"
import { Image } from "react-native-ui-lib"
import { View } from "./View"
import { ViewStyle } from "react-native"
import { moderateScale } from "@/theme/rnuiScaling"

export type ImageBase64Props = {
  sourceBase64: string
  width?: number
  height?: number
}

export function ImageBase64(props: ImageBase64Props) {
  const { sourceBase64, width, height } = props
  return (
    <View style={$imageStyle}>
      <Image
        source={{ uri: `data:image/png;base64,${sourceBase64}` }}
        width={width}
        height={height}
      />
    </View>
  )
}

const $imageStyle: ViewStyle = {
  borderRadius: moderateScale(12),
  overflow: "hidden",
}
