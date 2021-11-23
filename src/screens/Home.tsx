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
} from "native-base";
import React from "react";
import { COLORS } from "../resources/Constants";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollCategories } from "../components/ScrollCategories";
import { SafeAreaView } from "react-native-safe-area-context";

import { store } from "../firebaseUtil/firebaseConfig";

export const Home = () => {

    const createProduct = () => {
        store.collection("products").add({
            name: "Tokyo",
            country: "Japan"
        })
        .then((docRef: any) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error: string) => {
            console.error("Error adding document: ", error);
        });
        
    }

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
                onPress={()=>createProduct()}
                _icon={{
                  as: MaterialIcons,
                  name: "search",
                }}
              />
            </HStack>
          </VStack>

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
            <HStack space={2} justifyContent="space-between" mt={4}>
              <Box>
                <Image
                  source={{
                    uri: "https://static.dafiti.com.co/p/calvin-klein-9676-0602701-1-product.jpg",
                  }}
                  alt="Alternate Text"
                  size="160"
                  rounded={5}
                  height={250}
                  resizeMode="cover"
                />
                <VStack my={2}>
                  <Text>Saco gris UAM</Text>
                  <Text color={COLORS.LIGHT_GRAY}>Saco unisex</Text>
                  <Text color={COLORS.BLUE}>$70.000</Text>
                </VStack>
              </Box>
              <Box>
                <Image
                  source={{
                    uri: "https://static.dafiti.com.co/p/gap-5263-4066221-1-product.jpg",
                  }}
                  alt="Alternate Text"
                  size="160"
                  resizeMode="cover"
                  rounded={5}
                  height={250}
                />
                <VStack my={2}>
                  <Text>Hoodie Rojo UAM</Text>
                  <Text color={COLORS.LIGHT_GRAY}>Hoodie para hombre</Text>
                  <Text color={COLORS.BLUE}>$75.000</Text>
                </VStack>
              </Box>
            </HStack>
            <HStack space={2} justifyContent="space-between" mt={4}>
              <Box>
                <Image
                  source={{
                    uri: "https://static.dafiti.com.co/p/calvin-klein-9676-0602701-1-product.jpg",
                  }}
                  alt="Alternate Text"
                  size="160"
                  rounded={5}
                  height={250}
                  resizeMode="cover"
                />
                <VStack my={2}>
                  <Text>Saco gris UAM</Text>
                  <Text color={COLORS.LIGHT_GRAY}>Saco unisex</Text>
                  <Text color={COLORS.BLUE}>$70.000</Text>
                </VStack>
              </Box>
              <Box>
                <Image
                  source={{
                    uri: "https://static.dafiti.com.co/p/gap-5263-4066221-1-product.jpg",
                  }}
                  alt="Alternate Text"
                  size="160"
                  resizeMode="cover"
                  rounded={5}
                  height={250}
                />
                <VStack my={2}>
                  <Text>Hoodie Rojo UAM</Text>
                  <Text color={COLORS.LIGHT_GRAY}>Hoodie para hombre</Text>
                  <Text color={COLORS.BLUE}>$75.000</Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};
