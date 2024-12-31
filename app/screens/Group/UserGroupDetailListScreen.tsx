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
import { shoppingLocalDATA, taskDATA } from "../mockDATA/shoppingDATA"
import { UserGroupDetailListItem } from "./components/UserGroupDetailListItem"

interface UserGroupDetailListScreenProps extends AppStackScreenProps<"UserGroupDetailList"> {}

const index = 1

export const UserGroupDetailListScreen: FC<UserGroupDetailListScreenProps> = observer(
  function UserGroupDetailListScreen() {
    const [length, setLength] = React.useState(1)

    const render = () => {
      return (
        <Screen style={$root} preset="fixed">
          <Header text={shoppingLocalDATA[index].name} leftIcon={images.backIcon} />
          <View marginT-vs12 />
          <FlatList
            data={taskDATA}
            renderItem={({ item, index }) => <UserGroupDetailListItem item={item} index={index} />}
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
            Bạn chưa được phân công mua sắm
          </Text>
          <Text fw700 h4 center color={colors.palette.neutral500}>
            Hãy tham gia hoặc tạo nhóm để nhận hoặc tạo danh sách mua sắm rồi phân công nó cho bạn
            bè
          </Text>
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
