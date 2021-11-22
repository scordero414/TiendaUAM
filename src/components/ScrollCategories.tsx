import { HStack, IconButton, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { COLORS } from "../resources/Constants";
import { MaterialIcons, Ionicons, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export const ScrollCategories = () => {
  return (
    <ScrollView horizontal={true}>
      <HStack space={5} mx={3} my={3}>
        <VStack alignItems="center">
          <IconButton
            bgColor={COLORS.WHITE}
            variant="solid"
            size="60"
            borderRadius={100}
            alignItems="center"
            justifyContent="center"
            shadow={"9"}
            _icon={{
              as: Ionicons,
              name: "md-man-sharp",
              size: "lg",
              color: COLORS.LIGHT_GRAY,
            }}
          />
          <Text mt={2}> Hombre</Text>
        </VStack>

        <VStack alignItems="center">
          <IconButton
            bgColor={COLORS.WHITE}
            variant="solid"
            size="60"
            borderRadius={100}
            alignItems="center"
            justifyContent="center"
            shadow={"9"}
            _icon={{
                as: Ionicons,
                name: "md-woman",
                size: "lg",
                color: COLORS.LIGHT_GRAY,
              }}
          />
          <Text mt={2}> Mujer</Text>
        </VStack>
        <VStack alignItems="center">
          <IconButton
            bgColor={COLORS.WHITE}
            variant="solid"
            size="60"
            borderRadius={100}
            alignItems="center"
            justifyContent="center"
            shadow={"9"}
            _icon={{
                as: MaterialCommunityIcons,
                name: "doctor",
                size: "lg",
                color: COLORS.LIGHT_GRAY,
              }}
          />
          <Text mt={2}> Uniformes</Text>
        </VStack>
        <VStack alignItems="center">
          <IconButton
            bgColor={COLORS.WHITE}
            variant="solid"
            size="60"
            borderRadius={100}
            alignItems="center"
            justifyContent="center"
            shadow={"9"}
            _icon={{
                as: AntDesign,
                name: "gift",
                size: "lg",
                color: COLORS.LIGHT_GRAY,
              }}
          />
          <Text mt={2}> Souvenirs</Text>
        </VStack>
        <VStack alignItems="center">
          <IconButton
            bgColor={COLORS.WHITE}
            variant="solid"
            size="60"
            borderRadius={100}
            alignItems="center"
            justifyContent="center"
            shadow={"9"}
            _icon={{
                as: AntDesign,
                name: "gift",
                size: "lg",
                color: COLORS.LIGHT_GRAY,
              }}
          />
          <Text mt={2}> Souvenirs</Text>
        </VStack>
      </HStack>
    </ScrollView>
  );
};
