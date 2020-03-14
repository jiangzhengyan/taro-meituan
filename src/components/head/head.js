import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Top from "./top";


export default class Head extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='head'>
        <Top></Top>
        <Text>头部</Text>
    </View>
  )
  }
}
