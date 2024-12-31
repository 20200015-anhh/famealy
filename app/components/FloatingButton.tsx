import React from "react"
import { observer } from "mobx-react-lite"
import { Icon, View } from "app/components"
import { TouchableOpacity, ViewStyle } from "react-native"
import { moderateScale } from "app/theme/rnuiScaling"
import * as images from "app/utils/images"

export interface FloatingButtonProps {
  onPress?: () => void
}

export const FloatingButton = observer((props: FloatingButtonProps) => {
  const render = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View absB absR style={$floatingButton} br100>
          <Icon
            source={images.floatingButton}
            size={moderateScale(60)}
            containerSize={moderateScale(60)}
          />
        </View>
      </TouchableOpacity>
    )
  }

  return render()
})

const $floatingButton: ViewStyle = {
  bottom: moderateScale(20),
  right: moderateScale(20),
}
