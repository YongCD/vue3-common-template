import {ref} from 'vue'
import {defineStore} from 'pinia'

export default defineStore('isCollapse', () => {
  const isCollapse = ref(false)
  return {isCollapse}
})