import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ClockIcon, LocationIcon, StarIcon } from '../Icons'

const PlaceCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={item.image} />
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
                    <View style={styles.location}>
                        <StarIcon width={10} height={18} />
                        <Text style={styles.location.distance}>
                            {item.rate}
                        </Text>
                    </View>

                </View>
            </View>
        </View>
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
    }
})