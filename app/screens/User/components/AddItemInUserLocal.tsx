import React, { useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Icon, View, Text, TextProps, Header, SearchField, Button } from "app/components"
import { FlatList, Platform, TextInput, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { moderateScale } from "app/theme/rnuiScaling"
import { colors, typography } from "app/theme"
import { translate } from "app/i18n"
import * as images from "app/utils/images"
import { Image } from "react-native-ui-lib"
import { Food, foodDATA } from "@/screens/mockDATA/cookDATA"

export interface AddItemInUserLocalProps {
  showCreate: boolean
  setShowCreate: (showCreate: boolean) => void
}

export const AddItemInUserLocal = observer((props: AddItemInUserLocalProps) => {
  const { showCreate, setShowCreate } = props
  const [text, setText] = useState<string>("")

  const render = () => {
    return (
      <>
        <Header
          text={"Thêm sản phẩm vào danh sách"}
          rightIcon={images.goBackIcon}
          onRightPress={() => setShowCreate(!showCreate)}
        />
        <View marginH-hs16 marginV-vs12 row center>
          <View flex marginR-hs12>
            <SearchField text={text} setText={setText} placeholder="Tìm kiếm sản phẩm" />
          </View>
          <Icon
            source={images.filterIcon}
            size={moderateScale(28)}
            containerSize={moderateScale(28)}
            onPress={() => {}}
          />
        </View>
        <FlatList
          data={foodDATA}
          renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View marginT-vs12 />}
          ListFooterComponent={() => <View marginT-vs120 />}
          showsVerticalScrollIndicator={false}
        />
        <View marginB-vs12 />
        <View center style={{ marginBottom: Platform.OS === "ios" ? 0 : moderateScale(12) }}>
          <Button
            icon={images.addIcon}
            iconSize={14}
            width={moderateScale(200)}
            text={"Thêm sản phẩm"}
          />
        </View>
      </>
    )
  }

  const RenderItem = ({ item, index }: { item: Food; index: number }) => {
    const [isChecked, setChecked] = useState<boolean>(false)
    return (
      <View style={$itemStyle} marginT-vs12>
        <View flex row>
          <View flex>
            <TouchableOpacity activeOpacity={1} onPress={() => setChecked(!isChecked)}>
              <View row paddingH-hs4 paddingV-vs4>
                {renderImage(item, index)}
                <View marginL-vs8>
                  <Text fw700 h4>
                    {item.name}
                  </Text>
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Đơn vị: {item.unit.name}
                  </Text>
                  <Text fw400 h5 color={colors.palette.neutral700}>
                    Hạng mục: {item.category.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View marginR-hs4 marginT-vs8>
            {isChecked && (
              <Icon
                source={images.isCheckedIcon}
                size={moderateScale(32)}
                containerSize={moderateScale(32)}
              />
            )}
          </View>
        </View>
        {isChecked && (
          <View marginT-vs4>
            <View height={1} backgroundColor={colors.palette.neutral300} marginB-vs10 />
            <View row center>
              <Text fw700 h5 color={colors.palette.neutral700}>
                Số lượng:
              </Text>
              <View marginR-hs16 />
              <Icon
                source={images.plusIcon}
                size={moderateScale(20)}
                containerSize={moderateScale(20)}
                onPress={() => {}}
              />
              <View marginR-hs16 />
              <Text>1</Text>
              <View marginR-hs16 />
              <Icon
                source={images.minusIcon}
                size={moderateScale(18)}
                containerSize={moderateScale(18)}
                onPress={() => {}}
              />
              <View marginR-hs16 />
              <Text fw700 h5 color={colors.palette.neutral700}>
                {item.unit.name}
              </Text>
            </View>
            <View marginB-vs10 />
          </View>
        )}
      </View>
    )
  }

  const renderImage = (item: Food, index: number) => {
    return (
      <Image source={{ uri: item.imageUrl }} width={moderateScale(80)} height={moderateScale(80)} />
    )
  }

  return render()
})

const $itemStyle: ViewStyle = {
  paddingHorizontal: moderateScale(8),
  paddingVertical: moderateScale(4),
  marginHorizontal: moderateScale(16),
  borderRadius: moderateScale(12),
  backgroundColor: colors.palette.blue50,
  shadowColor: colors.palette.purple700,
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 8,
}
