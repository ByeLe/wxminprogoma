<template>
<view>
  <view class="user-content" v-for="(item, index) in peopleList" :key="index">
   <view>这是姓名</view>
   <view>这是ID</view>
   <view>这是性别</view> 
  </view>
</view>  
  
</template>

<script>
import './index.scss'
import { get } from '../../common/http';
export default {
  data () {
    return {
      peopleList: [],
      times: [],
      msg: 'Hello world, Trao!'
    }
  },
  async mounted() {
      // console.log('Taro----', Taro);
      this.getPeople();
  },
  methods: {
    async getPeople() {
       const temp = await get('/peopleList', {}, {});
      console.log('temp----', temp);
      const nextArr = [...this.peopleList, ...temp.data];
      // console.log('nextArr----', nextArr);
      const startTime = new Date().getTime();
      if (nextArr.length > 1000) {
        console.log(this.times)
        return;
      }
       this.peopleList = nextArr;
       this.$nextTick(() => {
         const endTime = new Date().getTime();
         this.times.push(
           endTime - startTime
         )
         this.getPeople();
       }); 
    },
  },
}
</script>
