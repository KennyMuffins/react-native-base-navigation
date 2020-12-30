import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <Text h3>
                SigninScreen
            </Text>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SigninScreen