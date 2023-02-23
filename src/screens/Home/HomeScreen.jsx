import { View, Text, StyleSheet, SectionList, FlatList } from 'react-native'
import React from 'react'
import places from '../../data/places'
import PlaceCard from '../../components/Card/PlaceCard';
const HomeScreen = () => {
    const transformedData = places.reduce((acc, cur) => {
        const { categoryname, ...rest } = cur;
        const sectionIndex = acc.findIndex((item) => item.title === categoryname);
        if (sectionIndex === -1) {
            acc.push({ title: categoryname, data: [rest] });
        } else {
            acc[sectionIndex].data.push(rest);
        }
        return acc;
    }, []);

    return (
        <View style={styles.container}>
            <SectionList sections={transformedData}
                renderItem={() => {
                    return null
                }}
                keyExtractor={(item) => item.id}
                renderSectionHeader={({ section }) => (
                    <>
                        <Text style={styles.title}>{section.title}s nearby</Text>
                        <FlatList
                            data={section.data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={PlaceCard}
                        />
                    </>
                )}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    title: {
        marginBottom: 16,
        color: "white",
        fontSize: 15
    }
})