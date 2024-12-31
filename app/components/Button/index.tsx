import React from "react"
import {
  ActivityIndicator,
  ImageSourcePropType,
  PressableStateCallbackType,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native"
import { colors } from "../../theme"
import { Text, TextProps } from "../Text"
import { moderateScale, verticalScale } from "app/theme/rnuiScaling"
import {
  $colorPresets,
  $textPresets,
  $typePresets,
  $viewPresets,
  ButtonPresets,
  ButtonType,
} from "./button.preset"
import { Icon } from "../Icon"
import { View } from "../View"
import { TouchableOpacity } from "react-native-ui-lib"
import LinearGradient from "react-native-linear-gradient"

type ButtonState = "default" | "press"

export interface ButtonAccessoryProps {
  style: StyleProp<any>
  pressableState: PressableStateCallbackType
  disabled?: boolean
}

export interface ButtonProps extends TouchableOpacityProps {
  tx?: TextProps["tx"]
  text?: string
  type?: ButtonType
  preset?: ButtonPresets
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  icon?: ImageSourcePropType
  iconSize?: number
  isLoading?: boolean
  tintColor?: string
  width?: number
}

export function Button(props: ButtonProps) {
  const {
    tx,
    text,
    type = "purple",
    preset = "size48",
    style: $viewStyleOverride,
    disabled,
    icon,
    iconSize,
    isLoading,
    tintColor: $tintColor,
    ...rest
  } = props
  const [state, setState] = React.useState<ButtonState>("default")

  const $disableTextStyle = disabled && { color: colors.palette.background50 }
  const $disableStyle = disabled && { backgroundColor: colors.palette.neutral400 }
  const $pressStyle = state === "press" && { backgroundColor: $colorPresets[type].activeColor }
  const tintColor = $tintColor || $colorPresets[type].tintColor
  const $width = props.width ? moderateScale(props.width) : moderateScale(200)

  const $viewStyle = [$disableStyle]
  const $textStyle = [$disableTextStyle]

  const render = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.3}
        onPressIn={() => setState("press")}
        onPressOut={() => setState("default")}
        disabled={isLoading || disabled}
        {...rest}
      >
        <View br30 style={[{ overflow: `hidden` }, $viewStyle]} width={$width}>
          {!disabled && (
            <LinearGradient colors={colors.palette.linearDecor2000}>
              <View br30 row center height={verticalScale(48)}>
                {icon && iconSize && (
                  <>
                    <Icon
                      source={icon}
                      size={moderateScale(iconSize)}
                      containerSize={moderateScale(iconSize)}
                      color={tintColor}
                    />
                    <View marginR-hs8 />
                  </>
                )}
                <Text tx={tx} fw900 h4 color={colors.palette.background50} style={$textStyle} />
                {text && (
                  <Text fw900 h4 color={colors.palette.background50} style={$textStyle}>
                    {text}
                  </Text>
                )}
                {isLoading && renderLoading()}
              </View>
            </LinearGradient>
          )}
          {disabled && (
            <View br30 row center height={verticalScale(48)}>
              {icon && <Icon source={icon} containerSize={moderateScale(40)} color={tintColor} />}
              <Text tx={tx} fw900 h4 color={colors.palette.background50} style={$textStyle} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  const renderLoading = () => {
    return (
      <View marginL-vs8>
        <ActivityIndicator color={tintColor} />
      </View>
    )
  }

  return render()
}
