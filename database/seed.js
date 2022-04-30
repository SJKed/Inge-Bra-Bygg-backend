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
            userName: 'Anna R. Johnston',
            userPassword: 'password',
            userEmail: 'AnnaRJohnston@rhyta.com',
            userRole: 'client'
        },
        {
            userName: 'Larry A. Wester',
            userPassword: 'password',
            userEmail: 'LarryAWester@teleworm.us',
            userRole: 'client'
        },
        {
            userName: 'Richard L. Myler',
            userPassword: 'password',
            userEmail: 'RichardLMyler@gmail.com',
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
            messageContent: 'Hi! Would it be possible to fix my porch up? I am a bit strapped for cash, but i do own a few of these BAYC Monkey NFTs. DIAMOND HANDS💎🙌 HOMIE! Interested?',
            userId: 2,
            taskId: 1,
        },
        {
            messageContent: 'Sorry Maam, but we only take payment in actual money.',
            userId: 4,
            taskId: 1,
        },
        {
            messageContent: 'Hi there! I am looking to have a 2 story villa built on my plot of land just some miles out of town. I am unfortunatly unable to pay for your services via cash or bank transfer. But i can however part ways with one of my premium BAYC Monkey NFTs! They are worth a fortune! ',
            userId: 3,
            taskId: 2,
        },
        {
            messageContent: 'How many did you all fall for the same scam?',
            userId: 4,
            taskId: 2,
        },
    ])
})();