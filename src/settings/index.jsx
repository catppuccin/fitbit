import { Themes } from "../app/colors";

const backgroundColors = [
    { color: Themes.LATTE.BACKGROUND },
    { color: Themes.FRAPPE.BACKGROUND },
    { color: Themes.MACCHIATO.BACKGROUND },
    { color: Themes.MOCHA.BACKGROUND },
    { color: Themes.OLED.BACKGROUND },
]

const latteAccents = [
    { color: Themes.LATTE.TEXT },
    { color: Themes.LATTE.ROSEWATER },
    { color: Themes.LATTE.FLAMINGO },
    { color: Themes.LATTE.PINK },
    { color: Themes.LATTE.MAUVE },
    { color: Themes.LATTE.RED },
    { color: Themes.LATTE.MAROON },
    { color: Themes.LATTE.PEACH },
    { color: Themes.LATTE.YELLOW },
    { color: Themes.LATTE.GREEN },
    { color: Themes.LATTE.TEAL },
    { color: Themes.LATTE.SKY },
    { color: Themes.LATTE.SAPPHIRE },
    { color: Themes.LATTE.BLUE },
    { color: Themes.LATTE.LAVENDER }
];

const frappeAccents = [
    { color: Themes.FRAPPE.TEXT },
    { color: Themes.FRAPPE.ROSEWATER },
    { color: Themes.FRAPPE.FLAMINGO },
    { color: Themes.FRAPPE.PINK },
    { color: Themes.FRAPPE.MAUVE },
    { color: Themes.FRAPPE.RED },
    { color: Themes.FRAPPE.MAROON },
    { color: Themes.FRAPPE.PEACH },
    { color: Themes.FRAPPE.YELLOW },
    { color: Themes.FRAPPE.GREEN },
    { color: Themes.FRAPPE.TEAL },
    { color: Themes.FRAPPE.SKY },
    { color: Themes.FRAPPE.SAPPHIRE },
    { color: Themes.FRAPPE.BLUE },
    { color: Themes.FRAPPE.LAVENDER }
]

const macchiatoAccents = [
    { color: Themes.MACCHIATO.TEXT },
    { color: Themes.MACCHIATO.ROSEWATER },
    { color: Themes.MACCHIATO.FLAMINGO },
    { color: Themes.MACCHIATO.PINK },
    { color: Themes.MACCHIATO.MAUVE },
    { color: Themes.MACCHIATO.RED },
    { color: Themes.MACCHIATO.MAROON },
    { color: Themes.MACCHIATO.PEACH },
    { color: Themes.MACCHIATO.YELLOW },
    { color: Themes.MACCHIATO.GREEN },
    { color: Themes.MACCHIATO.TEAL },
    { color: Themes.MACCHIATO.SKY },
    { color: Themes.MACCHIATO.SAPPHIRE },
    { color: Themes.MACCHIATO.BLUE },
    { color: Themes.MACCHIATO.LAVENDER }
]

const mochaAccents = [
    { color: Themes.MOCHA.TEXT },
    { color: Themes.MOCHA.ROSEWATER },
    { color: Themes.MOCHA.FLAMINGO },
    { color: Themes.MOCHA.PINK },
    { color: Themes.MOCHA.MAUVE },
    { color: Themes.MOCHA.RED },
    { color: Themes.MOCHA.MAROON },
    { color: Themes.MOCHA.PEACH },
    { color: Themes.MOCHA.YELLOW },
    { color: Themes.MOCHA.GREEN },
    { color: Themes.MOCHA.TEAL },
    { color: Themes.MOCHA.SKY },
    { color: Themes.MOCHA.SAPPHIRE },
    { color: Themes.MOCHA.BLUE },
    { color: Themes.MOCHA.LAVENDER }
]

const oledAccents = [
    { color: Themes.MOCHA.TEXT },
    { color: Themes.MOCHA.ROSEWATER },
    { color: Themes.MOCHA.FLAMINGO },
    { color: Themes.MOCHA.PINK },
    { color: Themes.MOCHA.MAUVE },
    { color: Themes.MOCHA.RED },
    { color: Themes.MOCHA.MAROON },
    { color: Themes.MOCHA.PEACH },
    { color: Themes.MOCHA.YELLOW },
    { color: Themes.MOCHA.GREEN },
    { color: Themes.MOCHA.TEAL },
    { color: Themes.MOCHA.SKY },
    { color: Themes.MOCHA.SAPPHIRE },
    { color: Themes.MOCHA.BLUE },
    { color: Themes.MOCHA.LAVENDER }
]

function mySettings() {
    return (
        <Page>
            <Section
                title="Flavor">
                <ColorSelect
                    settingsKey="flavor"
                    colors={backgroundColors} />
            </Section>
            <Section
                title="Accent (Latte)">
                <ColorSelect
                    settingsKey="latteAccent"
                    colors={latteAccents} />
            </Section>
            <Section
                title="Accent (Frappe)">
                <ColorSelect
                    settingsKey="frappeAccent"
                    colors={frappeAccents} />
            </Section>
            <Section
                title="Accent (Macchiato)">
                <ColorSelect
                    settingsKey="macchiatoAccent"
                    colors={macchiatoAccents} />
            </Section>
            <Section
                title="Accent (Mocha)">
                <ColorSelect
                    settingsKey="mochaAccent"
                    colors={mochaAccents} />
            </Section>
            <Section
                title="Accent (Oled)">
                <ColorSelect
                    settingsKey="oledAccent"
                    colors={oledAccents} />
            </Section>

            <Section
                title="Other Settings">
                <Toggle
                    settingsKey="showClockDivider"
                    label="Show Clock Divider" />
                <Toggle
                    settingsKey="tintHours"
                    label="Tint Hours" />
                <Toggle
                    settingsKey="tintMinutes"
                    label="Tint Minutes" />

                <Toggle
                    settingsKey="useAmericanDate"
                    label="Use American Date Format"/>
            </Section>

        </Page>
    );
}

registerSettingsPage(mySettings);