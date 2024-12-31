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
import { Meal, Recipe } from "@/screens/mockDATA/cookDATA"
import { format } from "date-fns/format"

const loveIcon = require("../../../../assets/app/recipe/love-icon.png")
const loveIconActive = require("../../../../assets/app/recipe/love-icon-active.png")

export interface ExpectedFoodListItemProps {
  item: Meal
  index: number
}

export const ExpectedFoodListItem = observer(function ExpectedFoodListItem(
  props: ExpectedFoodListItemProps,
) {
  const { item, index } = props
  const [love, setLove] = React.useState(false)
  const render = () => {
    return (
      <View row style={$itemStyle} marginT-vs12>
        <View flex row>
          <View flex>
            <TouchableOpacity>
              <View row paddingH-hs4 paddingV-vs4>
                {renderImage(index)}
                <View marginL-vs8 flex>
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Trạng thái: {item.status}
                  </Text>
                  {item.timeStamps ? (
                    <Text fw400 h5 color={colors.palette.neutral700}>
                      Dự kiến dùng bữa: {format(new Date(item.timeStamps), "dd/MM/yyyy HH:mm:ss")}
                    </Text>
                  ) : null}
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Bữa ăn bao gồm:
                  </Text>
                  {item.foods.map((item, index) => {
                    return (
                      <View key={index.toString()}>
                        <Text fw400 h5 color={colors.palette.neutral700}>
                          {item.name} - Đơn vị: {item.unit.name}
                        </Text>
                      </View>
                    )
                  })}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>{renderIcon()}</View>
      </View>
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

  const renderImage = (index: number) => {
    switch (index % 4) {
      case 0:
        return (
          <Image source={images.mealIcon1} width={moderateScale(90)} height={moderateScale(90)} />
        )
      case 1:
        return (
          <Image source={images.mealIcon2} width={moderateScale(90)} height={moderateScale(90)} />
        )
      case 2:
        return (
          <Image source={images.mealIcon3} width={moderateScale(90)} height={moderateScale(90)} />
        )
      case 3:
        return (
          <Image source={images.mealIcon4} width={moderateScale(90)} height={moderateScale(90)} />
        )
      default:
        return (
          <Image source={images.mealIcon1} width={moderateScale(90)} height={moderateScale(90)} />
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
