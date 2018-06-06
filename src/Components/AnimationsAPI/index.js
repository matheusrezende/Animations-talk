import React, {Component} from 'react';
import {View} from 'react-native';
import Button from '../Common/Button';

class AnimationsAPI extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container} >
        <View style={styles.buttonsContainer} >
          <Button title='Animated Bars' color='orange' onPress={() => navigation.navigate('AnimatedBar')} />
          <Button title='Spinning Image' color='#f06292' onPress={() => navigation.navigate('Spinning')} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
    maxHeight: '60%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}


export default AnimationsAPI
