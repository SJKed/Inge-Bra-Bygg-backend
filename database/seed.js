const User = require('../models/user');
const TaskMessage = require('../models/taskMessage');
const Task = require('../models/task');

(async () => {
    await User.create({
        userName: 'admin',
        userPassword: 'admin',
        userEmail: 'admin@admin.com',
        userRole: 'admin'
    })
    console.log('Admin user created');
    await User.create({
        userName: 'client',
        userPassword: 'client',
        userEmail: 'client@client.com',
        userRole: 'client'
    })
    console.log('Client user created');
    await User.create({
        userName: 'worker',
        userPassword: 'worker',
        userEmail: 'worker@worker.com',
        userRole: 'worker'
    })
    console.log('Worker user created');


    await Task.create({
        taskName: 'Fix my porch',
        taskDescription: 'I need to fix my porch please help im helpless please i need help please',
        taskStatus: 'Incomplete',
        taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        clientId: 3,
        workerId: 2,
        taskCreatedAt: new Date(),
        taskUpdatedAt: new Date(),
        taskCompletedAt: new Date()
    })
    console.log('Task created');

    await TaskMessage.create({
        messageContent: 'I need help please',
        userId: 2,
        taskId: 1        
    })
    console.log('Task message created');
})();



// User.bulkCreate([
//     {
//         userName: 'admin',
//         userPassword: 'admin',
//         userEmail: 'admin@admin.admin',
//         userRole: 'admin'
//     },
//     {
//         userName: 'workerWorkersson',
//         userPassword: 'working',
//         userEmail: 'Worker@working.worked',
//         userRole: 'worker',
//         taskId: 1
//     },
//     {
//         userName: 'ArneArensson',
//         userPassword: 'ArneArensson',
//         userEmail: 'Arne@arenab.arne',
//         userRole: 'client',
//         taskId: 1
//     },
//     {
//         userName: 'XdXDSON',
//         userPassword: 'XdXDSON',
//         userEmail: 'XdXDSON@XdXDSON.XdXDSON',
//         userRole: 'client',
//         taskId: 1
//     }
// ]);

// Task.bulkCreate([
//     {
//         taskName: 'Fix my porch',
//         taskDescription: 'I need to fix my porch please help im helpless please i need help please',
//         taskStatus: 'Incomplete',
//         taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//         clientId: 3,
//         workerId: 2,
//         taskCreatedAt: new Date(),
//         taskUpdatedAt: new Date(),
//         taskCompletedAt: new Date(),
//     },
//     {
//         taskName: 'Fix my car',
//         taskDescription: 'I need to fix my car please help im helpless please i need help please',
//         taskStatus: 'Incomplete',
//         taskImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=62',
//         clientId: 3,
//         workerId: 2,
//         taskCreatedAt: new Date(),
//         taskUpdatedAt: new Date(),
//         taskCompletedAt: new Date(),
//     },

// ]);

// TaskMessage.bulkCreate([
//     {
//         messageContent: 'I need help please',
//         userId: 2,
//         taskId: 1
//     },
//     {
//         messageContent: 'I will help you xD',
//         userId: 3,
//         taskId: 1
//     },
// ]);




