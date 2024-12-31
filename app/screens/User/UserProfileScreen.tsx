import { FC, useCallback, useRef } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Button, Header, Screen, Text, View } from "@/components"
import { useStores } from "@/models"
import { Image } from "react-native-ui-lib"
import * as images from "app/utils/images"
import { colors } from "@/theme"
import { moderateScale } from "@/theme/rnuiScaling"

interface UserProfileScreenProps extends AppStackScreenProps<"UserProfile"> {}

export const UserProfileScreen: FC<UserProfileScreenProps> = observer(function UserProfileScreen() {
  const { authStore } = useStores()

  const render = () => {
    return (
      <View flex>
        <Screen style={$root} preset="fixed">
          <Header titleTx="profile.title" />
          <View flex>
            <ScrollView>
              <View centerH marginV-vs20>
                <View style={$avatarStyle}>
                  <Image
                    source={images.shoppingIcon1}
                    width={moderateScale(100)}
                    height={moderateScale(100)}
                  />
                </View>
                <View marginB-vs20 />
                <Text>CristianoMessiJR</Text>
                <View marginB-vs20 />
                <Button tx="auth.logout" width={200} onPress={logout} />
              </View>
            </ScrollView>
          </View>
        </Screen>
      </View>
    )
  }

  const logout = () => {
    authStore.setProp("isAuthenticated", false)
  }

  return render()
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}

const $avatarStyle: ViewStyle = {
  width: moderateScale(100),
  height: moderateScale(100),
  borderRadius: moderateScale(50),
  backgroundColor: colors.palette.purple300,
  borderWidth: moderateScale(2),
  borderColor: colors.palette.blue100,
  overflow: "hidden",
}
