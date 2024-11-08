import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// 设置别名，还可以添加其他路径
const alias: Record<string, string> = {
  '@': pathResolve('src'),
  '@views': pathResolve('src/views'),
  '@store': pathResolve('src/store/modules'),
  '@comp': pathResolve('src/components')
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取当前工作目录
  const root = process.cwd()
  // 获取环境变量
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_PUBLIC_PATH,
    plugins: [vue()],
    resolve: {
      alias
    },
    server: {
      host: '0.0.0.0',
      port: 9001,
      open: true,
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        '^/api': {
          target: 'http://192.168.1.4:8688',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
