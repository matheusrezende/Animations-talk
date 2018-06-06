import React, {PureComponent} from 'react'
import {View} from 'react-native'
import _ from 'lodash'
import Fade from './Fade';
import Button from '../../Common/Button';


export default class Animation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    
  }


  render() {
    const {open} = this.state
    return (
      <View style={{flex: 1}}>
        <View style={{marginTop: 20}}>
          <Button
            title={open ? 'Hide' : 'Show'} onPress={() => this.setState({open: !open})} color='#ef5350'
          />
        </View>
        <View
          style={{
            justifyContent: 'center', alignItems: 'center', flex: 1,
          }}
        >
          <Fade isVisible={open} />
        </View>
      </View>
    )
  }
}

