import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import Top from "./top";
import Activity from "./activity";
import './head.less'


export default class Head extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      store: {
        title: '川香居',
        notice: '欢迎光临,很高兴为你服务',
        tags: ['味道赞', '主食真好', '分量足']
      }
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
  };

  render() {
    let {store} =this.state;
    return (
      <View className='head'>
        {/*顶部*/}
        <Top/>
        {/*背景*/}
        <Image src={require('../../assets/img/back.jpg')} className='back'/>
        {/*商户信息*/}
        <View className='store'>
          <Image src={require('../../assets/img/store.jpg')} className='store_img'/>
          <View className='store_text'>
            <Text>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>{store.tags.map((item,index)=>{
              return <Text className='tags_text'>{item}</Text>
            })}</View>

          </View>

        </View>
        {/*活动,满减等*/}
        <Activity/>
      </View>
    )
  }
}
