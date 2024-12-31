import React, { ReactElement } from "react"
import { ImageSourcePropType, StatusBar, TouchableOpacityProps, ViewStyle } from "react-native"
import { Text, TextProps } from "../Text"
import { HeaderAction } from "./HeaderAction"
import { verticalScale } from "app/theme/rnuiScaling"
import { AppNavigationProps } from "app/navigators"
import { useNavigation } from "@react-navigation/native"
import { HeaderPreset } from "./preset"
import { colors } from "app/theme"
import { View } from "../View"
import { SafeAreaViewTop } from "../SafeAreaView"
import LinearGradient from "react-native-linear-gradient"

export interface HeaderProps {
  text?: string
  preset?: HeaderPreset
  titleTx?: TextProps["tx"]
  leftIcon?: ImageSourcePropType
  LeftActionComponent?: ReactElement
  onLeftPress?: TouchableOpacityProps["onPress"]
  rightIcon?: ImageSourcePropType
  RightActionComponent?: ReactElement
  onRightPress?: TouchableOpacityProps["onPress"]
}

export function Header(props: HeaderProps) {
  const navigation: AppNavigationProps = useNavigation()

  const {
    text,
    LeftActionComponent,
    leftIcon,
    onLeftPress = () => navigation.goBack(),
    onRightPress = () => navigation.goBack(),
    RightActionComponent,
    rightIcon,
    titleTx,
  } = props

  return (
    <LinearGradient colors={colors.palette.linearDecor1900}>
      <StatusBar
        animated={true}
        backgroundColor={"transparent"}
        translucent={true}
        barStyle={"light-content"}
        showHideTransition={"slide"}
        hidden={false}
      />
      <SafeAreaViewTop />
      <View width="100%" marginT-vs4>
        <View row center height={verticalScale(48)} style={$wrapper}>
          <HeaderAction
            icon={leftIcon}
            onPress={onLeftPress}
            ActionComponent={LeftActionComponent}
          />

          {!!titleTx && (
            <View flex height={"100%"} center paddingL-hs16 paddingR-hs16 pointerEvents="none">
              <Text center tx={titleTx} h4 fw900 color={colors.palette.background50} />
            </View>
          )}

          {text && (
            <View flex height={"100%"} center paddingL-hs16 paddingR-hs16 pointerEvents="none">
              <Text center h4 fw900 color={colors.palette.background50}>
                {text}
              </Text>
            </View>
          )}

          <HeaderAction
            icon={rightIcon}
            onPress={onRightPress}
            ActionComponent={RightActionComponent}
          />
        </View>
      </View>
    </LinearGradient>
  )
}

const $wrapper: ViewStyle = {
  justifyContent: "space-between",
}
