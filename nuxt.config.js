export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'gala-games-clone',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
                integrity:
                    'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==',
                crossorigin: 'anonymous',
                referrerpolicy: 'no-referrer',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
                crossorigin: 'anonymous',
                referrerpolicy: 'no-referrer',
            },
        ],
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/tailwind.css', '@/assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxt/postcss8',
        '@nuxtjs/google-fonts',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        [
            'nuxt-mail',
            {
                message: {
                    name: 'support',
                    to: 'michael.jumoc@ustp.edu.ph',
                },
                smtp: {
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    port: 993,
                    auth: {
                        user: 'michaeljumoc@gmail.com',
                        pass: 'vjooxlnjqsnmybbo',
                    },
                },
            },
        ],
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        loaders: {
            sass: {
                implementation: require('sass'),
            },
            scss: {
                implementation: require('sass'),
            },
        },
    },
    googleFonts: {
        prefetch: true,
        preconnect: true,
        preload: true,
        // display: 'swap',
        // families: {
        //     Roboto: [300, 400, 500, 700],
        // },
    },
}
