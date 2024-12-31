/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { NavigationContainer } from "@react-navigation/native"
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite" // @mst remove-current-line
import * as Screens from "@/screens"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { useAppTheme, useThemeProvider } from "@/utils/useAppTheme"
import { ComponentProps } from "react"
import { colors } from "@/theme"
import { Tabbar, TabbarScreenParams, TabbarStackParamList } from "./Tabbar"
import { useStores } from "@/models"
import { Group } from "@/screens/mockDATA/userGroupDATA"
import { ShoppingList } from "@/screens/mockDATA/shoppingDATA"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = TabbarStackParamList & {
  Welcome: undefined
  Tabbar: TabbarScreenParams
  // 🔥 Your screens go here
  Auth: undefined
  GroupList: undefined
  GroupDetail: { groupItem: Group } | undefined
  UserLocalList: undefined
  UserGroupList: undefined
  Recipe: undefined
  UserProfile: undefined
  UserDetailList: { shoppingLocalItemName: string } | undefined
  UserGroupDetailList: undefined
  GroupAssignList: undefined
	Fridge: undefined
	ExpectedFoodList: undefined
	Report: undefined
	// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

export type AppNavigationProps = NativeStackNavigationProp<AppStackParamList>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

// @mst replace-next-line const AppStack = () => {
const AppStack = observer(function AppStack() {
  const disableSwipeBack = { gestureEnabled: false }
  const { authStore } = useStores()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, navigationBarColor: colors.background }}>
      {/* <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} /> */}

      {authStore.isAuthenticated ? (
        <Stack.Screen name="Tabbar" component={Tabbar} options={disableSwipeBack} />
      ) : (
        <Stack.Screen name="Auth" component={Screens.AuthScreen} options={disableSwipeBack} />
      )}

      {/* @demo remove-block-end */}
      {/** 🔥 Your screens go here */}

      <Stack.Screen name="GroupList" component={Screens.GroupListScreen} />
      <Stack.Screen name="GroupDetail" component={Screens.GroupDetailScreen} />
      <Stack.Screen name="UserLocalList" component={Screens.UserLocalListScreen} />
      <Stack.Screen name="UserGroupList" component={Screens.UserGroupListScreen} />
      <Stack.Screen name="Recipe" component={Screens.RecipeScreen} />
      <Stack.Screen name="UserProfile" component={Screens.UserProfileScreen} />
      <Stack.Screen name="UserDetailList" component={Screens.UserDetailListScreen} />
      <Stack.Screen name="UserGroupDetailList" component={Screens.UserGroupDetailListScreen} />
      <Stack.Screen name="GroupAssignList" component={Screens.GroupAssignListScreen} />
			<Stack.Screen name="Fridge" component={Screens.FridgeScreen} />
			<Stack.Screen name="ExpectedFoodList" component={Screens.ExpectedFoodListScreen} />
			<Stack.Screen name="Report" component={Screens.ReportScreen} />
			{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
    </Stack.Navigator>
  )
  // @mst replace-next-line }
})

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> {}

// @mst replace-next-line export const AppNavigator = (props: NavigationProps) => {
export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const { themeScheme, navigationTheme, setThemeContextOverride, ThemeProvider } =
    useThemeProvider()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <ThemeProvider value={{ themeScheme, setThemeContextOverride }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme} {...props}>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  )
  // @mst replace-next-line }
})
