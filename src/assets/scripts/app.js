import Alpine from 'alpinejs'
import Tooltip from "@ryangjchandler/alpine-tooltip";

Alpine.plugin(
    Tooltip.defaultProps({
        theme: 'material',
    })
);

window.Alpine = Alpine
Alpine.start()
