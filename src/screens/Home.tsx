import {
  Box,
  VStack,
  Input,
  Icon,
  ScrollView,
  IconButton,
  HStack,
  Heading,
  Text,
  Button,
  Image,
  FlatList,
} from "native-base";
import React, { useState, useEffect } from "react";
import { COLORS } from "../resources/Constants";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollCategories } from "../components/ScrollCategories";
import { SafeAreaView } from "react-native-safe-area-context";

import { LogBox } from "react-native";
import { useSelector } from "react-redux";
import { getProducts, Product } from "../models/product";

export const Home = () => {

  const user = useSelector((state: any) => state.user.user);

  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    getProducts().then(products => setProducts(products))
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView bgColor={COLORS.WHITE}>
        <VStack mx={6} my={3}>
          <VStack width="100%" alignItems="center">
            <HStack space={2} mx={6}>
              <Input
                placeholder="Busca los productos que quieras"
                width="100%"
                borderRadius={100}
                bgColor="gray.100"
                fontSize={14}
                variant="rounded"
                InputLeftElement={
                  <Icon
                    m="2"
                    ml="3"
                    size="6"
                    color="gray.400"
                    as={<MaterialIcons name="search" />}
                  />
                }
              />
              <IconButton
                bgColor={COLORS.BLUE}
                variant="solid"
                borderRadius={100}
                // onPress={()=>createProduct()}
                _icon={{
                  as: MaterialIcons,
                  name: "search",
                }}
              />
            </HStack>
          </VStack>
          <Text mt={7} alignItems="flex-start" fontSize="md" bold> Hola, {user?.name}</Text>
          <Box>
            <Heading mt={7} alignItems="flex-start">
              Categorías
            </Heading>
            <ScrollCategories />
          </Box>
          <Box>
            <HStack justifyContent="space-between">
              <Heading mt={4} alignItems="flex-start">
                Más vendidos
              </Heading>
              <Button
                mt={4}
                variant="link"
                _text={{
                  color: COLORS.BLUE,
                }}
              >
                Ver todos
              </Button>
            </HStack>

            {/* ------------------------------------------------------ */}

            {products !== null && (
              <FlatList
                scrollEnabled={true}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                data={products}
                numColumns={2}
                py={2}
                renderItem={({ item }) => (
                  <Box>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      alt="Alternate Text"
                      size="160"
                      rounded={5}
                      height={250}
                      resizeMode="cover"
                    />
                    <VStack my={2}>
                      <Text>
                        {item.name.length > 21
                          ? item.name.substring(0, 21 - 3) + "..."
                          : item.name}
                      </Text>
                      <Text color={COLORS.LIGHT_GRAY}>{item.color}</Text>
                      <Text color={COLORS.BLUE}>{item.price}</Text>
                    </VStack>
                  </Box>
                )}
                keyExtractor={(item) => item.id}
              />
            )}

            {/* ------------------------------------------------------ */}
          </Box>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};
