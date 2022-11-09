import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    currentOrder: {
      menu: null,
      size: null,
      options: [],
    },
    orderList: [],
    menuList: [
      {
        title: "오트 크림 스카치 콜드 브루",
        price: 6000,
        selected: false,
        image:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004279]_20221017113059881.jpg",
        description:
          "고소한 오트 바닐라 크림이 카라멜 & 스카치 풍미를 더한 콜드 브루에 올라가 부드럽고 은은하게 즐길 수 있는 음료",
        calories: 115,
      },
      {
        title: "제주 금귤 민트 티",
        price: 6100,
        selected: false,
        image:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004276]_20221017123346682.jpg",
        description:
          "제주의 상콤 달콤함을 담은 금귤, 한라봉, 감귤 등을 통째로 넣어 풍미를 살리고 민트의 깔끔함을 더한 티 음료",
        calories: 190,
      },
      {
        title: "오로라 캐모마일 릴렉서",
        price: 6000,
        selected: false,
        image:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004267]_20221017112858710.jpg",
        description: `크리스마스 밤을 아름답게 물들이는 듯한 오로라가 살포시 내려앉아, 홀리데이 시즌을 더욱 설레게 만들어 주는 음료
        달콤한 리치과육이 들어간 베이스에 은은한 캐모마일과 유스베리티가 조화롭게 어우러진 릴렉싱 티 음료`,
        calories: 205,
      },
    ],
    sizeList: [
      {
        name: "Tall",
        price: 0,
        selected: false,
      },
      {
        name: "Grande",
        price: 500,
        selected: false,
      },
      {
        name: "Venti",
        price: 1000,
        selected: false,
      },
    ],
    optionList: [
      {
        type: "샷",
        price: 600,
        count: 0,
      },
      {
        type: "바닐라 시럽",
        price: 500,
        count: 0,
      },
      {
        type: "카라멜 시럽",
        price: 300,
        count: 0,
      },
    ],
  },
  getters: {
    // 총 주문 건 수
    totalOrderCount(state) {
      return state.orderList.length
    },
    // 총 주문 금액
    totalOrderPrice(state) {
      return state.orderList.reduce((totalPrice, order) => {
        const optionPrice = order.options.reduce((option_price, option) => {
          return option_price + option.price * option.count
        }, 0)
        return totalPrice + order.menu.price + order.size.price + optionPrice
      }, 0)
    },
  },
  mutations: {
    
    addOrder(state) {
      // 현재 주문을 orderList에 추가
      state.optionList.forEach((option) => {
          state.currentOrder.options.push({type: option.type, price: option.price, count: option.count})
      })      
      state.orderList.push(state.currentOrder)
      
      // 모든 선택 초기화
      state.currentOrder = {
        menu: null,
        size: null,
        options: [],
      }
      state.menuList.forEach((menu) => {menu.selected = false})
      state.sizeList.forEach((size) => {size.selected = false})
      state.optionList.forEach((option) => {option.count = 0})
    },
    
    UPDATE_MENU_CHOICE (state, selectedMenu) {
      // 선택하지 않았던 메뉴를 클릭한 경우에만
      if (!selectedMenu.selected) {
        // 현재 주문에 메뉴를 넣어줌
        state.currentOrder.menu = {
          title: selectedMenu.title, 
          price: selectedMenu.price,
          image: selectedMenu.image,
        } 
      } else {
        // 이미 선택된 메뉴를 한 번 더 클릭했다면 현재 주문에서 메뉴 취소
        state.currentOrder.menu = null
      }
      
      // 사이즈와 옵션은 모두 초기화
      state.currentOrder.size = null
      state.currentOrder.options = []
      state.sizeList.forEach((size) => {size.selected = false})
      state.optionList.forEach((option) => {option.count = 0})
      
      // 선택한 메뉴의 selected 속성을 반대로 설정하고, 나머지 메뉴는 false로 설정
      // 한 번에 한 가지 메뉴만 선택 가능
      state.menuList = state.menuList.map((menu) => {
        if (menu === selectedMenu) {
          menu.selected = !menu.selected
        } else {
          menu.selected = false
        }
        return menu
      })
    },

    UPDATE_SIZE_CHOICE (state, selectedSize) {
      // 선택하지 않았던 사이즈를 클릭한 경우에만
      if (!selectedSize.selected) {
        // 현재 주문에 사이즈를 넣어줌
        state.currentOrder.size = {name: selectedSize.name, price: selectedSize.price}
      } else {
        // 이미 선택된 사이즈를 한 번 더 클릭했다면 현재 주문에서 사이즈 취소
        state.currentOrder.size = null
      }
      // 선택한 사이즈만 selected 속성을 반대로 설정하고, 나머지 메뉴는 false로 설정
      // 한 메뉴 당 한 가지 사이즈만 선택 가능
      state.sizeList = state.sizeList.map((size) => {
        if (size === selectedSize) {
          size.selected = !size.selected
        } else {
          size.selected = false
        }
        return size
      })
    },
    
    UPDATE_OPTIONS_CHOICE (state, selectedOption) {
      // 선택한 옵션의 count 값 갱신
      // currentOrder에 반영하는 과정은 추후 addOrder 시에 한 번에!
      state.optionList.map((option) => {
        if (option.type === selectedOption.type) {
          option.count += selectedOption.count
        }
        return option
      })
    }
  },
  actions: {},
  modules: {},
})
