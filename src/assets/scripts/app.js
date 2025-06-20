import posthog from 'posthog-js'

posthog.init('phc_lnhVrIWayl8pi23l4mFqIRITu03Rp23YbvboOEQOzim', {
    api_host: 'https://malte.baer.website/canyon-w29Q',
    ui_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
    persistence: 'memory',
    disable_session_recording: true,
    enable_heatmaps: false,
    autocapture: false,
    before_send: (event) => {
        if (!event) {
            return null
        }

        const { host } = window.location
        const isValidHost = host.includes('malte.baer.website') || host.includes('localhost')

        if (!isValidHost) {
            return null // skip vercel preview deployments
        }

        event.properties = {
            ...event.properties,
            environment: host.includes('localhost') ? 'development' : 'production'
        }

        return event
    }
})
