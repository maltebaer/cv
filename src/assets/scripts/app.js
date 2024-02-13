import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'
import persist from '@alpinejs/persist'

import "drab/popover/define"

Alpine.plugin(anchor)
Alpine.plugin(persist)

Alpine.data('controls', ($persist) => ({
    activeTheme: $persist('auto'),
    activeProperties: $persist([]),

    setTheme(theme) {
        this.activeTheme = theme

        const html = document.firstElementChild
        html.setAttribute('data-theme', theme)
    },

    setThemeProperty(property, theme) {
        const html = document.firstElementChild

        if (theme === 'auto') {
            html.style.removeProperty(property)
            this.activeProperties = this.activeProperties.filter(p => p.property !== property)
        } else {
            value = `var(${property}-${theme})`
            html.style.setProperty(property, value)
            this.updateOrAddActiveProperty(property, theme)
        }
    },

    updateOrAddActiveProperty(property, theme) {
        existingProperty = this.activeProperties.find(p => p.property === property);

        existingProperty ?
            existingProperty.theme = theme :
            this.activeProperties.push({ property, theme });
    },

    getActivePropertyTheme(property) {
        const foundProperty = this.activeProperties.find(p => p.property === property);

        return foundProperty ? foundProperty.theme : 'auto';
    },

    isActiveProperty(property, theme) {
        const foundProperty = this.activeProperties.find(p => p.property === property);

        if (!foundProperty && theme === 'auto') {
            return true;
        }

        return foundProperty && foundProperty.theme === theme;
    },

    toggleStylesheet(layer) {
        const stylesheet = document.getElementById(layer + '-stylesheet')
        stylesheet.toggleAttribute('disabled')
    },

    init() {
        this.setTheme(this.activeTheme)

        for (const propery of this.activeProperties) {
            this.setThemeProperty(propery.property, propery.theme)
        }
    }
}))

window.Alpine = Alpine

Alpine.start()
