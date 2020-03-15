import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image } from '@tarojs/components'
import './top.less'

export default class Top extends Component {

  componentWillMount () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='top'>
        <View className='left'>
          <Image className='img' src={require('../../assets/img/left.png')}></Image>
        </View>
        <View className='right'>
          <Image className='img' src={require('../../assets/img/search.png')}></Image>
          <Image className='img' src={require('../../assets/img/colletion.png')}></Image>
          <Image className='img' src={require('../../assets/img/tuan.png')}></Image>
          <Image className='img' src={require('../../assets/img/dian.png')}></Image>

        </View>
    </View>
  )
  }
}
