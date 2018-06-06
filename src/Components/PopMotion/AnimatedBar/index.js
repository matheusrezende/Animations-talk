import React, {PureComponent} from 'react'
import {Text, View} from 'react-native'
import _ from 'lodash'
import AnimatedBar from './AnimatedBar';
import Button from '../../Common/Button';


export default class Animation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    }
    
  }


  render() {
    const {open} = this.state
    const items = [Button, Button, Button, Button]
    return (
      <View>
        <View style={{marginTop: 20}}>
          <Button
            title='Animate' onPress={() => this.setState({open: !open})} color='#9c27b0'
          />
        </View>
        <View>
          <AnimatedBar items={items} isOpen={open} />
        </View>
      </View>
    )
  }
}

