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
import { Recipe } from "@/screens/mockDATA/cookDATA"

const loveIcon = require("../../../../assets/app/recipe/love-icon.png")
const loveIconActive = require("../../../../assets/app/recipe/love-icon-active.png")

export interface RecipeListItemProps {
  item: Recipe
  index: number
}

export const RecipeListItem = observer(function RecipeListItem(props: RecipeListItemProps) {
  const { item, index } = props
  const [love, setLove] = React.useState(item.isFavourite)
  const render = () => {
    return (
      <View row style={$itemStyle} marginT-vs12>
        <View flex row>
          <View flex>
            <TouchableOpacity>
              <View row paddingH-hs4 paddingV-vs4>
                {renderImage()}
                <View marginL-vs8>
                  <Text fw700 h4>
                    {item.name}
                  </Text>
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Mô tả: {item.description}
                  </Text>
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Nguyên liệu bao gồm:
                  </Text>
                  {item.ingredients.map((item, index) => {
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
          <View marginR-hs4 marginT-vs8>
            <Icon
              source={love ? loveIconActive : loveIcon}
              size={moderateScale(28)}
              containerSize={moderateScale(28)}
              onPress={() => setLove(!love)}
            />
          </View>
        </View>
      </View>
    )
  }

  const renderImage = () => {
    return (
      <Image source={{ uri: item.imageUrl }} width={moderateScale(80)} height={moderateScale(80)} />
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
