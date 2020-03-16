import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import './food.less'
import "taro-ui/dist/style/components/tabs.scss";
import Cata from "./cata";
import FoodList from "./foodList";


export default class Food extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{title: '点菜'}, {title: '评价'}, {title: '商家'}],
      foodList: [],
      currentList: [],
      selectCata:''
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

  // 切换分类
  changeCata(selectCata) {
    if (this.state.foodList.some(item => item.pid === selectCata.id)) {

      this.setState({
        currentList: this.state.foodList.filter(item => item.pid === selectCata.id),
        selectCata:selectCata
      })

    } else {

      let newArr = this.state.foodList.concat(this.getData(selectCata))
      this.setState({
        foodList: newArr,
        selectCata:selectCata
      }, () => {
        this.setState({
          currentList: this.state.foodList.filter(item => item.pid === selectCata.id),
          selectCata:selectCata
        })
      })
    }
  }

  getData(selectCata) {
    let count = Math.round(Math.random() * 2);
    let imgUrl = `../../assets/img/${count}.jpg`
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({

      title: '分类' + selectCata.id + '菜品' + (k + 1),
      id: selectCata.id + '_' + k,
      pid: selectCata.id,
      img: imgUrl,
      sole:Math.round(Math.random()*50),
      price:Math.round(Math.random()*10000),

    }))

  }

  render() {
    let {current, tabList, currentList,selectCata} = this.state
    return (
      <View>
        <AtTabs current={current} tabList={tabList}
                onClick={this.changeTab.bind(this)}>
          <AtTabsPane>
            <View className='food_body'>
              <Cata onChangeCata={this.changeCata.bind(this)}/>
              <FoodList currentList={currentList}  selectCata={selectCata}/>
            </View>
          </AtTabsPane>
          <AtTabsPane>评价</AtTabsPane>
          <AtTabsPane>商家</AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
