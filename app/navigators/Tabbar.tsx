import React, { FC } from "react"
import { ImageStyle, Platform, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors } from "../theme"
import { View, Icon } from "../components"
import { TxKeyPath } from "../i18n"
import { AppStackParamList } from "./AppNavigator"
import { designSystemTypo } from "app/theme/rnuiTheme"
import {
  GroupListScreen,
  RecipeScreen,
  UserGroupListScreen,
  UserLocalListScreen,
  UserProfileScreen,
} from "app/screens"
import { moderateScale, screenWidth } from "app/theme/rnuiScaling"
import LinearGradient from "react-native-linear-gradient"

const groupList = require("../../assets/app/tabbar/group-list.png")
const groupListActive = require("../../assets/app/tabbar/group-list-active.png")
const userList = require("../../assets/app/tabbar/user-list.png")
const userListActive = require("../../assets/app/tabbar/user-list-active.png")
const profile = require("../../assets/app/tabbar/profile.png")
const profileActive = require("../../assets/app/tabbar/profile-active.png")
const recipe = require("../../assets/app/tabbar/recipe.png")
const recipeActive = require("../../assets/app/tabbar/recipe-active.png")
const group = require("../../assets/app/tabbar/group.png")
const groupActive = require("../../assets/app/tabbar/group-active.png")

export type TabbarScreenParams = {
  tabbar?: { screenName: TabbarType }
}

export type TabbarStackParamList = {
  recipe?: undefined
  listGroup?: undefined
  listShoppingUser?: undefined
  listShoppingGroup?: undefined
  profile?: undefined
}

export type TabbarParamList = AppStackParamList & TabbarScreenParams

export type TabbarScreenProps<T extends keyof TabbarParamList> = BottomTabScreenProps<
  TabbarParamList,
  T
>

type ScreenType = React.ComponentType<{ route: any; navigation: any }>

const Tab = createBottomTabNavigator<TabbarParamList>()
type TabbarType = "recipe" | "listGroup" | "listShoppingUser" | "listShoppingGroup" | "profile"

export const Tabbar: FC<TabbarScreenProps<any>> = observer(function Tabbar() {
  const render = () => {
    return (
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: colors.palette.background50 }}
        screenOptions={{
          tabBarStyle: $tabbarStyle,
          tabBarLabelStyle: { ...designSystemTypo.captionRegular },
          tabBarIconStyle: {
            width: 24,
            height: 24,
            marginTop: Platform.OS === "web" ? 0 : 12,
          },
          tabBarActiveTintColor: colors.palette.purple600,
          tabBarInactiveTintColor: colors.palette.neutral600,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarBackground: renderTabBarBackground,
        }}
      >
        {renderTabbarItem("listShoppingUser")}
        {renderTabbarItem("listShoppingGroup")}
        {renderTabbarItem("listGroup")}
        {renderTabbarItem("recipe")}
        {renderTabbarItem("profile")}
      </Tab.Navigator>
    )
  }

  const renderTabBarBackground = () => {
    return (
      <LinearGradient colors={colors.palette.linearDecor2000}>
        <View height={200} />
      </LinearGradient>
    )
  }

  const renderTabbarItem = (type: TabbarType) => {
    return (
      <Tab.Screen
        name={type}
        component={componentWithType(type)}
        options={{
          tabBarLabel: ({ focused }) => titleWithType(type, focused),
          tabBarIcon: ({ focused }) => renderTabbarIcon(type, focused),
        }}
      />
    )
  }

  const renderTabbarIcon = (type: TabbarType, focused: boolean) => {
    return <>{iconWithType(type, focused)}</>
  }

  const componentWithType = (type: TabbarType) => {
    switch (type) {
      case "recipe":
        return RecipeScreen as ScreenType
      case "listGroup":
        return GroupListScreen as ScreenType
      case "listShoppingUser":
        return UserLocalListScreen as ScreenType
      case "listShoppingGroup":
        return UserGroupListScreen as ScreenType
      case "profile":
        return UserProfileScreen as ScreenType
    }
  }

  const titleWithType = (type: TabbarType, focused: boolean) => {
    const tx = ("tabbar." + type) as TxKeyPath
    return ""
  }

  const iconWithType = (type: TabbarType, focused: boolean) => {
    switch (type) {
      case "recipe":
        return focused ? (
          <Icon source={recipeActive} size={moderateScale(30)} containerSize={moderateScale(30)} />
        ) : (
          <Icon source={recipe} size={moderateScale(20)} containerSize={moderateScale(20)} />
        )
      case "listGroup":
        return focused ? (
          <Icon source={groupActive} size={moderateScale(30)} containerSize={moderateScale(30)} />
        ) : (
          <Icon source={group} size={moderateScale(20)} containerSize={moderateScale(20)} />
        )
      case "listShoppingUser":
        return focused ? (
          <Icon
            source={userListActive}
            size={moderateScale(30)}
            containerSize={moderateScale(30)}
          />
        ) : (
          <Icon source={userList} size={moderateScale(20)} containerSize={moderateScale(20)} />
        )
      case "listShoppingGroup":
        return focused ? (
          <Icon
            source={groupListActive}
            size={moderateScale(30)}
            containerSize={moderateScale(30)}
          />
        ) : (
          <Icon source={groupList} size={moderateScale(20)} containerSize={moderateScale(20)} />
        )
      case "profile":
        return focused ? (
          <Icon source={profileActive} size={moderateScale(30)} containerSize={moderateScale(30)} />
        ) : (
          <Icon source={profile} size={moderateScale(20)} containerSize={moderateScale(20)} />
        )
    }
  }

  return render()
}) as FC<TabbarScreenProps<any>>

const $tabbarStyle: ViewStyle = {
  shadowColor: colors.palette.neutral100,
  shadowOffset: { width: 0, height: 6 },
  shadowRadius: 12,
  shadowOpacity: 0.25,
  borderTopWidth: 1,
  backgroundColor: colors.palette.background50,
  borderTopColor: colors.palette.neutral100,
  width: screenWidth,
}

const $backgroundStyle: ImageStyle = {
  position: "relative",
  top: -22,
  width: "100%",
  height: "140%",
}
