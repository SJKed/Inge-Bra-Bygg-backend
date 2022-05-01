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
    ]),
    createTask: validator([
        check('taskName').exists()
            .withMessage('Missing task name'),
        check('taskDescription').exists()
            .withMessage('Missing task description'),
        check('taskStatus').exists()
            .withMessage('Missing task status'),
        check('taskImage').exists()
            .withMessage('Missing task image'),
        check('clientId').exists()
            .withMessage('Missing client id'),
        check('workerId').exists()
            .withMessage('Missing worker id')
    ]),
    updateTask: validator([
        check('taskStatus').exists()
            .isIn(['pending', 'in progress', 'completed'])
            .withMessage('Missing task status'),
    ]),


    //user creation validations
    createUser: validator([
        check('userName').exists()
            .withMessage('Missing user name'),
        check('userEmail').exists()
            .withMessage('Missing user email'),
        check('userPassword').exists()
            .withMessage('Missing user password'),
        check('userRole').exists()
            .withMessage('Missing user role'),
    ]),
}