import { variants } from "@catppuccin/palette";

const backgroundColors = [
    { color: variants.latte.base.hex },
    { color: variants.frappe.base.hex },
    { color: variants.macchiato.base.hex },
    { color: variants.mocha.base.hex },
    { color: "#000000" },
]

const latteAccents = [
    { color: variants.latte.text.hex },
    { color: variants.latte.rosewater.hex },
    { color: variants.latte.flamingo.hex },
    { color: variants.latte.pink.hex },
    { color: variants.latte.mauve.hex },
    { color: variants.latte.red.hex },
    { color: variants.latte.maroon.hex },
    { color: variants.latte.peach.hex },
    { color: variants.latte.yellow.hex },
    { color: variants.latte.green.hex },
    { color: variants.latte.teal.hex },
    { color: variants.latte.sky.hex },
    { color: variants.latte.sapphire.hex },
    { color: variants.latte.blue.hex },
    { color: variants.latte.lavender.hex }
];

const frappeAccents = [
    { color: variants.frappe.text.hex },
    { color: variants.frappe.rosewater.hex },
    { color: variants.frappe.flamingo.hex },
    { color: variants.frappe.pink.hex },
    { color: variants.frappe.mauve.hex },
    { color: variants.frappe.red.hex },
    { color: variants.frappe.maroon.hex },
    { color: variants.frappe.peach.hex },
    { color: variants.frappe.yellow.hex },
    { color: variants.frappe.green.hex },
    { color: variants.frappe.teal.hex },
    { color: variants.frappe.sky.hex },
    { color: variants.frappe.sapphire.hex },
    { color: variants.frappe.blue.hex },
    { color: variants.frappe.lavender.hex }
]

const macchiatoAccents = [
    { color: variants.macchiato.text.hex },
    { color: variants.macchiato.rosewater.hex },
    { color: variants.macchiato.flamingo.hex },
    { color: variants.macchiato.pink.hex },
    { color: variants.macchiato.mauve.hex },
    { color: variants.macchiato.red.hex },
    { color: variants.macchiato.maroon.hex },
    { color: variants.macchiato.peach.hex },
    { color: variants.macchiato.yellow.hex },
    { color: variants.macchiato.green.hex },
    { color: variants.macchiato.teal.hex },
    { color: variants.macchiato.sky.hex },
    { color: variants.macchiato.sapphire.hex },
    { color: variants.macchiato.blue.hex },
    { color: variants.macchiato.lavender.hex }
]

const mochaAccents = [
    { color: variants.mocha.text.hex },
    { color: variants.mocha.rosewater.hex },
    { color: variants.mocha.flamingo.hex },
    { color: variants.mocha.pink.hex },
    { color: variants.mocha.mauve.hex },
    { color: variants.mocha.red.hex },
    { color: variants.mocha.maroon.hex },
    { color: variants.mocha.peach.hex },
    { color: variants.mocha.yellow.hex },
    { color: variants.mocha.green.hex },
    { color: variants.mocha.teal.hex },
    { color: variants.mocha.sky.hex },
    { color: variants.mocha.sapphire.hex },
    { color: variants.mocha.blue.hex },
    { color: variants.mocha.lavender.hex }
]

const oledAccents = [
    { color: variants.mocha.text.hex },
    { color: variants.mocha.rosewater.hex },
    { color: variants.mocha.flamingo.hex },
    { color: variants.mocha.pink.hex },
    { color: variants.mocha.mauve.hex },
    { color: variants.mocha.red.hex },
    { color: variants.mocha.maroon.hex },
    { color: variants.mocha.peach.hex },
    { color: variants.mocha.yellow.hex },
    { color: variants.mocha.green.hex },
    { color: variants.mocha.teal.hex },
    { color: variants.mocha.sky.hex },
    { color: variants.mocha.sapphire.hex },
    { color: variants.mocha.blue.hex },
    { color: variants.mocha.lavender.hex }
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