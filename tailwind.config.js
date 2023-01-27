const defaultTheme = require('tailwindcss/defaultTheme')
const baseFont = 16

function rem2px(input, fontSize = baseFont) {
    if (input == null) {
        return input
    }
    switch (typeof input) {
        case 'object':
            if (Array.isArray(input)) {
                return input.map((val) => rem2px(val, fontSize))
            }
            const ret = {}
            for (const key in input) {
                ret[key] = rem2px(input[key], fontSize)
            }
            return ret
        case 'string':
            return input.replace(
                /(\d*\.?\d+)rem$/,
                (_, val) => `${Math.round(parseFloat(val) * fontSize)}px`
            )
        case 'function':
            return eval(
                input
                    .toString()
                    .replace(
                        /(\d*\.?\d+)rem/g,
                        (_, val) =>
                            `${Math.round(parseFloat(val) * fontSize)}px`
                    )
            )
        default:
            return input
    }
}

module.exports = {
    content: ['./components/**/*.{vue,js}', './pages/**/*.{vue,js}'],
    theme: rem2px(defaultTheme),
    plugins: [],
}
