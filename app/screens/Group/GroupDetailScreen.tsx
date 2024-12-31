import { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ScrollView, TouchableOpacity, ViewStyle } from "react-native"
import { AppNavigationProps, AppStackScreenProps } from "@/navigators"
import { Header, Icon, SafeAreaViewBottom, Screen, Text, View } from "@/components"
import { colors } from "@/theme"
import * as images from "app/utils/images"
import { Image } from "react-native-ui-lib"
import { moderateScale } from "@/theme/rnuiScaling"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Group } from "../mockDATA/userGroupDATA"

export const featureData = [
  {
    icon: images.shoppingListIcon,
    title: "Danh sách phân công mua sắm",
    navigate: "GroupAssignList",
  },
  {
    icon: images.fridgeIcon,
    title: "Tủ lạnh",
    navigate: "Fridge",
  },
  {
    icon: images.menuIcon,
    title: "Danh sách món ăn dự kiến",
    navigate: "ExpectedFoodList",
  },
  {
    icon: images.reportIcon,
    title: "Thống kê báo cáo",
    navigate: "Report",
  },
]

interface GroupDetailScreenProps extends AppStackScreenProps<"GroupDetail"> {}

export const GroupDetailScreen: FC<GroupDetailScreenProps> = observer(function GroupDetailScreen() {
  const route = useRoute()
  const { groupItem } = route.params as {
    groupItem: Group
  }
  const navigation: AppNavigationProps = useNavigation()
  const render = () => {
    return (
      <Screen style={$root} preset="fixed">
        <Header titleTx="listShoppingGroup.detail" leftIcon={images.backIcon} />
        <View flex>
          <ScrollView>
            <View centerH marginV-vs20>
              <Image
                source={images.groupIcon1}
                width={moderateScale(100)}
                height={moderateScale(100)}
              />
              <View marginB-vs12 />
              <Text fw700 h3 color={colors.palette.purple900}>
                {groupItem.name}
              </Text>
              <View marginB-vs8 />
              <Text fw700 h5 color={colors.palette.purple600}>
                Trường nhóm: {groupItem.host.name}
              </Text>
              <View marginB-vs12 />
            </View>
            <View>
              <FlatList
                data={featureData}
                renderItem={({ item, index }) => renderItem(item, index)}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View
              marginV-vs20
              marginH-hs16
              backgroundColor={colors.palette.blue200}
              paddingH-hs12
              paddingV-vs12
              br30
            >
              <Text fw700 h5 color={colors.palette.purple900}>
                Thành viên:{" "}
              </Text>
              <View marginB-vs8 />
              {groupItem.userGroup.map((item, index) => {
                return (
                  <View key={index.toString()}>
                    <View height={moderateScale(1)} backgroundColor={colors.palette.neutral300} />
                    <View row centerV marginV-vs8>
                      {item.photoUrl ? (
                        <View br100 style={{ overflow: "hidden" }} backgroundColor="red">
                          <Icon
                            source={{ uri: item.photoUrl }}
                            size={moderateScale(32)}
                            containerSize={moderateScale(32)}
                          />
                        </View>
                      ) : (
                        <Icon
                          source={images.defaultAvatar}
                          size={moderateScale(32)}
                          containerSize={moderateScale(32)}
                        />
                      )}
                      <View marginR-hs8 />
                      <Text>{item.name}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </ScrollView>
        </View>
        <SafeAreaViewBottom />
      </Screen>
    )
  }

  const renderItem = (item: any, index: number) => {
    return (
      <View centerH width={moderateScale(180)} style={$itemStyle(index)}>
        <View marginV-vs40 centerH flex marginH-hs16>
          <Image source={item.icon} width={moderateScale(80)} height={moderateScale(80)} />
          <View marginB-vs24 />
          <Text fw700 h5 color={colors.palette.blue700} center>
            {item.title}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate(item.navigate)}>
            <View
              style={{ borderWidth: 2, borderColor: colors.palette.negative500 }}
              br20
              paddingH-hs12
              paddingV-vs8
              backgroundColor={colors.palette.negative100}
            >
              <Text fw700 h5 color={colors.palette.negative500} center>
                Chi tiết
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View marginB-vs24 />
      </View>
    )
  }

  return render()
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}

const $itemStyle = (index: number): ViewStyle => ({
  marginLeft: index === 0 ? moderateScale(20) : 0,
  marginRight: moderateScale(20),
  marginBottom: moderateScale(20),
  backgroundColor: colors.palette.yellow300,
  borderRadius: moderateScale(10),
  shadowColor: colors.palette.blue700,
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 8,
})
