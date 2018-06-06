import React, {Component} from 'react';
import {View} from 'react-native';
import Button from './Common/Button';

class HomeComponent extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container} >
        <View style={styles.buttonsContainer} >
          <Button title='Animations API' color='orange' onPress={() => navigation.navigate('AnimationsAPI')} />
          <Button title='Pop Motion' color='#f06292' onPress={() => navigation.navigate('PopMotion')} />
          <Button title='Lottie' color='#00e676' onPress={() => navigation.navigate('Lottie')} />
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


export default HomeComponent;
