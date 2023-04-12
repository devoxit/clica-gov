const routeMapper = require('../../routeMapping/routerMap')
const api = require('./api')
const router = require('express').Router
const proxy = require('express-http-proxy')//require('proxy')
const routers = new routeMapper(router, proxy, api)

module.exports = routers