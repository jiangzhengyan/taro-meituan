import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './addCut.less'
import {getFoodCount, setFoodCount} from '../../utils/common'


export default class AddCut extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      num: 0
    }
  }

  componentWillMount() {
  }


  componentDidMount() {
    this.setState({
      num: getFoodCount(this.props.food)
    })

  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  config = {
    navigationBarTitleText: '加减'
  }

  cutFood() {

    if (this.props.food) {
      if (this.state.num > 0) {
        setFoodCount(this.props.food, this.state.num, 'cut', () => {

          this.componentDidMount()
        })
      }
    }
  }

  addFood() {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.num, 'add', () => {
        this.componentDidMount()

      })

    }
  }

  render() {
    let {num} = this.state;
    let hideClass=num>0?'':'hide'
    return (
      <View className='addcut'>
        <Image onClick={this.cutFood.bind(this)} className={'op_image '+hideClass}
               src={require('../../assets/img/cut.png')}></Image>
        <Text className={'foodnum '+hideClass}>{num}</Text>
        <Image onClick={this.addFood.bind(this)} className='op_image'
               src={require('../../assets/img/add.png')}></Image>

      </View>
    )
  }
}
