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
import { Fridge } from "@/screens/mockDATA/cookDATA"
import { format } from "date-fns"

export interface FridgeItemProps {
  item: Fridge
  index: number
}

export const FridgeItem = observer(function FridgeItem(props: FridgeItemProps) {
  const { item, index } = props

  const render = () => {
    return (
      <View row style={$itemStyle} marginT-vs12>
        <View flex row>
          <View flex>
            <TouchableOpacity>
              <View row paddingH-hs4 paddingV-vs4>
                {renderImage()}
                <View marginL-vs8 flex>
                  <Text fw700 h4>
                    {item.food.name}
                  </Text>
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Số lượng: {item.quantity}
                  </Text>
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Đơn vị: {item.food.unit.name}
                  </Text>
                  {item.expiryDate ? (
                    <Text fw400 h5 color={colors.palette.neutral700}>
                      Thời hạn đến: {format(new Date(item.expiryDate), "dd/MM/yyyy HH:mm:ss")}
                    </Text>
                  ) : (
                    <Text fw400 h5 color={colors.palette.neutral700}>
                      Thời hạn: Không thời hạn
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>{renderIcon()}</View>
      </View>
    )
  }

  const renderImage = () => {
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
