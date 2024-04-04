// Logging middleware for logging requests
export const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
