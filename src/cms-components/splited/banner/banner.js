// Styles
import './banner.pcss';

({
    "plugins": ["jsdom2-quokka-plugin"],
    "jsdomConfig": {
        "config": {
            "url": "http://localhost:3000"
        },
        "options" : {
            "includeNodeLocations": true
        }
    }
})

const $banner = document.querySelector('.p-banner'); //?

$banner.parentNode.nodeName //?
