

module.exports = [
    //------------------auth api----------------------------
    {
        service: "authnz",
        baseUrl: "/app/auth",
        remoteBaseUrl: "/api/v1",
        uris: [{
            method: "post",
            uri: "/signin",
            remoteMethod: "post",
            remoteUri: "/auth/signin",
            middlewares: {
                authentication: false,
                authorization: false,
                custom: []
            }
        }, {
            method: "get",
            uri: "/token/refresh",
            remoteMethod: "get",
            remoteUri: "/token/refresh",
            middlewares: {
                authentication: false,
                authorization: false,
                custom: []
            }
        },]
    },
    //------------------user info api----------------------------
    {
        service: "authnz",
        baseUrl: "/app/user",
        remoteBaseUrl: "/api/v1",
        uris: [{
            method: "patch",
            uri: "/personalinfo",
            remoteMethod: "patch",
            remoteUri: "/user/personalinfo",
            middlewares: {
                authentication: true,
                authorization: false,
                custom: []
            }
        }, {
            method: "post",
            uri: "/personalinfo",
            remoteMethod: "post",
            remoteUri: "/user/id",
            middlewares: {
                authentication: true,
                authorization: false,
                custom: []
            }
        }, {
            method: "get",
            uri: "/personalinfo",
            remoteMethod: "post",
            remoteUri: "/user/id",
            middlewares: {
                authentication: true,
                authorization: false,
                custom: []
            }
        }]
    },
    //------------------user/tenante profile api----------------------------
    {
        service: "profile",
        baseUrl: "/app/profile",
        remoteBaseUrl: "/api/v1",
        uris: [
            {
                method: "post",
                uri: "/user",
                remoteMethod: "post",
                remoteUri: "/profile/user/list",
                middlewares: {
                    authentication: true,
                    profile: false,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "post",
                uri: "/tenante",
                remoteMethod: "post",
                remoteUri: "/profile/tenante/list",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "post",
                uri: "/user/id",
                remoteMethod: "post",
                remoteUri: "/profile/user/id",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "post",
                uri: "/tenante/id",
                remoteMethod: "post",
                remoteUri: "/profile/tenante/id",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "put",
                uri: "/user/update",
                remoteMethod: "put",
                remoteUri: "/profile/user",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "put",
                uri: "/tenante/update",
                remoteMethod: "put",
                remoteUri: "/profile/tenante",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "get",
                uri: "/zipcode",
                remoteMethod: "get",
                remoteUri: "/zipcode",
                middlewares: {
                    authentication: false,
                    profile: false,
                    authorization: false,
                    custom: []
                }
            }]
    },
    //------------------post+post relation api----------------------------
    {
        service: "post",
        baseUrl: "/app/post",
        remoteBaseUrl: "/api/v1",
        uris: [{
            method: "post",
            uri: "/",
            remoteMethod: "post",
            remoteUri: "/post/list",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }
        },
        {
            method: "post",
            uri: "/create",
            remoteMethod: "post",
            remoteUri: "/post",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }
        },
        {
            method: "put",
            uri: "/update",
            remoteMethod: "put",
            remoteUri: "/post",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }
        },
        {
            method: "post",
            uri: "/id",
            remoteMethod: "post",
            remoteUri: "/post/id",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }
        },
        {
            method: "delete",
            uri: "/",
            remoteMethod: "delete",
            remoteUri: "/post",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }
        },
        {
            method: "post",
            uri: "/media",
            remoteMethod: "post",
            remoteUri: "/media/list",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }
        },
        {
            method: "post",
            uri: "/comment",
            remoteMethod: "post",
            remoteUri: "/relation/comment/of/post",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }
        },
        ]

    }
]