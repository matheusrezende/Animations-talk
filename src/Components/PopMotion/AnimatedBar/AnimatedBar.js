import React from 'react';
import {Animated} from 'react-native'
import posed from 'react-native-pose'

const BASE_DURATION = 100;

const config = {
  open: {
    scaleX: 1,
    transition: ({
      i, value, toValue, useNativeDriver,
    }) =>
      Animated.timing(value, {
        toValue,
        useNativeDriver,
        duration: (i + 1) * BASE_DURATION,
      }),
  },
  closed: {scaleX: 0},
};

const Item = posed.View(config)

export default ({items, isOpen}) => items.map((item, i) => (
  <Item style={styles.item} pose={isOpen ? 'open' : 'closed'} i={i} key={i} />
))

const styles = {
  item: {
    minWidth: '90%',
    height: 100,
    margin: 10,
    backgroundColor: '#00e676',
    borderRadius: 50,
  }

}
