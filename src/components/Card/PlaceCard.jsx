import { ScrollView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { ClockIcon, FavoriteIcon, LocationIcon, StarIcon } from '../Icons'
import { useNavigation } from '@react-navigation/native'
const PlaceCard = ({ item }) => {
    const navigation = useNavigation()
    const goDetail = () => {
        navigation.navigate("Detail")
    }
    return (
        <Pressable onPress={goDetail}>

            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={item.image} />
                    <View style={styles.imageWrapper.icon}>
                        <FavoriteIcon width={16} height={16} stroke={"#fff"} />
                    </View>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.detail.name}>{item.name.substring(0, 23)}</Text>
                    <View style={styles.features}>
                        <View style={styles.location}>
                            <LocationIcon width={10} height={18} />
                            <Text style={styles.location.distance}>
                                {item.distance}
                            </Text>

                        </View>
                        <View style={styles.location}>
                            <ClockIcon width={10} height={18} />
                            <Text style={styles.location.distance}>
                                {item.openadate} - {item.closedate}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => alert("salam")} style={styles.location}>
                            <StarIcon width={10} height={18} />
                            <Text style={styles.location.distance}>
                                {item.rate}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </Pressable>
    )
}

export default PlaceCard

const styles = StyleSheet.create({
    container: {
        width: 230,
        marginRight: 16,
        marginBottom: 32
    },
    image: {
        height: 209,
        width: "100%",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    detail: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderColor: "#262626",
        name: {
            color: "#fff",
            fontWeight: "600",
            fontSize: 16,
            marginBottom: 4,

        }
    },
    features: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    location: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        distance: {
            fontSize: 10,
            color: "white",
        }
    },
    imageWrapper: {
        position: "relative",
        icon: {
            position: "absolute",
            padding: 8,
            backgroundColor: "#1c1c1c",
            borderRadius: 16,
            right: 16,
            top: 16
        }
    }
})