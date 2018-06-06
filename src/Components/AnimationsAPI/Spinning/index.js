import React, {Component} from 'react'
import {
  StyleSheet,
  Animated,
  Easing,
} from 'react-native'
import LOGO from '../../../Assets/reactjs.png'

const START_VALUE = '0deg'
const END_VALUE = '360deg'
const DURATION = 4000
class Spinning extends Component {
  constructor() {
    super()
    this.state = {
      spinValue: new Animated.Value(0),
    }
  }
  componentDidMount() {
    this.spin()
  }

  spin() {
    this.state.spinValue.setValue(0)
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: DURATION,
        easing: Easing.linear,
      },
    ).start(() => this.spin())
  }
  
  render() {
    
    
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [START_VALUE, END_VALUE],
    })
    /* This also works, just using above example to show functions instead of strings /*
    /*
    const spin = this.state.spinValue.interpolate({
       inputRange: [0, 1],
       outputRange: ['0deg', '360deg']
    }) */
    return (
      <Animated.View style={styles.container}>
        <Animated.Image
          style={{width: 227, height: 200, transform: [{rotate: spin}]}}
          source={LOGO}
        />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5,
  },
})

export default Spinning
