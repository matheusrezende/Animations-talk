import React from 'react';
import posed from 'react-native-pose'

const config = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

const Box = posed.View(config);

export default ({isVisible}) => (
  <Box style={styles.box} pose={isVisible ? 'visible' : 'hidden'} />
)

const styles = {
  box: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#1976d2',
  },
}
