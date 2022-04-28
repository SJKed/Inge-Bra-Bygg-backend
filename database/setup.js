const {User, Task, TaskMessage} = require('../models');

User.sync({force: true})
Task.sync({force: true})
TaskMessage.sync({force: true})

