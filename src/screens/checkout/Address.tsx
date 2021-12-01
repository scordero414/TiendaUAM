import { Checkbox, FormControl, Input, Text, View } from "native-base";
import React from "react";
import { useState } from "react";

const Address = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View flex={1} mx={5}>
      <View flexDirection="row" marginLeft={3} marginRight={3} justifyContent="center" alignItems="center">
        <Checkbox
          value={"valor"}
          onChange={setIsChecked}
          isChecked={isChecked}
          colorScheme="yellow"
          aria-label="2"
        />
        <Text marginLeft={2}>
          La dirección de facturación es la misma que la dirección de entrega.
        </Text>
      </View>
      <View marginTop={5}>
        <FormControl.Label>Dirección</FormControl.Label>
        <Input
          variant="underlined"
          placeholder="Escriba la dirección de envío"
        />
        <FormControl.Label marginTop={5}>Datos adicionales</FormControl.Label>
        <Input
          variant="underlined"
          placeholder="Apartamento, conjunto, nombre de calle"
        />
        <FormControl.Label marginTop={5}>Ciudad</FormControl.Label>
        <Input variant="underlined" placeholder="Ej: Manizales" />
        <View flexDirection="row">
          <View flexDirection="column">
            <FormControl.Label marginTop={5}>Departamento</FormControl.Label>
            <Input variant="underlined" placeholder="Ej: Caldas" />
          </View>
          <View flexDirection="column" marginLeft="20">
            <FormControl.Label marginTop={5}>País</FormControl.Label>
            <Input variant="underlined" placeholder="Ej: Colombia" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Address;
