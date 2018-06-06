import React from 'react'
import {Button} from 'react-native-elements'

export default ({title, onPress, color}) => (
  <Button
    title={title}
    onPress={onPress}
    rounded
    buttonStyle={styles.buttonStyle}
    backgroundColor={color}
    large
  />
)

const styles = {
  buttonStyle: {
    minWidth: '90%',
  },
}
