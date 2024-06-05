const env = import.meta.env.MODE || 'production'

const EnvConfig:any = {
  development: {
    baseApi: '/api'
  },
  test: {
    baseApi: '//test.future.com/api'
  },
  production: {
    baseApi: '//future.com/api'
  }
}

export default {
  env,
  mock: true,
  mockApi: '/mock',
  ...EnvConfig[env]
}