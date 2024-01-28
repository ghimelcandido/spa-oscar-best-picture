import { Router } from "./router.js"

const router = new Router()

router.add('/', "/index.html")
router.add('/pages/the-zone-of-interest', "/pages/the-zone-of-interest.html")
router.add("/pages/poor-things", "/pages/poor-things.html")
router.add("/pages/past-lives", "/pages/past-lives.html")
router.add("/pages/oppenheimer", "/pages/oppenheimer.html")
router.add("/pages/maestro", "/pages/maestro.html")
router.add("/pages/killers-of-the-flower-moon", "/pages/killers-of-the-flower-moon.html")
router.add("/pages/the-holdovers", "/pages/the-holdovers.html")
router.add("/pages/barbie", "/pages/barbie.html")
router.add("/pages/anatomy-of-a-fall", "/pages/anatomy-of-a-fall.html")
router.add("/pages/american-fiction", "/pages/american-fiction.html")
router.add(404, "/pages/404.html")


    router.handle()
    window.onpopstate = () => router.handle()
        window.route = () => router.route()