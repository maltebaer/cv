import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'
import persist from '@alpinejs/persist'

import "drab/popover/define"

Alpine.plugin(anchor)
Alpine.plugin(persist)

window.Alpine = Alpine

Alpine.start()
