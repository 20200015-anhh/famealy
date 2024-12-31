import * as React from "react"
import { ImageSourcePropType, TouchableOpacityProps } from "react-native"
import { Icon } from "../Icon"
import { moderateScale } from "app/theme/rnuiScaling"
import { View } from "../View"

interface HeaderActionProps {
  icon?: ImageSourcePropType
  onPress?: TouchableOpacityProps["onPress"]
  ActionComponent?: React.ReactElement
  tintColor?: string
}

export function HeaderAction(props: HeaderActionProps) {
  const { icon, onPress, ActionComponent, tintColor } = props

  if (ActionComponent) return ActionComponent

  if (icon) {
    return <Icon source={icon} onPress={onPress} color={tintColor} />
  }

  return <View width={moderateScale(44)} />
}
