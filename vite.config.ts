import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': _resolve('src'),
        }

    },
    server: { host: '127.0.0.1', port: 3000 },

})
