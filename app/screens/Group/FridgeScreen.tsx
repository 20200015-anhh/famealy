import { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ScrollView, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Button, Header, Icon, Screen, SearchField, Text, View } from "@/components"
import { useStores } from "@/models"
import { colors } from "@/theme"
import { moderateScale } from "@/theme/rnuiScaling"
import * as images from "app/utils/images"
import { fridgeDATA, recipeDATA } from "../mockDATA/cookDATA"
import { FridgeItem } from "./components/FridgeItem"

interface FridgeScreenProps extends AppStackScreenProps<"Fridge"> {}

export const FridgeScreen: FC<FridgeScreenProps> = observer(function FridgeScreen() {
  const [text, setText] = useState<string>("")
  const render = () => {
    return (
      <Screen style={$root} preset="fixed">
        <Header text="Tủ lạnh" leftIcon={images.backIcon} />
        <View marginH-hs16 marginV-vs12 row center>
          <View flex marginR-hs12>
            <SearchField text={text} setText={setText} placeholder="Tìm kiếm đồ trong tủ lạnh" />
          </View>
        </View>
        <FlatList
          data={fridgeDATA}
          renderItem={({ item, index }) => <FridgeItem item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View marginT-vs12 />}
          ListFooterComponent={() => <View marginT-vs120 />}
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    )
  }

  return render()
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}
