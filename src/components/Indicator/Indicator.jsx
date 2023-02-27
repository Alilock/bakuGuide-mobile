import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
const Indicator = () => {
    return (
        <View style={{
            flex: 1, backgroundColor: '#1c1c1c',
        }}>
            <DotIndicator color="#E0783E" />
        </View>
    )
}

export default Indicator

const styles = StyleSheet.create({})