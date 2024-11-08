import { defineStore } from 'pinia'
import { UserState } from 'types/store'
import { getToken, setToken } from '@/utils/auth'

// 第一个参数是id，唯一
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: getToken() || 'EFA68205747',
      userInfo: { name: '最新资深干货', phone: '18701664166' }
    }
  },
  getters: {
    namePic: (state) => state.userInfo.name.substring(0, 1)
  },
  actions: {
    setToken(token: string) {
      this.token = token
      setToken({
        token,
        expires: 30
      })
    },
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    }
  }
})
