const app = require('./app/main')

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log('listening on:', PORT)
})