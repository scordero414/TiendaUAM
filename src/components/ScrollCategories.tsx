import { HStack, IconButton, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { COLORS } from "../resources/Constants";
import { HeelShoeIcon, SouvenirIcon, UniformIcon, ShoeIcon} from "../assets/icons/CategoriesIcons";


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
            icon={<ShoeIcon/>}

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
            icon={<HeelShoeIcon/>}

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
            icon={<UniformIcon/>}

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
            icon={<SouvenirIcon/>}
          />
          <Text mt={2}> Souvenirs</Text>
        </VStack>
      </HStack>
    </ScrollView>
  );
};
