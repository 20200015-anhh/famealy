import { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, Platform, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import {
  Button,
  Header,
  Icon,
  SafeAreaViewBottom,
  Screen,
  SearchField,
  Text,
  View,
} from "@/components"
import { colors } from "@/theme"
import * as images from "app/utils/images"
import { moderateScale } from "@/theme/rnuiScaling"
import { Image } from "react-native-ui-lib"
import React from "react"
import { AddItemInUserLocal } from "./components/AddItemInUserLocal"
import { UserLocalDetailListItem } from "./components/UserLocalDetailListItem"
import { FloatingButton } from "@/components/FloatingButton"
import { ShoppingList, shoppingLocalDATA, taskDATA } from "../mockDATA/shoppingDATA"
import { useRoute } from "@react-navigation/native"

interface UserDetailListScreenProps extends AppStackScreenProps<"UserDetailList"> {}

const index = 1

export const UserDetailListScreen: FC<UserDetailListScreenProps> = observer(
  function UserDetailListScreen() {
    const route = useRoute()
    const { shoppingLocalItemName } = route.params as {
      shoppingLocalItemName: string
    }
    const [showCreate, setShowCreate] = React.useState(false)
    const [length, setLength] = React.useState(1)

    const render = () => {
      return (
        <Screen style={$root} preset="fixed">
          {showCreate && (
            <AddItemInUserLocal showCreate={showCreate} setShowCreate={setShowCreate} />
          )}
          <>
            {!showCreate && (
              <>
                <Header
                  text={shoppingLocalItemName}
                  leftIcon={images.backIcon}
                  rightIcon={images.addToCartIcon2}
                  onRightPress={() => setShowCreate(!showCreate)}
                />
                <View marginT-vs12 />
                <FlatList
                  data={taskDATA}
                  renderItem={({ item, index }) => (
                    <UserLocalDetailListItem item={item} index={index} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={() => <View marginT-vs12 />}
                  ListFooterComponent={() => <View marginT-vs120 />}
                  ListEmptyComponent={renderListEmpty()}
                  showsVerticalScrollIndicator={false}
                />
                {length > 0 && (
                  <View marginT-vs12 centerH>
                    <Button width={moderateScale(200)} text="Cập nhật" />
                  </View>
                )}
              </>
            )}
          </>
          <SafeAreaViewBottom />
        </Screen>
      )
    }

    const renderListEmpty = () => {
      return (
        <View center height={moderateScale(400)} marginH-hs20>
          <Image
            source={images.shoppingIcon1}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
          <View marginB-vs4 />
          <Text fw700 h4 center color={colors.palette.neutral500}>
            Danh sách mua sắm của bạn chưa có sản phẩm nào!
          </Text>
          <Text fw700 h4 center color={colors.palette.neutral500}>
            Hãy thêm sản phẩm vào danh sách ngay nào!
          </Text>
          <View marginB-vs12 />
          <Button
            icon={images.addToCartIcon2}
            iconSize={20}
            width={moderateScale(200)}
            tx="common.createNow"
            onPress={() => setShowCreate(!showCreate)}
          />
        </View>
      )
    }

    return render()
  },
)

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}

const $bottomSheet: ViewStyle = {
  flex: 1,
}
