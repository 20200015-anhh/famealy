import { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ScrollView, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Button, Header, Icon, Screen, SearchField, Text, View } from "@/components"
import { colors } from "@/theme"
import { moderateScale } from "@/theme/rnuiScaling"
import * as images from "app/utils/images"
import { mealDATA } from "../mockDATA/cookDATA"
import { ExpectedFoodListItem } from "./components/ExpectedFoodListItem"

interface ExpectedFoodListScreenProps extends AppStackScreenProps<"ExpectedFoodList"> {}

export const ExpectedFoodListScreen: FC<ExpectedFoodListScreenProps> = observer(
  function ExpectedFoodListScreen() {
    const [text, setText] = useState<string>("")

    const render = () => {
      return (
        <Screen style={$root} preset="fixed">
          <Header text="Danh sách bữa ăn dự kiến" leftIcon={images.backIcon} />
          <FlatList
            data={mealDATA}
            renderItem={({ item, index }) => <ExpectedFoodListItem item={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View marginT-vs12 />}
            ListFooterComponent={() => <View marginT-vs120 />}
            showsVerticalScrollIndicator={false}
          />
        </Screen>
      )
    }

    return render()
  },
)

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}
