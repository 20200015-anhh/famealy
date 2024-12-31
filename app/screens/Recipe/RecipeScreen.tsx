import { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ScrollView, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Button, Header, Icon, Screen, SearchField, Text, View } from "@/components"
import { useStores } from "@/models"
import { colors } from "@/theme"
import { moderateScale } from "@/theme/rnuiScaling"
import * as images from "app/utils/images"
import { RecipeListItem } from "./components/RecipeListItem"
import { recipeDATA } from "../mockDATA/cookDATA"

interface RecipeScreenProps extends AppStackScreenProps<"Recipe"> {}

export const RecipeScreen: FC<RecipeScreenProps> = observer(function RecipeScreen() {
  const [text, setText] = useState<string>("")
  const render = () => {
    return (
      <Screen style={$root} preset="fixed">
        <Header titleTx="recipe.title" />
        <View marginH-hs16 marginV-vs12 row center>
          <View flex marginR-hs12>
            <SearchField text={text} setText={setText} placeholder="Tìm kiếm công thức" />
          </View>
          <Icon
            source={images.filterIcon}
            size={moderateScale(28)}
            containerSize={moderateScale(28)}
            onPress={() => {}}
          />
        </View>
        <FlatList
          data={recipeDATA}
          renderItem={({ item, index }) => <RecipeListItem item={item} index={index} />}
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
