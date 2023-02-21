import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ title, width, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { width: width }]}>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: "#018CF1",
        borderRadius: 8,
        alignItems: "center"
    }
})

export default Button