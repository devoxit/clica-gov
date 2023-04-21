const axios = require("axios")
const serviceReg = require('../routeMapping/service')
const middlewares = {
    authenticate: async (req, res, next) => {
        let url = `${req.protocol}://${serviceReg['authnz']}/api/v1/token/auth`
        console.log(url)
        try {
            let result = await axios({
                url,
                method: "GET",
                headers: { Authorization: req.headers['authorization'] }
            })

            if (result.data.success) {
                req.user = result.data.data
                req.headers['X-Proxy-Verified'] = Date().toString()
                return next()
            }
            return res.json(result.data)
        } catch (err) {
            console.log(err)
            let error = err.response ? err.response.data : err
            return res.status(error.status || 500).json(error)
        }
    },
    isProfile: (req, res, next) => {
        if (!req.user || !req.user.profile || !Object.hasOwn(req.user.profile, 'prim_area'))
            return res.status(401).json({
                err: "epr-001",
                msg: "profile empty!",
                status: 401
            })
        return next()
    }
}

module.exports = middlewares