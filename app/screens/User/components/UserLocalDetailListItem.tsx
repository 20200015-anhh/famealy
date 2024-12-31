import * as React from "react"
import { observer } from "mobx-react-lite"
import { Image } from "react-native-ui-lib"
import { View } from "../../../components/View"
import { TouchableOpacity } from "react-native-gesture-handler"
import * as images from "app/utils/images"
import { moderateScale } from "@/theme/rnuiScaling"
import { Button, Icon, Text } from "app/components"
import { ViewStyle } from "react-native"
import { colors } from "@/theme"
import { AppNavigationProps } from "@/navigators"
import { useNavigation } from "@react-navigation/native"
import { Task } from "@/screens/mockDATA/shoppingDATA"

export interface UserLocalDetailListItemProps {
  item: Task
  index: number
}

export const UserLocalDetailListItem = observer(function UserLocalDetailListItem(
  props: UserLocalDetailListItemProps,
) {
  const navigation: AppNavigationProps = useNavigation()
  const { item, index } = props
  const [marked, setMarked] = React.useState(item.marked)
  const render = () => {
    return (
      <>
        <View row style={$itemStyle(marked)} marginT-vs12 centerV>
          <View flex centerV>
            <TouchableOpacity onPress={() => setMarked(!marked)}>
              <View row centerV>
                {renderImage(item, index)}
                <View marginL-vs8>
                  <Text fw700 h4>
                    {item.food.name}
                  </Text>
                  <Text fw400 h5>
                    Số lượng: {item.quantity}
                  </Text>
                  <Text fw400 h6 color={colors.palette.neutral500}>
                    Đơn vị: {item.food.unit.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>{renderIcon()}</View>
        </View>
      </>
    )
  }

  const renderImage = (item: Task, index: number) => {
    return (
      <Image
        source={{ uri: item.food.imageUrl }}
        width={moderateScale(80)}
        height={moderateScale(80)}
      />
    )
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

const $itemStyle = (marked: boolean): ViewStyle => ({
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
  borderWidth: marked ? moderateScale(3) : 0,
  borderColor: colors.palette.positive350,
})
