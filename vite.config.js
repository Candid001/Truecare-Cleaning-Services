import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import richSvg from "vite-plugin-react-rich-svg";

// https://vite.dev/config/

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        richSvg({
            componentLoaderOptions: {
                svgrConfig: {
                    svgo: true,
                    svgoConfig: {
                        floatPrecision: 2,
                        plugins: ["prefixIds", "convertStyleToAttrs"],
                    },
                    memo: true,
                },
            },
        }),
        
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@assets": resolve(__dirname, "./src/assets"),
            "@lib": resolve(__dirname, "./src/lib"),
            "@components": resolve(__dirname, "./src/components"),
        },
    },
})
