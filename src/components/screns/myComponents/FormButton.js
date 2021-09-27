import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, perfectSize } from '../../../../theme'

const FormButton = ({buttonTitle, onPress}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    container: {

width:'90%',
height:'6%',
alignItems: 'center',
justifyContent: 'center',
alignSelf:'center',
backgroundColor: colors.redColor,
borderRadius: perfectSize(25),
padding: perfectSize(10),
marginTop:'6%'
    },
    buttonTitle:{
        fontWeight: 'bold',
        fontSize: perfectSize(20),
        color: colors.whiteColor

    }
})
