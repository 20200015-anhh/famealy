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
import { Group } from "@/screens/mockDATA/userGroupDATA"

export interface GroupListItemProps {
  item: Group
  index: number
}

export const GroupListItem = observer(function GroupListItem(props: GroupListItemProps) {
  const { item, index } = props
  const navigation: AppNavigationProps = useNavigation()
  const render = () => {
    return (
      <View row style={$itemStyle} marginT-vs12>
        <View flex centerV>
          <TouchableOpacity onPress={() => navigation.navigate("GroupDetail", { groupItem: item })}>
            <View row>
              {renderImage(index)}
              <View marginL-vs8>
                <Text fw700 h4>
                  {item.name}
                </Text>
                <Text fw400 h5>
                  Trưởng nhóm: {item.host.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderImage = (index: number) => {
    switch (index % 4) {
      case 0:
        return (
          <Image source={images.groupIcon1} width={moderateScale(80)} height={moderateScale(80)} />
        )
      case 1:
        return (
          <Image source={images.groupIcon2} width={moderateScale(80)} height={moderateScale(80)} />
        )
      case 2:
        return (
          <Image source={images.groupIcon3} width={moderateScale(80)} height={moderateScale(80)} />
        )
      case 3:
        return (
          <Image source={images.groupIcon4} width={moderateScale(80)} height={moderateScale(80)} />
        )
      default:
        return (
          <Image source={images.groupIcon3} width={moderateScale(80)} height={moderateScale(80)} />
        )
    }
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
