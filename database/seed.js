const { User, Task, TaskMessage } = require('../models');

User.bulkCreate([
    {
        userName: 'admin',
        userPassword: 'admin',
        userEmail: 'admin@admin.admin',
        userRole: 'admin'
    },
    {
        userName: 'ArneArensson',
        userPassword: 'ArneArensson',
        userEmail: 'Arne@arenab.arne',
        userRole: 'client',
        taskId: 1
    },
    {
        userName: 'XdXDSON',
        userPassword: 'XdXDSON',
        userEmail: 'XdXDSON@XdXDSON.XdXDSON',
        userRole: 'client',
        taskId: 1
    }
]);

Task.bulkCreate([
    {
    taskName: 'Fix my porch',
    taskDescription: 'I need to fix my porch please help im helpless please i need help please',
    taskStatus: 'Incomplete',
    taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    taskCreatedAt: new Date(),
    taskUpdatedAt: new Date(),
    taskCompletedAt: new Date(),
},
{
    taskName: 'Fix my car',
    taskDescription: 'I need to fix my car please help im helpless please i need help please',
    taskStatus: 'Incomplete',
    taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=62',
    taskCreatedAt: new Date(),
    taskUpdatedAt: new Date(),
    taskCompletedAt: new Date(),
},

]);

TaskMessage.bulkCreate([
    {
    messageContent: 'I need help please',
    userId: 2,
    taskId: 1
},
{
    messageContent: 'I will help you xD',
    userId: 3,
    taskId: 1
},
]);





