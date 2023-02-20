import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const OnBoardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: "contain" }]} />
            <View style={{ marginTop: 32 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 41,
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 24,
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        fontWeight: "400",
        color: "#fff",
        marginTop: 16,
        paddingHorizontal: 26
    }
})