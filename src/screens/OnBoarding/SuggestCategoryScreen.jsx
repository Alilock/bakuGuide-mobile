import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import categories from '../../data/categories'
import Button from '../../components/Buttons/Button'

const SuggestCategoryScreen = () => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const { width } = useWindowDimensions();
    const renderItem = ({ item }) => {

        const isSelected = selectedCategories.includes(item.id);
        const handleCategoryPress = (categoryId) => {

            const newSelectedCategories = [...selectedCategories];

            if (newSelectedCategories.includes(categoryId)) {
                newSelectedCategories.splice(newSelectedCategories.indexOf(categoryId), 1);
            } else {
                newSelectedCategories.push(categoryId);
            }

            setSelectedCategories(newSelectedCategories);
            AsyncStorage.setItem("suggestedCategories", JSON.stringify(newSelectedCategories))
        };
        return (
            <TouchableOpacity
                onPress={() => handleCategoryPress(item.id)}
                style={[{
                    ...styles.card,
                    width: width / 2 - 48,
                    marginHorizontal: 16,
                    borderColor: isSelected ? "#F6F6F6" : "#494949"
                }]}
            >
                < Image source={item.image} />
                <Text style={styles.card.text}>{item.name}</Text>
            </TouchableOpacity >
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pageHeader}>
                <Text style={styles.title}>Choose your interest</Text>
                <Text style={styles.message}>Select at least 2 options that we can suggest you on the home page.</Text>
            </View>
            <FlatList
                data={categories}
                contentContainerStyle={styles.contentContainerStyle}
                numColumns={2}
                renderItem={renderItem}
            />
            <View style={styles.buttonWrap}>
                <Button isAccess={selectedCategories.length >= 2 ? true : false} title={"Next"} />
            </View>
        </SafeAreaView>
    )
}

export default SuggestCategoryScreen

const styles = StyleSheet.create({
    contentContainerStyle: {
        rowGap: 16,
        marginHorizontal: 16,
        justifyContent: "space-between"
    },
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
    },
    buttonWrap: {
        marginHorizontal: 16,
        marginBottom: 12
    }
})