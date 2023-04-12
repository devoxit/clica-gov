const serviceReg = require('./service.json')
const mdw = require('../middleware')

class RouterMap {
    #routersConfig = []
    #router
    #routersList = []
    constructor(router, proxy, config) {
        this.#router = router
        this.#routersConfig = config
        this.#routersConfig.map(route => {
            let { service, baseUrl, remoteBaseUrl, uris } = route
            uris.map(item => {
                let { method, uri, remoteMethod, remoteUri, middlewares } = item
                let baseMiddleware = []
                if (middlewares.authentication) baseMiddleware.push(mdw.authenticate)
                if (middlewares.profile) baseMiddleware.push(mdw.isProfile)
                if (middlewares.authorization) baseMiddleware.push(authzMd)

                let router = this.#router()
                router[method](uri, ...baseMiddleware, ...(middlewares.custom || []), (req, res) => {

                    // req.url = `${req.protocol}://${serviceReg[service]}${remoteBaseUrl}${remoteUri}`
                    var apiProxy = proxy(`${req.protocol}://${serviceReg[service]}`, {
                        proxyReqPathResolver: function (req, res) {
                            var args = req.url.split("?")
                            var query = null
                            if (args.length > 1)
                                query = args[1]
                            console.log(`${remoteBaseUrl}${remoteUri}${query ? `?${query}` : ""}`)

                            return `${remoteBaseUrl}${remoteUri}${query ? `?${query}` : ""}`;
                        },
                        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
                            let r = srcReq
                            return proxyReqOpts;
                        },
                        preserveReqSession: true
                    });

                    return apiProxy(req, res)
                })
                this.#routersList.push({ baseUrl, router })
            })

        })
    }


    getConfig() {
        return this.#routersConfig
    }

    getRouters() {
        return this.#routersList
    }

}
module.exports = RouterMap