import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import categories from '../../data/categories'

const SuggestCategoryScreen = () => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const { width } = useWindowDimensions();
    const renderItem = ({ item }) => {

        const isSelected = selectedCategories.includes(item.id);

        const handleCategoryPress = (categoryId) => {
            if (selectedCategories.includes(categoryId)) {
                setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
            } else {
                setSelectedCategories((prev) => [...prev, categoryId]);
            }
        };



        return (
            <>
                <TouchableOpacity
                    onPress={() => handleCategoryPress(item.id)}
                    style={[{ ...styles.card, width: width / 2 - 24 }]}
                >
                    < Image source={item.image} />
                    <Text style={styles.card.text}>{item.name}</Text>
                </TouchableOpacity >
            </>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pageHeader}>
                <Text style={styles.title}>Choose your interest</Text>
                <Text style={styles.message}>Select at least 2 options that we can suggest you on the home page.</Text>
            </View>
            <FlatList data={categories} contentContainerStyle={{ justifyContent: "space-between", marginHorizontal: 16, rowGap: 16, flexDirection: "row", flexWrap: "wrap" }} renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default SuggestCategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c",
    },
    pageHeader: {
        marginTop: 48,
        marginBottom: 36,
        marginHorizontal: 16
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 8
    },
    message: {
        color: "#B9B9B9",
    },
    card: {
        borderRadius: 8,
        width: 164,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#494949",
        borderWidth: 1,
        height: 136,
        text: {
            color: "#fff",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 10
        }
    }
})