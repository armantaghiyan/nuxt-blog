/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'blue-light': '#378ef0',
                'blue-light-100': '#8ecef5',
                'blue': '#107abe',
                'blue-100': '#0e6aa6',

                'green': '#42b306',
                'green-100': '#3ea605',
                'green-200': '#33ab84',
                'green-300': '#268e6c',

                'red': '#d7373f',
                'yellow': '#edcc00',
                'orange': '#f29423',

                'gray-50': '#fff',
                'gray-75': '#fafafa',
                'gray-100': '#f5f5f5',
                'gray-200': '#eaeaea',
                'gray-300': '#e1e1e1',
                'gray-400': '#cacaca',
                'gray-500': '#b3b3b3',
                'gray-600': '#8e8e8e',
                'gray-700': '#6e6e6e',
                'gray-800': '#4b4b4b',
                'gray-900': '#323232',
            }
        },
    },
    plugins: [],
}

