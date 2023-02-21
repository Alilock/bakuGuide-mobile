import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '../../data/slides'
import OnBoardingItem from '../../components/OnBoarding/OnBoardingItem'
import Paginator from '../../components/OnBoarding/Paginator'
import Button from '../../components/Buttons/Button'
import { SafeAreaView } from 'react-native-safe-area-context'

const OnBoarding = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const scrollx = useRef(new Animated.Value(0)).current
    const slidersRef = useRef(null)
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const handlePaging = () => {
        if (currentIndex < slides.length - 1) {
            slidersRef.current.scrollToIndex({ index: currentIndex + 1 })
        }
        else if (currentIndex == slides.length - 1) {
            navigation.navigate("SuggestCategory")
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={slides}
                renderItem={({ item }) => <OnBoardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
                    useNativeDriver: false
                })}
                ref={slidersRef}
                onViewableItemsChanged={viewableItemsChanged}
            />

            <View style={styles.pagingContainer}>
                <Paginator data={slides} scrollX={scrollx} />
                <Button title="Next" width={163} onPress={handlePaging} />
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c"
    },
    pagingContainer: {
        marginLeft: 34,
        marginRight: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24
    }
})