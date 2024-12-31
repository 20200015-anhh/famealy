import { observer } from "mobx-react-lite"
import { FC, useCallback, useRef } from "react"
import { Keyboard, TouchableWithoutFeedback, ViewStyle } from "react-native"
import { Button, Header, Screen, TextField } from "@/components"
import { AppStackScreenProps } from "../navigators"
import { View, Text } from "app/components"
import { moderateScale } from "@/theme/rnuiScaling"
import { ImageBase64 } from "@/components/ImageBase64"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet"
import React from "react"
import { colors } from "@/theme"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const bottomSheetRef = React.useRef<BottomSheet>(null)
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])
  const snapPoints = React.useMemo(() => ["25%", "50%", "86%"], [])

  const renderBackdrop = React.useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    [],
  )
  const showBottomSheet = () => {
    bottomSheetRef.current?.expand()
  }

  const renderBottomSheet = () => {
    return (
      <BottomSheet
        index={-1}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={$bottomSheet}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <View paddingH-hs16>
            <View row centerH spread>
              <View width={moderateScale(22)} height={moderateScale(22)} />
              <Text fw700 h6 color={colors.palette.neutral500} tx="common.complete" />
            </View>
            <Text>Welcome</Text>
            <Button tx="common.close" width={200} onPress={() => bottomSheetRef.current?.close()} />

            <BottomSheetTextInput placeholder="Type here" />
          </View>
        </BottomSheetView>
      </BottomSheet>
    )
  }

  const render = () => {
    return (
      <Screen style={$container} preset="fixed">
        <Header titleTx="common.welcome" />
        <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
          <View center flex>
            <Text>Welcome</Text>
            <TextField
              placeholder="TextField"
              height={moderateScale(32)}
              width={moderateScale(200)}
            />
            <Button tx="common.OK" width={200} onPress={showBottomSheet} />
            <ImageBase64 sourceBase64={retrievedImage} width={200} height={200} />
            <FontAwesome name="cutlery" size={20} color="#98A2B3" />
            <FontAwesome name="cutlery" size={20} color="#008040" />
          </View>
        </TouchableWithoutFeedback>

        {renderBottomSheet()}
      </Screen>
    )
  }

  return render()
})
const $container: ViewStyle = {
  flex: 1,
}

const $bottomSheet: ViewStyle = {
  flex: 1,
}

const retrievedImage =
  "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC"
