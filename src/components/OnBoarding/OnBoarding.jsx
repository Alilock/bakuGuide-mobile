import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '../../data/slides'
import OnBoardingItem from './OnBoardingItem'
import Paginator from './Paginator'
import Button from '../Buttons/Button'

const OnBoarding = () => {
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
        
    }
    return (
        <View style={styles.container}>
            <FlatList data={slides}
                renderItem={({ item }) => <OnBoardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator
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
        </View>
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