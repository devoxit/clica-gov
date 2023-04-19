

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
        }, {
            method: "post",
            uri: "/signup/send/phone",
            remoteMethod: "post",
            remoteUri: "/signup/send/phone",
            middlewares: {
                authentication: false,
                authorization: false,
                custom: []
            }
        }, {
            method: "post",
            uri: "/signup/verify/phone",
            remoteMethod: "post",
            remoteUri: "/signup/verify/phone",
            middlewares: {
                authentication: false,
                authorization: false,
                custom: []
            }
        }, {
            method: "post",
            uri: "/signup/send/email",
            remoteMethod: "post",
            remoteUri: "/signup/send/email",
            middlewares: {
                authentication: false,
                authorization: false,
                custom: []
            }
        }, {
            method: "post",
            uri: "/signup/verify/email",
            remoteMethod: "post",
            remoteUri: "/signup/verify/email",
            middlewares: {
                authentication: false,
                authorization: false,
                custom: []
            }
        }, {
            method: "post",
            uri: "/signup",
            remoteMethod: "post",
            remoteUri: "/signup",
            middlewares: {
                authentication: false,
                authorization: false,
                custom: []
            }
        },
        ]
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
                uri: "/user/list",
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
                uri: "/tenante/list",
                remoteMethod: "post",
                remoteUri: "/profile/tenante/list",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "get",
                uri: "/user",
                remoteMethod: "get",
                remoteUri: "/profile/user",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "post",
                uri: "/user/media",
                remoteMethod: "post",
                remoteUri: "/media/id",
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
                method: "patch",
                uri: "/user",
                remoteMethod: "patch",
                remoteUri: "/profile/user",
                middlewares: {
                    authentication: true,
                    profile: true,
                    authorization: false,
                    custom: []
                }
            }, {
                method: "patch",
                uri: "/tenante/update",
                remoteMethod: "patch",
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
            }, {
                method: "post",
                uri: "/user",
                remoteMethod: "post",
                remoteUri: "/profile/user",
                middlewares: {
                    authentication: true,
                    profile: true,
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
            uri: "/comment/list",
            remoteMethod: "post",
            remoteUri: "/relation/comment/of/post",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            },
        },
        {
            method: "post",
            uri: "/comment",
            remoteMethod: "post",
            remoteUri: "/relation/comment/on/post",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }

        },
        ]

    },
    //-------------------event + event relation api--------------------------
    {
        service: "event",
        baseUrl: "/app/event",
        remoteBaseUrl: "/api/v1",
        uris: [{
            method: "post",
            uri: "/",
            remoteMethod: "post",
            remoteUri: "/event/list",
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
            remoteUri: "/event",
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
            remoteUri: "/event",
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
            remoteUri: "/event/id",
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
            uri: "/comment/list",
            remoteMethod: "post",
            remoteUri: "/relation/comment/of/event",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            },
        },
        {
            method: "post",
            uri: "/comment",
            remoteMethod: "post",
            remoteUri: "/relation/comment/on/event",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }

        },
        {
            method: "post",
            uri: "/reactions",
            remoteMethod: "post",
            remoteUri: "/relation/reaction/of/event",
            middlewares: {
                authentication: true,
                profile: true,
                authorization: false,
                custom: []
            }

        },
        {
            method: "post",
            uri: "/react",
            remoteMethod: "post",
            remoteUri: "/relation/react/to/event",
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