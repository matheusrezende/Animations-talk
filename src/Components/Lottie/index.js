import React, {Component} from 'react';
import {View} from 'react-native';
import Button from '../Common/Button';

class Lottie extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container} >
        <View style={styles.buttonsContainer} >
          <Button title='Loading' color='#A6207E' onPress={() => navigation.navigate('Loading')} />
          <Button title='Location' color='#039be5' onPress={() => navigation.navigate('Location')} />
          <Button title='Typing' color='#66bb6a' onPress={() => navigation.navigate('Typing')} />
          <Button title='Motorcycle' color='#66bb' onPress={() => navigation.navigate('Motorcycle')} />
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


export default Lottie
