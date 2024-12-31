import { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Keyboard,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native"
import { AppNavigationProps, AppStackScreenProps } from "@/navigators"
import { Button, Icon, SafeAreaViewTop, Screen, Text, View } from "@/components"
import * as images from "./images"
import { moderateScale } from "@/theme/rnuiScaling"
import { TextInput } from "react-native-gesture-handler"
import { colors } from "@/theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "@/models"

interface AuthScreenProps extends AppStackScreenProps<"Auth"> {}

export const AuthScreen: FC<AuthScreenProps> = observer(function AuthScreen() {
  const navigation: AppNavigationProps = useNavigation()
  const { authStore } = useStores()
  const [inputEmail, changeInputEmail] = useState<string>("")
  const [inputPassword, changeInputPassword] = useState<string>("")

  const inputEmailRef = useRef<TextInput>(null)
  const inputPasswordRef = useRef<TextInput>(null)

  const focusInputEmail = () => {
    if (inputEmailRef.current) {
      inputEmailRef.current.focus()
    }
  }

  const focusInputPassword = () => {
    if (inputPasswordRef.current) {
      inputPasswordRef.current.focus()
    }
  }

  const render = () => {
    return (
      <Screen style={$root} preset="fixed">
        <StatusBar
          animated={true}
          backgroundColor={"transparent"}
          translucent={true}
          barStyle={"dark-content"}
          showHideTransition={"slide"}
          hidden={false}
        />
        <SafeAreaViewTop />
        <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <View centerV marginT-vs100>
              <View marginT-vs20 />
              <Text center fw700 h1 tx="auth.login" />
              <View marginT-vs20 />
              {renderInputEmail()}
              <View marginT-vs20 />
              {renderInputPassword()}
              <View marginT-vs20 />
              {renderForgetPassword()}
              <View marginT-vs100 />
              {renderLoginButton()}
              <View marginT-vs20 />
              {renderSignUp()}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </Screen>
    )
  }

  const renderInputEmail = () => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={focusInputEmail}>
        <View style={$textInput} row centerV marginH-hs40 paddingV-vs12 paddingH-hs12>
          <Icon
            source={images.emailIcon}
            containerSize={moderateScale(20)}
            size={moderateScale(20)}
          />
          <View marginR-hs8 />
          <TextInput
            ref={inputEmailRef}
            placeholder="Email"
            value={inputEmail}
            onChangeText={changeInputEmail}
          />
        </View>
      </TouchableOpacity>
    )
  }

  const renderInputPassword = () => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={focusInputPassword}>
        <View style={$textInput} row centerV marginH-hs40 paddingV-vs12 paddingH-hs12>
          <Icon
            source={images.passwordIcon}
            containerSize={moderateScale(20)}
            size={moderateScale(20)}
          />
          <View marginR-hs8 />
          <TextInput
            ref={inputPasswordRef}
            placeholder="Password"
            value={inputPassword}
            onChangeText={changeInputPassword}
          />
        </View>
      </TouchableOpacity>
    )
  }

  const renderForgetPassword = () => {
    return (
      <View center>
        <Text fw700 bodySmall color={colors.palette.negative350} onPress={forgetPassword}>
          Quên mật khẩu?
        </Text>
      </View>
    )
  }

  const renderLoginButton = () => {
    return (
      <View center>
        <Button tx="auth.login" width={200} onPress={login} />
      </View>
    )
  }

  const renderSignUp = () => {
    return (
      <View center>
        <Text fw400 bodySmall>
          Bạn chưa có tài khoản?{" "}
          <Text fw700 body color={colors.palette.info400} onPress={signUp}>
            Đăng ký
          </Text>
        </Text>
      </View>
    )
  }

  const login = () => {
    authStore.setProp("isAuthenticated", true)
  }

  const signUp = () => {
    console.log(`signUp`)
  }

  const forgetPassword = () => {
    console.log(`forgetPassword`)
  }

  return render()
})

const $root: ViewStyle = {
  flex: 1,
}

const $textInput: ViewStyle = {
  backgroundColor: colors.palette.positive100,
  borderRadius: moderateScale(8),
  borderWidth: 1,
  borderColor: colors.palette.positive350,
}
