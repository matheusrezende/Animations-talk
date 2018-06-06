import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Animation from 'lottie-react-native';


class LottieWrapper extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    const {source} = this.props
    return (
      <View style={styles.container}>
        <View>
          <Animation
            ref={(animation) => {
              this.animation = animation;
            }}
            style={{width: 200, height: 200}}
            loop
            source={source}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default LottieWrapper
