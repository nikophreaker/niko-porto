import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: "#22201F"
            },
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden"
                    },
                    "100%": {
                        width: "100%"
                    }
                },
                blink: {
                    "50%": {
                        borderColor: "transparent"
                    },
                    "100%": {
                        borderColor: "#22201F"
                    }
                }
            },
            animation: {
                typing: "typing 2s steps(16) normal, typing 1s steps(16) 5s reverse, blink .7s infinite",
                blink: "blink .7s infinite",
            }
        },
    }
}
