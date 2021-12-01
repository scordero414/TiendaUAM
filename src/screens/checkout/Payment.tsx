import { FormControl, IconButton, Input, Text, View } from "native-base";
import React from "react";
import Svg, { G, Path } from "react-native-svg";
import CardIcon from "../../assets/icons/CardIcon";
import PayPalIcon from "../../assets/icons/PayPalIcon";
import WalletIcon from "../../assets/icons/WalletIcon";

const Payment = () => {
  return (
    <View flex={1}  mx={5}>
      <View flexDirection="row" justifyContent="space-between" mx={10}>
        <IconButton
          colorScheme="grey"
          borderColor="grey"
          variant="outline"
          padding="6"
          icon={<PayPalIcon />}
        />
        <IconButton
          colorScheme="grey"
          borderColor="grey"
          variant="outline"
          padding="6"
          icon={<CardIcon />}
        />
        <IconButton
          colorScheme="grey"
          borderColor="grey"
          variant="outline"
          padding="6"
          icon={<WalletIcon />}
        />
      </View>
      <View marginTop={5}>
        <FormControl.Label>Nombre en tarjeta</FormControl.Label>
        <Input variant="underlined" placeholder="Ej. Juan Gaviria" />
        <FormControl.Label marginTop={10}>Número tarjeta</FormControl.Label>
        <Input variant="underlined" placeholder="XXXX XXXX XXXX XXXX" />
        <View flexDirection="row">
          <View flexDirection="column">
            <FormControl.Label marginTop={10}>
              Fecha de expiración
            </FormControl.Label>
            <Input variant="underlined" placeholder="00/00" />
          </View>
          <View flexDirection="column" marginLeft="20">
            <FormControl.Label marginTop={10}>CVV</FormControl.Label>
            <Input variant="underlined" placeholder="XXX" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Payment;
