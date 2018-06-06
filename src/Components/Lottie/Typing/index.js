import React, {Component} from 'react'
import {View} from 'react-native'
import AnimationWrapper from '../../Common/AnimationWrapper';
import TypingAnimation from '../../../Assets/Animations/typing.json'
import Button from '../../Common/Button';

export default class Typing extends Component {
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
  
        <AnimationWrapper open={open} source={TypingAnimation} />
      </View>
    )
  }
}
