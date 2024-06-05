import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/user/getUserData',
    method: 'get',
    response: () => {
      return {
        
      }
    }
  }
] as MockMethod[]