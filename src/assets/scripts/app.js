import posthog from 'posthog-js'

posthog.init('phc_rJxtcvyDmwPVnBQkRrffPTwnrsjgL19ndOR7Mqow29Q', {
    api_host: 'https://malte.baer.website/canyon-w29Q',
    ui_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
    before_send: (event) => {
        if (!event) {
            return null
        }

        let environment = 'development'
        if (!window.location.host.includes('127.0.0.1') && !window.location.host.includes('localhost')) {
            environment = 'production'
        }
        event.properties = {
            ...event.properties,
            environment
        }

        return event
    }
})
