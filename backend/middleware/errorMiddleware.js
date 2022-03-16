const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500
    res.status(statusCode)
    const result = {message: err.message}
    if (process.env.NODE_ENV !== 'production') {
        result.stack = err.stack
    }
    res.json(result)
}

module.exports = {errorHandler}