const { User, Task, TaskMessage } = require('../models');

User.bulkCreate([
    {
        userName: 'admin',
        userPassword: 'admin',
        userEmail: 'admin@admin.admin',
        userRole: 'admin'
    },
    {
        userName: 'workerWorkersson',
        userPassword: 'working',
        userEmail: 'Worker@working.worked',
        userRole: 'worker',
        taskId: 1
    },
    {
        userName: 'ArneArensson',
        userPassword: 'ArneArensson',
        userEmail: 'Arne@arenab.arne',
        userRole: 'client',
        taskId: 1
    }
]);

Task.create({
    taskName: 'Fix my porch',
    taskDescription: 'I need to fix my porch please help im helpless please i need help please',
    taskStatus: 'Incomplete',
    taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    clientId: 3,
    workerId: 2,
    taskCreatedAt: new Date(),
    taskUpdatedAt: new Date(),
    taskCompletedAt: new Date(),
});

TaskMessage.create({
    messageContent: 'Hello, I need help with my porch please',
    userId: 3,
    taskId: 1,
});




