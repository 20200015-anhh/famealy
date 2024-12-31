import { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Header, Screen, Text, View } from "@/components"
import { colors } from "@/theme"
import * as images from "app/utils/images"

interface ReportScreenProps extends AppStackScreenProps<"Report"> {}

export const ReportScreen: FC<ReportScreenProps> = observer(function ReportScreen() {
  return (
    <Screen style={$root} preset="fixed">
      <Header text="Thống kê báo cáo" leftIcon={images.backIcon} />
      <View marginT-vs12 />
      <Text text="Thống kê báo cáo" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}
