// import express from 'express';
// import axios, { Method, AxiosResponse } from 'axios';
// const axios = require('axios')

// const ExpressToAxios = async (url, request) =>
//     axios({
//         url: url,
//         method: request.method,
//         headers: request.headers,
//         params: request.params,
//         data: request.body
//     });


// const AxiosToExpress = async (axiosResponse, expressResponse) =>
//     expressResponse.status(axiosResponse.status).header(axiosResponse.headers).send(axiosResponse.data);

// const Proxy = async (url, request, response) =>
//     AxiosToExpress(await ExpressToAxios(url, request), response);

// module.exports = { Proxy, AxiosToExpress, ExpressToAxios }