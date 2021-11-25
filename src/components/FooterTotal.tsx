import { Button, View } from 'native-base'
import React from 'react'
import { Text } from 'react-native'

interface Props {
    subTotal: number,
    shippingFee: number,
    total: number,
    onPress: Function
}

export const FooterTotal = ({ subTotal, shippingFee, total, onPress }: Props) => {
    return (
        <View style={{ paddingHorizontal: 24 }}>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginBottom: 20
                }}
            />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 1, fontSize: 16, lineHeight: 22 }}>Subtotal</Text>
                <Text style={{ fontSize: 16, lineHeight: 22 }}>${subTotal.toFixed(2)}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 24 }}>
                <Text style={{ flex: 1, fontSize: 16, lineHeight: 22 }}>shipping fee</Text>
                <Text style={{ fontSize: 16, lineHeight: 22 }}>${shippingFee.toFixed(2)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 10 }}>
                <View>
                    <Text style={{ flex: 1, fontSize: 20, lineHeight: 22 }}>Total</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", lineHeight: 22 }}>${total.toFixed(2)}</Text>
                </View>
                <Button>Checkout</Button>
            </View>


        </View>
    )
}
