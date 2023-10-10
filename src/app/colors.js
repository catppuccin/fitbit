export const Flavors = {
    LATTE: 1,
    FRAPPE: 2,
    MACCHIATO: 3,
    MOCHA: 4,
    OLED: 5
}

export const Themes = {
    LATTE:{
        BACKGROUND: "#eff1f5",
        TEXT: "#4c4f69",
        ROSEWATER: "#dc8a78",
        FLAMINGO: "#dd7878",
        PINK: "#ea76cb",
        MAUVE: "#8839ef",
        RED: "#d20f39",
        MAROON: "#e64553",
        PEACH: "#fe640b",
        YELLOW: "#df8e1d",
        GREEN: "#40a02b",
        TEAL: "#179299",
        SKY: "#04a5e5",
        SAPPHIRE: "#209fb5",
        BLUE: "#1e66f5",
        LAVENDER: "#7287fd"
    },
    FRAPPE:{
        BACKGROUND: "#303446",
        TEXT: "#c6d0f5",
        ROSEWATER: "#f2d5cf",
        FLAMINGO: "#eebebe",
        PINK: "#f4b8e4",
        MAUVE: "#ca9ee6",
        RED: "#e78284",
        MAROON: "#ea999c",
        PEACH: "#ef9f76",
        YELLOW: "#e5c890",
        GREEN: "#a6d189",
        TEAL: "#81c8be",
        SKY: "#99d1db",
        SAPPHIRE: "#85c1dc",
        BLUE: "#8caaee",
        LAVENDER: "#babbf1"
    },
    MACCHIATO:{
        BACKGROUND: "#24273a",
        TEXT: "#cad3f5",
        ROSEWATER: "#f4dbd6",
        FLAMINGO: "#f0c6c6",
        PINK: "#f5bde6",
        MAUVE: "#c6a0f6",
        RED: "#ed8796",
        MAROON: "#ee99a0",
        PEACH: "#f5a97f",
        YELLOW: "#eed49f",
        GREEN: "#a6da95",
        TEAL: "#8bd5ca",
        SKY: "#91d7e3",
        SAPPHIRE: "#7dc4e4",
        BLUE: "#8aadf4",
        LAVENDER: "#b7bdf8"
    },
    MOCHA:{
        BACKGROUND: "#1e1e2e",
        TEXT: "#cdd6f4",
        ROSEWATER: "#f5e0dc",
        FLAMINGO: "#f2cdcd",
        PINK: "#f5c2e7",
        MAUVE: "#cba6f7",
        RED: "#f38ba8",
        MAROON: "#eba0ac",
        PEACH: "#fab387",
        YELLOW: "#f9e2af",
        GREEN: "#a6e3a1",
        TEAL: "#94e2d5",
        SKY: "#89dceb",
        SAPPHIRE: "#74c7ec",
        BLUE: "#89b4fa",
        LAVENDER: "#b4befe"
    },
    OLED:{
        BACKGROUND: "#000000"
    }
}

export function getFlavor(setting) {
    switch (setting) {
        case Themes.LATTE.BACKGROUND: {
            return Flavors.LATTE;
        }
        case Themes.FRAPPE.BACKGROUND: {
            return Flavors.FRAPPE;
        }
        case Themes.MACCHIATO.BACKGROUND: {
            return Flavors.MACCHIATO;
        }
        case Themes.MOCHA.BACKGROUND: {
            return Flavors.MOCHA;
        }
        case Themes.OLED.BACKGROUND: {
            return Flavors.OLED;
        }
        default: {
            return Flavors.MOCHA
        }
    }
}