import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission' 
import '@/assets/iconfont/iconfont.css';

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
// import 'vant/lib/button/style'
// import {
//   AddressEdit,
//   AddressList,
//   Area,
//   Button,
//   Card,
//   Cell,
//   CellGroup,
//   Checkbox,
//   CheckboxGroup,
//   Circle,
//   Col,
//   Collapse,
//   CollapseItem,
//   ContactCard,
//   ContactEdit,
//   ContactList,
//   CountDown,
//   Coupon,
//   CouponCell,
//   CouponList,
//   DatetimePicker,
//   Dialog,
//   Divider,
//   DropdownItem,
//   DropdownMenu,
//   Field,
//   GoodsAction,
//   GoodsActionButton,
//   GoodsActionIcon,
//   Grid,
//   GridItem,
//   Icon,
//   // Image, vant 1.0版本没有该组件
//   ImagePreview,
//   IndexAnchor,
//   IndexBar,
//   Info,
//   List,
//   Loading,
//   NavBar,
//   NoticeBar,
//   Notify,
//   NumberKeyboard,
//   Overlay,
//   Pagination,
//   Panel,
//   PasswordInput,
//   Picker,
//   Popup,
//   Progress,
//   PullRefresh,
//   Radio,
//   RadioGroup,
//   Rate,
//   Row,
//   Search,
//   Sidebar,
//   SidebarItem,
//   Skeleton,
//   Sku,
//   Slider,
//   Step,
//   Stepper,
//   Steps,
//   Sticky,
//   SubmitBar,
//   Swipe,
//   SwipeCell,
//   SwipeItem,
//   Switch,
//   SwitchCell,
//   Tab,
//   Tabbar,
//   TabbarItem,
//   Tabs,
//   Tag,
//   Toast,
//   TreeSelect,
//   Uploader,
//   Form
// } from 'vant'
// //Toast.allowMultiple();
// //Vue.use(AddressEdit)
// // Vue.use(AddressList)
// Vue.use(Area)
// Vue.use(Button)
// // Vue.use(Card)
// Vue.use(Cell)
// Vue.use(CellGroup)
// // Vue.use(Checkbox)
// // Vue.use(CheckboxGroup)
// // Vue.use(Circle)
// Vue.use(Col)
// // Vue.use(Collapse)
// // Vue.use(CollapseItem)
// // Vue.use(ContactCard)
// // Vue.use(ContactEdit)
// // Vue.use(ContactList)
// // Vue.use(CountDown)
// // Vue.use(Coupon)
// // Vue.use(CouponCell)
// // Vue.use(CouponList)
// // Vue.use(DatetimePicker)
// Vue.use(Dialog)
// // Vue.use(Divider)
// // Vue.use(DropdownItem)
// // Vue.use(DropdownMenu)
// Vue.use(Field)
// // Vue.use(GoodsAction)
// // Vue.use(GoodsActionButton)
// // Vue.use(GoodsActionIcon)
// // Vue.use(Grid)
// // Vue.use(GridItem)
// Vue.use(Icon)
// // Vue.use(Image)
// // Vue.use(ImagePreview)
// // Vue.use(IndexAnchor)
// // Vue.use(IndexBar)
// // Vue.use(Info)
// Vue.use(List)
// Vue.use(Loading)
// Vue.use(NavBar)
// Vue.use(NoticeBar)
// // Vue.use(Notify)
// // Vue.use(NumberKeyboard)
// // Vue.use(Overlay)
// // Vue.use(Pagination)
// // Vue.use(Panel)
// // Vue.use(PasswordInput)
// // Vue.use(Picker)
// Vue.use(Popup)
// // Vue.use(Progress)
// Vue.use(PullRefresh)
// // Vue.use(Radio)
// // Vue.use(RadioGroup)
// // Vue.use(Rate)
// Vue.use(Row)
// // Vue.use(Search)
// // Vue.use(Sidebar)
// // Vue.use(SidebarItem)
// // Vue.use(Skeleton)
// Vue.use(Sku)
// // Vue.use(Slider)
// // Vue.use(Step)
// Vue.use(Stepper)
// // Vue.use(Steps)
// // Vue.use(Sticky)
// // Vue.use(SubmitBar)
// Vue.use(Swipe)
// Vue.use(SwipeCell)
// Vue.use(SwipeItem)
// Vue.use(Switch)
// // Vue.use(SwitchCell)
// Vue.use(Tab)
// // Vue.use(Tabbar)
// // Vue.use(TabbarItem)
// Vue.use(Tabs)
// // Vue.use(Tag)
// Vue.use(Toast)
// // Vue.use(TreeSelect)
// Vue.use(Uploader)
// Vue.use(Form)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
