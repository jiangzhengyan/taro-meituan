import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import './food.less'
import "taro-ui/dist/style/components/tabs.scss";
import Cata from "./cata";


export default class Food extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{title: '点菜'}, {title: '评价'}, {title: '商家'}]
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

  /**
   * 切换标签
   */
  changeTab(value) {

    console.log(value,);
    this.setState({
      current: value
    })
  }


  render() {
    let {current,tabList} =this.state
    return (
      <View>
        <AtTabs current={current} tabList={tabList}
                onClick={this.changeTab.bind(this)}>
          <AtTabsPane>
            <Cata/>
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
