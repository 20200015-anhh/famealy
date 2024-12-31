import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps as BaseBottomSheetProps,
} from "@gorhom/bottom-sheet"
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types"
import * as React from "react"
import { ViewStyle } from "react-native"
import { colors } from "../theme"
import { View } from "./View"
import { moderateScale } from "@/theme/rnuiScaling"

export interface BottomSheetProps {
  children?: React.ReactNode
  snapPoints?: (string | number)[]
  otherProps?: Partial<BaseBottomSheetProps>
  backdropBehavior?: "none" | "close" | "collapse" | number
  onDismiss?: () => void
}

export const BottomSheet = React.forwardRef(function BottomSheet(
  props: BottomSheetProps,
  ref: React.Ref<BottomSheetModalMethods>,
) {
  const { children, snapPoints, otherProps, backdropBehavior, onDismiss } = props

  const defaultSnapPoints = React.useMemo(() => ["60%"], [])
  const points = snapPoints || defaultSnapPoints

  return (
    <BottomSheetModal
      ref={ref}
      onDismiss={onDismiss}
      index={1}
      snapPoints={points}
      handleComponent={null}
      // need this attribute `android_keyboardInputMode` because bug bottom sheet will resize
      // when app become active from background to foreground in android.
      android_keyboardInputMode={"adjustResize"}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          pressBehavior={backdropBehavior || "close"}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...backdropProps}
        />
      )}
      style={$border}
      backgroundStyle={$backgroundStyle}
      {...otherProps}
    >
      <View centerH>
        <View
          marginT-vs8
          height={moderateScale(4)}
          width={moderateScale(50)}
          backgroundColor={colors.palette.neutral500}
          br100
        />
      </View>
      {children}
    </BottomSheetModal>
  )
})

const $border: ViewStyle = {
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  overflow: "hidden",
}

const $backgroundStyle: ViewStyle = {
  backgroundColor: colors.palette.blue50,
}
