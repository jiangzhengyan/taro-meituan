import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import Top from "./top";
import './activity.less'


export default class Head extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activity: [{
        type: 'cut',
        info: [{total: 48, cut: 10}, {total: 148, cut: 100}, {total: 248, cut: 200}]
      }]

    }
  }

  componentWillMount() {
  }


  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  config = {
    navigationBarTitleText: '首页'
  }


  getTextByType(type) {
    switch (type) {

      case 'cut':
        return '减'
        break;
      default:
        return '减'

        break;
    }

  }

  getLine(arr) {
    return arr.map((item, index) => {
      return `满${item.total}减${item.cut}`
    }).join(';')
  }

  render() {
    let {activity: [firstItem]} = this.state
    return (
      <View className='activity'>
        <Text className='type'>{this.getTextByType(firstItem.type)}</Text>
        <Text>{this.getLine(firstItem.info)}</Text>
        <Text className='length'>{this.state.activity.length}个活动</Text>
      </View>
    )
  }
}
