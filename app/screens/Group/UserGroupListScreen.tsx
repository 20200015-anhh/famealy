import { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Header, Screen, Text, View } from "@/components"
import { colors } from "@/theme"
import * as images from "app/utils/images"
import { Image } from "react-native-ui-lib"
import { moderateScale } from "@/theme/rnuiScaling"
import { shoppingAssignedDATA } from "../mockDATA/shoppingDATA"
import { UserGroupListItem } from "./components/UserGroupListItem"

interface UserGroupListScreenProps extends AppStackScreenProps<"UserGroupList"> {}

export const UserGroupListScreen: FC<UserGroupListScreenProps> = observer(
  function UserGroupListScreen() {
    const render = () => {
      return (
        <Screen style={$root} preset="fixed">
          <Header titleTx="listShoppingGroup.title" />
          <View marginT-vs12 />
          <FlatList
            data={shoppingAssignedDATA}
            renderItem={({ item, index }) => <UserGroupListItem item={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View marginT-vs12 />}
            ListFooterComponent={() => <View marginT-vs120 />}
            ListEmptyComponent={renderListEmpty()}
            showsVerticalScrollIndicator={false}
          />
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
          <Text fw700 h4 color={colors.palette.neutral500} center>
            Bạn hoặc nhóm của bạn tham gia chưa có danh sách mua sắm nào!
          </Text>
          <View marginB-vs4 />
          <Text fw700 h4 color={colors.palette.orange350} center>
            Hãy tạo nhóm hoặc tham gia nhóm rồi quay lại sau nhé!
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