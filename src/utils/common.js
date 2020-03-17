import Taro, {Component} from '@tarojs/taro'




const foodKey='taro_meituan'
export function getFoodCount(food) {
  let store=Taro.getStorageSync(food)
  if (store){
    if (store[food.id]){
      return  store[food.id].num
    }else {
      return 0
    }

  }else {
    return 0
  }

}
export function setFoodCount(food,num,type,callback) {

}
