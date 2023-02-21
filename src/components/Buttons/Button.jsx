import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ title, width, onPress, isAccess = true }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,
        {
            width: width,
            backgroundColor: isAccess ? "#018CF1" : "#dff0ff"
        }]}>
            <Text style={{

                color: isAccess ? "#fff" : "#718096",
                fontSize: 16,
                fontWeight: "500",
            }}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        // backgroundColor: "#018CF1",
        backgroundColor: "#dff0ff",
        borderRadius: 8,
        alignItems: "center"
    }
})

export default Button