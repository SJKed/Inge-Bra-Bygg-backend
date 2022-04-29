const { check, body, validationResult, query, header } = require('express-validator')

const validator = (validations) => async (req, res, next) => {
    for (let validation of validations) {
        const result = await validation.run(req);
        if (result.errors.length) break;
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    
    res.status(400).json({ errors: errors.array() });
}

module.exports = {
    login: validator([
        check('email').exists()
            .withMessage('Missing email'),
        check('password').exists()
            .withMessage('Missing password')
    ])
}