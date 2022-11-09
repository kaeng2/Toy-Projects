import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      console.log("-------------------------------------------")
      console.log(state.orderList)
      const optionPrice = state.orderList.options.reduce((total, option) => {
        return total + option.price * option.count
      }, 0)
      return (
        state.orderList.reduce((total, order) => {
          return total + order.menu[0].price + order.size[0].price
        }, 0) + optionPrice
      )
    },
  },
  mutations: {
    addOrder(state) {
      const newOrder = {
        menu: state.menuList.filter((menu) => {
          if (menu.selected) {
            menu.selected = false
            return menu
          }
        }),
        size: state.sizeList.filter((size) => {
          if (size.selected) {
            size.selected = false
            return size
          }
        }),
        options: state.optionList.filter((option) => {
          if (option.count) {
            option.count = 0
            return option
          }
        }),
      }
      state.orderList.push(newOrder)
    },
    updateMenuList(state, selectedMenu) {
      const idx = state.menuList.indexOf(selectedMenu)
      state.menuList[idx].selected = !state.menuList[idx].selected
    },
    updateSizeList(state, selectedSize) {
      state.sizeList.map((size) => {
        if (size.name === selectedSize.name) {
          size.selected = !size.selected
        }
        return size
      })
    },
    updateOptionList(state, selectedOption) {
      state.optionList.map((option) => {
        if (option.type === selectedOption.type) {
          option.count += selectedOption.cnt
        }
        return option
      })
    },
  },
  actions: {},
  modules: {},
})
