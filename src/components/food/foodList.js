import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import './foodList.less'
import "taro-ui/dist/style/components/tabs.scss";



export default class FoodList extends Component {
  constructor() {
    super(...arguments);
    this.state = {

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




  render() {
    let {selectCata,currentList} =this.props;
    return (
      <View className='foodlist'>
        <Text>{selectCata?selectCata.name:''}</Text>
        <View className='foodlist_forlist'>
          {
            currentList.map((item,index)=>{
              return (<View key={item.id} className='foodlist_item'>

                <Image className='foodlist_item_img' src={require('../../assets/img/back.jpg')}/>
                <View className='foodlist_item_info'>
                  <Text>{item.title}</Text>
                  <Text>{'月售:'+item.sole}</Text>
                  <Text className='price'>{'$:'+item.price}</Text>
                </View>
              </View>)
            })
          }
        </View>
      </View>
    )
  }
}
