module.exports = errorHandler = (err, req, res, next) => {
    if (!err.code) err.code = 500;
    if (!err.name) err.name = 'Server error';
    if (!err.msg) err.msg = 'Something went wrong';
    res.status(err.code).json({
        name: err.name,
        code: err.code,
        message: err.msg
    });
};