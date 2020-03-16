import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image } from '@tarojs/components'
import './top.less'

export default class Top extends Component {

  componentWillMount () {
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');

  }

  componentDidShow () {
    console.log('componentDidShow');

  }

  componentDidHide () {
    console.log('componentDidHide');

  }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='top'>
        <View className='left'>
          <Image className='img' src={require('../../assets/img/left.png')}/>
        </View>
        <View className='right'>
          <Image className='img' src={require('../../assets/img/search.png')}/>
          <Image className='img' src={require('../../assets/img/colletion.png')}/>
          <Image className='img' src={require('../../assets/img/tuan.png')}/>
          <Image className='img' src={require('../../assets/img/dian.png')}/>

        </View>
    </View>
  )
  }
}
