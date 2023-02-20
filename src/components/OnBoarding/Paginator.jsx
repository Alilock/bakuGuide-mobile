import { StyleSheet, Text, View, useWindowDimensions, Animated } from 'react-native'
import React from 'react'

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ flexDirection: "row", }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp"
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 1],
                    extrapolate: "clamp"
                })
                return <Animated.View style={[
                    styles.dot,
                    {
                        width: dotWidth,
                        opacity,

                    }]} key={i.toString()} />
            })}
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 8,
        width: 8,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginHorizontal: 4
    }
})