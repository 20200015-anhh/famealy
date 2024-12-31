import React, { FC, useCallback } from "react"
import { observer } from "mobx-react-lite"
import {
  FlatList,
  Keyboard,
  TextInput,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { BottomSheet, Button, Header, Icon, Screen, Text, View } from "@/components"
import { UserLocalListItem } from "@/screens/User/components/UserLocalListItem"
import { colors } from "@/theme"
import * as images from "app/utils/images"
import { Image } from "react-native-ui-lib"
import { moderateScale } from "@/theme/rnuiScaling"
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { FloatingButton } from "@/components/FloatingButton"
import { shoppingLocalDATA } from "../mockDATA/shoppingDATA"

interface UserLocalListScreenProps extends AppStackScreenProps<"UserLocalList"> {}

export const UserLocalListScreen: FC<UserLocalListScreenProps> = observer(
  function UserLocalListScreen() {
    const [refreshing, setRefreshing] = React.useState(false)
    const [nameOfList, setNameOfList] = React.useState("")
    const [description, setDescription] = React.useState("")

    const onRefresh = useCallback(() => {
      setRefreshing(true)
      setTimeout(() => {
        setRefreshing(false)
      }, 1000)
    }, [])

    const bottomSheetRef = React.useRef<BottomSheetModal>(null)
    const { dismiss } = useBottomSheetModal()

    const snapPoints = React.useMemo(() => [550], [])

    const handlePresentModalPress = () => bottomSheetRef.current?.present()
    const onDismiss = () => {
      bottomSheetRef.current?.dismiss()
    }

    const render = () => {
      return (
        <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
          <Screen style={$root} preset="fixed">
            <Header titleTx="listShoppingPersonal.title" />
            <View marginT-vs12 />
            <FlatList
              data={shoppingLocalDATA}
              renderItem={({ item, index }) => <UserLocalListItem item={item} index={index} />}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <View marginT-vs12 />}
              ListFooterComponent={() => <View marginT-vs120 />}
              onRefresh={onRefresh}
              refreshing={refreshing}
              ListEmptyComponent={renderListEmpty()}
              showsVerticalScrollIndicator={false}
            />
            {renderBottomSheet()}
            <FloatingButton onPress={handlePresentModalPress} />
          </Screen>
        </TouchableWithoutFeedback>
      )
    }

    const renderListEmpty = () => {
      return (
        <View center height={moderateScale(400)}>
          <Image
            source={images.shoppingIcon1}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
          <View marginB-vs4 />
          <Text fw700 h4 color={colors.palette.neutral500}>
            Bạn chưa có danh sách mua sắm nào!
          </Text>
          <View marginB-vs12 />
          <Button
            icon={images.addToCartIcon}
            iconSize={20}
            width={moderateScale(200)}
            tx="common.createNow"
            onPress={handlePresentModalPress}
          />
        </View>
      )
    }

    const renderBottomSheet = () => {
      return (
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} onDismiss={onDismiss}>
          <BottomSheetScrollView showsVerticalScrollIndicator={false}>
            <View marginT-vs16 />
            <Text
              fw700
              h4
              color={colors.palette.orange400}
              center
              tx="listShoppingPersonal.createNew"
            />
            <View row style={$itemStyle} centerV>
              <View flex centerV>
                <View row paddingV-vs10 paddingH-hs4>
                  <Image
                    source={images.createIcon}
                    width={moderateScale(80)}
                    height={moderateScale(80)}
                  />
                  <View marginL-vs8>
                    <BottomSheetTextInput
                      value={nameOfList}
                      onChangeText={setNameOfList}
                      placeholder="Tên danh sách"
                      style={$textInput1}
                    />
                    <View marginB-vs12 />
                    <BottomSheetTextInput
                      value={description}
                      onChangeText={setDescription}
                      placeholder="Mô tả"
                      style={$textInput2}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View marginB-vs40 />
            <View center>
              <Button
                icon={images.addIcon}
                iconSize={14}
                width={moderateScale(200)}
                tx="common.createNow"
              />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      )
    }

    return render()
  },
)

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}

const $textInput1: TextStyle = {
  fontFamily: "Poppins_400Regular",
  fontSize: moderateScale(16),
  fontWeight: "700",
  lineHeight: moderateScale(24),
}

const $textInput2: TextStyle = {
  fontFamily: "Poppins_400Regular",
  fontSize: moderateScale(14),
  fontWeight: "700",
  lineHeight: moderateScale(20),
}

const $itemStyle: ViewStyle = {
  marginTop: moderateScale(20),
  paddingHorizontal: moderateScale(8),
  paddingVertical: moderateScale(4),
  marginHorizontal: moderateScale(16),
  borderRadius: moderateScale(12),
  backgroundColor: colors.palette.orange100,
  shadowColor: colors.palette.purple700,
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 8,
}
