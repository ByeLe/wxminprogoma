import Vue from 'vue'
import './app.scss'

// import { proxySetData, setReadyStart } from '../../../../utils/proxy';

// proxySetData({
//   console: true,
//   ready: true
// });
const App = {
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
