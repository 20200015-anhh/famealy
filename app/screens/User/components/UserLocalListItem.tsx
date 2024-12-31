import * as React from "react"
import { observer } from "mobx-react-lite"
import { Image } from "react-native-ui-lib"
import { View } from "../../../components/View"
import { TouchableOpacity } from "react-native-gesture-handler"
import * as images from "app/utils/images"
import { moderateScale } from "@/theme/rnuiScaling"
import { Icon, Text } from "app/components"
import { ViewStyle } from "react-native"
import { colors } from "@/theme"
import { AppNavigationProps } from "@/navigators"
import { useNavigation } from "@react-navigation/native"
import { ShoppingList } from "@/screens/mockDATA/shoppingDATA"
import { format } from "date-fns"

export interface UserLocalListItemProps {
  item: ShoppingList
  index: number
}

export const UserLocalListItem = observer(function UserLocalListItem(
  props: UserLocalListItemProps,
) {
  const navigation: AppNavigationProps = useNavigation()
  const { item, index } = props

  const render = () => {
    return (
      <View row style={$itemStyle} marginT-vs12 centerV>
        <View flex centerV>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserDetailList", {
                shoppingLocalItemName: item.name,
              })
            }
          >
            <View row centerV>
              {renderImage(index)}
              <View flex marginL-vs8>
                <Text fw700 h4>
                  {item.name}
                </Text>
                <Text fw400 h6 color={colors.palette.neutral500}>
                  {format(item.updatedAt, "dd/MM/yyyy HH:mm:ss")}
                </Text>
                <Text fw400 h5>
                  {item.note}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>{renderIcon()}</View>
      </View>
    )
  }

  const renderImage = (index: number) => {
    switch (index % 7) {
      case 0:
        return (
          <Image
            source={images.shoppingIcon1}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      case 1:
        return (
          <Image
            source={images.shoppingIcon2}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      case 2:
        return (
          <Image
            source={images.shoppingIcon5}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      case 3:
        return (
          <Image
            source={images.shoppingIcon4}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      case 4:
        return (
          <Image
            source={images.shoppingIcon5}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      case 5:
        return (
          <Image
            source={images.shoppingIcon2}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      case 6:
        return (
          <Image
            source={images.shoppingIcon2}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      case 7:
        return (
          <Image
            source={images.shoppingIcon8}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
      default:
        return (
          <Image
            source={images.shoppingIcon1}
            width={moderateScale(100)}
            height={moderateScale(100)}
          />
        )
    }
  }

  const renderIcon = () => {
    return (
      <View centerV>
        <Icon source={images.editIcon} onPress={() => {}} />
        <Icon source={images.deleteIcon} onPress={() => {}} />
      </View>
    )
  }

  return render()
})

const $itemStyle: ViewStyle = {
  paddingHorizontal: moderateScale(8),
  paddingVertical: moderateScale(4),
  marginHorizontal: moderateScale(16),
  borderRadius: moderateScale(12),
  backgroundColor: colors.palette.blue50,
  shadowColor: colors.palette.purple700,
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 8,
}
