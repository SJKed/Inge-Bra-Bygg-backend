const User = require('../models/user');
const TaskMessage = require('../models/taskMessage');
const Task = require('../models/task');

(async () => {
    await User.bulkCreate([
        {
            userName: 'admin',
            userPassword: 'admin',
            userEmail: 'admin@admin.com',
            userRole: 'admin'
        },
        {
            userName: 'client',
            userPassword: 'client',
            userEmail: 'client@client.com',
            userRole: 'client'
        },
        {
            userName: 'client2',
            userPassword: 'client',
            userEmail: 'client2@client.com',
            userRole: 'client'
        },
        {
            userName: 'worker',
            userPassword: 'worker',
            userEmail: 'worker@worker.com',
            userRole: 'worker'
        }
    ])

    await Task.bulkCreate([
        {
            taskName: 'Fix my porch',
            taskDescription: 'I need to fix my porch please help im helpless please i need help please',
            taskStatus: 'Incomplete',
            taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            clientId: 2,
            workerId: 4,
            taskCreatedAt: new Date(),
            taskUpdatedAt: new Date(),
            taskCompletedAt: new Date()
        },
        {
            taskName: 'Build me a house',
            taskDescription: 'House please',
            taskStatus: 'Incomplete',
            taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            clientId: 3,
            workerId: 4,
            taskCreatedAt: new Date(),
            taskUpdatedAt: new Date(),
            taskCompletedAt: new Date()
        },
    ])

    await TaskMessage.bulkCreate([
        {
            messageContent: 'I need help please',
            userId: 2,
            taskId: 1,
        },
        {
            messageContent: 'I am here to help!',
            userId: 4,
            taskId: 1,
        }
    ])
})();