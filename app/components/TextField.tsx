import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react"
import {
  NativeSyntheticEvent,
  Platform,
  StyleProp,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { translate } from "../i18n"
import { colors, typography } from "../theme"
import { TextProps } from "./Text"
import { horizontalScale } from "app/theme/rnuiScaling"
import { designSystemTypo } from "app/theme/rnuiTheme"
import { View } from "./View"
import { observer } from "mobx-react-lite"

export interface TextFieldAccessoryProps {
  style: StyleProp<any>
  multiline: boolean
  editable: boolean
}

export interface TextFieldProps extends Omit<TextInputProps, "ref"> {
  placeholderTx?: TextProps["tx"]
  submitted?: boolean
  required?: boolean
  height?: number
  width?: number
}

export const TextField = observer(
  forwardRef(function TextField(props: TextFieldProps, ref: Ref<RNTextInput>) {
    const {
      placeholderTx,
      style: $inputStyleOverride,
      submitted = false,
      required = false,
      height,
      width,
      ...TextInputProps
    } = props

    const input = useRef<RNTextInput>(null) as React.MutableRefObject<RNTextInput>
    const [value, setValue] = React.useState<string>("")
    const [isFocus, setIsFocus] = React.useState<boolean>(false)

    const disabled = TextInputProps.editable === false
    const $focusStyle = [isFocus ? { borderColor: colors.palette.purple400 } : undefined]

    const $disableStyle = [disabled ? { backgroundColor: colors.palette.neutral100 } : undefined]
    const paddingCursor = Platform.OS === "web" ? 0 : 2
    const $cursorStyle = [props.secureTextEntry ? undefined : { paddingTop: paddingCursor }]

    const placeholderContent = placeholderTx && translate(placeholderTx)

    const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocus(true)
      props.onFocus && props.onFocus(e)
    }

    const onChangeText = (text: string) => {
      setValue(text)
    }

    const $inputWrapperStyles = [
      $inputWrapperStyle,
      ...$focusStyle,
      ...$disableStyle,
      TextInputProps.multiline && { minHeight: 112 },
      { paddingStart: 0 },
      { paddingEnd: 0 },
      { borderColor: colors.palette.blue450 },
    ]

    const $inputStyles: StyleProp<TextStyle> = [
      $inputStyle,
      disabled && { color: colors.textDim },
      TextInputProps.multiline && { height: "auto" },
      $inputStyleOverride,
      ...$cursorStyle,
    ]

    function focusInput() {
      if (disabled) return
      input.current?.focus()
    }

    useImperativeHandle(ref, () => input.current as RNTextInput)

    const render = () => {
      return (
        <TouchableOpacity activeOpacity={1} onPress={focusInput} accessibilityState={{ disabled }}>
          <View row centerV height={height} width={width} br30 style={$inputWrapperStyles}>
            <View marginR-hs4 />
            {renderTextInput()}
            <View marginL-hs4 />
          </View>
        </TouchableOpacity>
      )
    }

    const renderTextInput = () => {
      return (
        <TextInput
          placeholder={placeholderContent}
          value={value}
          inputMode={TextInputProps.inputMode}
          {...TextInputProps}
          editable={!disabled}
          style={$inputStyles}
          onChangeText={onChangeText}
          onFocus={onFocus}
          ref={input}
        />
      )
    }

    return render()
  }),
)

const $inputWrapperStyle: ViewStyle = {
  borderWidth: 1,
  backgroundColor: colors.background,
  borderColor: colors.palette.blue450,
  overflow: "hidden",
  paddingStart: horizontalScale(12),
  paddingEnd: horizontalScale(12),
}

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: "stretch",
  fontFamily: typography.primary.normal,
  color: colors.text,
  ...designSystemTypo.bodyRegular,
  // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
  paddingVertical: 0,
  paddingHorizontal: 0,
  // disable for web-app focus input behavior: https://stackoverflow.com/questions/63716950/border-around-text-input-when-clicked-in-react-native-on-web
  outlineStyle: "none",
} as TextStyle
