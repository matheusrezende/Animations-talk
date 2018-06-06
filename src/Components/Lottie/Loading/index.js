import React, {Component} from 'react'
import {View} from 'react-native'
import AnimationWrapper from '../../Common/AnimationWrapper';
import loadingAnimation from '../../../Assets/Animations/loading.json'
import Button from '../../Common/Button';

export default class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    const {open} = this.state
    return (
      <View>
        <View style={{marginTop: 20}}>
          <Button
            title={open ? 'Hide' : 'Show'} onPress={() => this.setState({open: !open})} color='#9c27b0'
          />
        </View>
  
        <AnimationWrapper open={open} source={loadingAnimation} />
      </View>
    )
  }
}
