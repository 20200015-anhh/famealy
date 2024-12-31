import { FC, useRef } from "react"
import { observer } from "mobx-react-lite"
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Header, Screen, Text, View } from "@/components"
import { GroupListItem } from "./components/GroupListItem"
import { moderateScale } from "@/theme/rnuiScaling"
import { Image } from "react-native-ui-lib"
import { colors } from "@/theme"
import * as images from "app/utils/images"
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated"
import React from "react"
import { groupDATA } from "../mockDATA/userGroupDATA"

interface GroupListScreenProps extends AppStackScreenProps<"GroupList"> {}

export const GroupListScreen: FC<GroupListScreenProps> = observer(function GroupListScreen() {
  const flatListRef = useRef<FlatList>(null)
  const animatedValue = useSharedValue(0)

  const render = () => {
    return (
      <Screen style={$root} preset="fixed">
        <Header titleTx="listGroup.title" />
        {renderCreateOrJoin()}
        <View marginT-vs8 />
        <FlatList
          ref={flatListRef}
          onScroll={handleScroll}
          data={groupDATA}
          renderItem={({ item, index }) => <GroupListItem item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View marginT-vs12 />}
          ListFooterComponent={() => <View marginT-vs120 />}
          ListEmptyComponent={renderListEmpty()}
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    )
  }

  const renderListEmpty = () => {
    return (
      <View center height={moderateScale(400)}>
        <Image source={images.groupIcon3} width={moderateScale(100)} height={moderateScale(100)} />
        <View marginB-vs4 />
        <Text fw700 h4 color={colors.palette.neutral500}>
          Bạn chưa có nhóm nào!
        </Text>
        <Text fw400 h5 center>
          Hãy tạo nhóm cho mình hoặc tham gia nhóm cùng những bạn khác
        </Text>
      </View>
    )
  }
  const $animatedContainerStyle = useAnimatedStyle(() => ({
    flexDirection: "row",
    justifyContent: "space-between",
  }))

  const $animatedViewStyle = useAnimatedStyle(() => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: interpolate(animatedValue.value, [0, 100], [100, 40], Extrapolation.CLAMP),
    backgroundColor: colors.palette.blue200,
    marginHorizontal: 16,
    marginTop: interpolate(animatedValue.value, [0, 100], [20, 8], Extrapolation.CLAMP),
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.palette.purple300,
  }))

  const $animatedImageStyle = useAnimatedStyle(() => ({
    height: interpolate(animatedValue.value, [0, 100], [40, 0], Extrapolation.CLAMP),
    width: interpolate(animatedValue.value, [0, 100], [40, 0], Extrapolation.CLAMP),
    opacity: interpolate(animatedValue.value, [0, 100], [1, 0], Extrapolation.CLAMP),
    marginBottom: interpolate(animatedValue.value, [0, 100], [8, 0], Extrapolation.CLAMP),
  }))

  const $animatedImageStyle2 = useAnimatedStyle(() => ({
    height: interpolate(animatedValue.value, [0, 100], [0, 20], Extrapolation.CLAMP),
    width: interpolate(animatedValue.value, [0, 100], [0, 20], Extrapolation.CLAMP),
    opacity: interpolate(animatedValue.value, [0, 100], [0, 1], Extrapolation.CLAMP),
    marginRight: interpolate(animatedValue.value, [0, 100], [0, 4], Extrapolation.CLAMP),
  }))

  const renderCreateOrJoin = () => {
    return (
      <Animated.View style={$animatedContainerStyle}>
        <Animated.View style={$animatedViewStyle}>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }}
            onPress={createGroup}
          >
            <View center>
              <Animated.Image source={images.createGroup1} style={$animatedImageStyle} />
              <Animated.View style={{ flexDirection: "row", alignItems: "center" }}>
                <Animated.Image source={images.createGroup2} style={$animatedImageStyle2} />
                <Text fw700 h5>
                  Tạo nhóm
                </Text>
              </Animated.View>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={$animatedViewStyle}>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }}
            onPress={joinGroup}
          >
            <View center>
              <Animated.Image source={images.joinGroup1} style={$animatedImageStyle} />
              <Animated.View style={{ flexDirection: "row", alignItems: "center" }}>
                <Animated.Image source={images.joinGroup2} style={$animatedImageStyle2} />
                <Text fw700 h5>
                  Tham gia nhóm
                </Text>
              </Animated.View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    )
  }

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y
    animatedValue.value = offsetY
  }

  const createGroup = () => {}

  const joinGroup = () => {}

  return render()
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.positive50,
}
